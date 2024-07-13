document.addEventListener('DOMContentLoaded', ()=> {
});


function alterarTema(){
    const tema = document.body.getAttribute('data-theme');
    const temaNovo = tema == 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', temaNovo);
}