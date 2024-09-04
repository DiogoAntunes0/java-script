function carregar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nascimento')
    var res = document.getElementById('res')
    if(fano.value == 0 || fano.value > ano){
        alert("[ERRO] Verifique as informações e tente novamente!")
    } else {
        var fsex = document.getElementsByName('fradio')
        var idade = ano - fano.value
        var img = document.getElementById('foto')
        if (fsex[0].checked){
            var genero = 'Homem' 
            if(idade >=0 && idade <=10){
                img.src = 'criança-homem.png'
                //criança
            } else if (idade <=21){
                //jovem
                img.src = 'jovem-homem.png'
            } else if (idade <=50){
                //adulto
                img.src = 'adulto-homem.png'
            } else if (idade > 65) {
                //idoso
                img.src = 'idoso-homem.png'
            }   
        } else {
            var genero = 'Mulher'
            if(idade >=0 && idade <=10){
                img.src = 'criança-mulher.png'
                //criança
            } else if (idade <= 21){
                //jovem
                img.src = 'jovem-mulher.png'
            } else if (idade <=50){
                img.src = 'adulto-mulher.png'
                //adulto
            } else if (idade > 65) {
                img.src = 'idosa-mulher.png'
                //idoso
            }
        }
        res.innerHTML = `Indentificamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}