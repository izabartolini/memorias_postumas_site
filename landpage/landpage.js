var btMenu = document.getElementById('menu')
var btFechar = document.getElementById('fechar')
var links = document.getElementById('links')
var titulo = document.getElementById('titulo')



function atualizarPagina(){
    if(window.innerWidth>=800){
        btMenu.classList.add("icon-invisivel")
        btFechar.classList.add("icon-invisivel")
        links.classList.add("links")
        titulo.classList.add("titulo")
        titulo.style.marginRight='0%'
    }
    if(window.innerWidth<800){
        btMenu.classList.add('icon-visivel')
 }
}

btMenu.addEventListener('click', function () {

    if (links.classList.contains('links')) {
        links.classList.remove('links')
        links.classList.add('links-aberto')
        btMenu.classList.remove('icon-visivel')
        btMenu.classList.add('icon-invisivel')
        btFechar.classList.remove('icon-invisivel')
        btFechar.classList.add('icon-visivel')

        titulo.style.marginRight = "-100%"

    } else {
        alert('erro')
    }

})

btFechar.addEventListener('click', function(){
    if (links.classList.contains('links-aberto')) {
        links.classList.add('links')
        links.classList.remove('links-aberto')
        btMenu.classList.add('icon-visivel')
        btMenu.classList.remove('icon-invisivel')
        btFechar.classList.add('icon-invisivel')
        btFechar.classList.remove('icon-visivel')

        titulo.style.marginRight = "0%"

    } else {
        alert('erro')
    }
})


window.addEventListener('resize', atualizarPagina)
window.addEventListener('load', atualizarPagina)