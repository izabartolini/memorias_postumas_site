var btBrasCubas = document.getElementById("bras");
var btQuincasBorba = document.getElementById("quincas");
var footer = document.getElementById("footer")
var btVoltar = document.getElementById("seta")
var containerSeta = document.getElementById('containerseta')

btBrasCubas.addEventListener("click", function () {

    if (btBrasCubas.classList.contains('personagem-menu1')) {
        btBrasCubas.classList.add('personagem-menuaberto1')
        btBrasCubas.classList.remove('personagem-menu1')
        btQuincasBorba.classList.toggle('invisivel')
        footer.classList.add("footer-ajustado")
        footer.classList.remove("footer-normal")
        containerSeta.classList.add('seta')
        containerSeta.classList.remove('invisivel')

    }

})

btQuincasBorba.addEventListener("click", function () {

    if (btQuincasBorba.classList.contains('personagem-menu2')) {
        btQuincasBorba.classList.add('personagem-menuaberto2')
        btQuincasBorba.classList.remove('personagem-menu2')
        btBrasCubas.classList.toggle('invisivel')
        footer.classList.add("footer-ajustado")
        footer.classList.remove("footer-normal")
        containerSeta.classList.add('seta')
        containerSeta.classList.remove('invisivel')
    }

})

btVoltar.addEventListener("click", function () {


    if (btQuincasBorba.classList.contains('invisivel') && btBrasCubas.classList.contains('personagem-menuaberto1')) {
        btQuincasBorba.classList.remove('invisivel')
        btQuincasBorba.classList.add('personagem-menu2')
        
        btBrasCubas.classList.add('personagem-menu1')
        btBrasCubas.classList.remove('personagem-menuaberto1')

        footer.classList.remove("footer-ajustado")
        footer.classList.add("footer-normal")
        containerSeta.classList.toggle('invisivel')
    }else
    if (btQuincasBorba.classList.contains('personagem-menuaberto2') && btBrasCubas.classList.contains('invisivel')) {
        btQuincasBorba.classList.add('personagem-menu2')
        btQuincasBorba.classList.remove('personagem-menuaberto2')
        btBrasCubas.classList.remove('invisivel')

        btBrasCubas.classList.add('personagem-menu1')
        
        footer.classList.remove("footer-ajustado")
        footer.classList.add("footer-normal")
        containerSeta.classList.toggle('invisivel')
    }else{
        alert('algo errado')
    }

})