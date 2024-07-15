const repositories = document.querySelector('.principal');

function getApi() {
    fetch('https://api.github.com/users/joaomarcosp-souza/repos')
        .then(async response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            let data = await response.json();

            data.map(item => {
                let project = document.createElement('div');

                project.innerHTML = `
                   <div class="card">
                    <div class="content">
                        <div class="info">
                            <h5>${item.name}</h5>
                            <p>${item.description || "sem descrição"}</p>
                        </div>
                        <div class="tags-e-banner">
                            <div class="tags">
                                <div class="tecnologias-tag">${item.language}</div>
                            </div>
                        </div>
                        <div class="link">
                            <a href="${item.html_url}" target="_blank">Ver projeto</a>
                    </div>
                </div>
                `
                repositories.appendChild(project);
        })
    })
}


getApi();
