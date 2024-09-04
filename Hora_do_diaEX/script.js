function carregar(){
    var mensagem = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora}horas</strong> `

    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = "imagens/manhã.png"
        document.body.style.background = '#a87d0a'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = "imagens/tarde.png"
        document.body.style.background = '#bc4704'
    } else {
        //BOA NOITE
        img.src = "imagens/noite.png"
        document.body.style.background = '#041f34'  
    }
}



