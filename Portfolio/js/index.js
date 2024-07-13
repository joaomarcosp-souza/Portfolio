document.addEventListener('DOMContentLoaded', ()=> {
    verificarTema();
});

function verificarTema(){
    if(localStorage.getItem('tema')){
        document.body.setAttribute('data-theme', localStorage.getItem('tema'));
    }
}

function alterarTema(){
    const tema = document.body.getAttribute('data-theme');
    const temaNovo = tema == 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', temaNovo);
    localStorage.setItem('tema', temaNovo);
}