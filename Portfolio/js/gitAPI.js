const repositories = document.querySelector(".principal");

function getApi() {
  const headers = {
    Authorization: "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",
  };

  fetch("https://api.github.com/users/joaomarcosp-souza/repos", { headers })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("Erro na requisição");
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((item) => {
        let project = document.createElement("div");
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
                </div>
            </div>
        `;
        repositories.appendChild(project);
      });
    })
    .catch((error) => console.error("Falha na requisição:", error));
}

getApi();
