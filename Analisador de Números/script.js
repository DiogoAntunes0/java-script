var num = document.getElementById('txtn')
var res = document.getElementById('res')
var list = document.getElementById('lista')
var valores = []

function Numero(n){ //Testar se o número está entre 1 e 100.
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function Lista(n, l){ //Testar se o número digitado está na lista.
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){ //Evento do botão, chamando as duas funções.
        if(Numero(num.value) && !Lista(num.value, valores)){
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} Adicionado`
            list.appendChild(item)
            res.innerHTML = ''
        } else {
            alert("Valor inválido ou já existente!")
        }
        num.value = '' 
        num.focus() // Interação, quando valor ser digitado, continuar no lugar!
    }

    function finalizar(){ 
        if( valores.length == 0){
            alert("Adicione valores!")
        } else {
            let soma = 0
            let media = 0
            let menor = valores[0]
            let maior = valores[0]
            let total = valores.length
            for(pos in valores){
                soma += valores[pos]
                media = soma / total
                if (valores[pos] > maior){
                    maior = valores[pos]
                } if(valores[pos] <  menor){
                    menor = valores[pos]
             }   
        }    
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p>O menor número informado foi ${menor}. </p>` 
        res.innerHTML += `<p> A soma de todos os números é: ${soma}</p>`  
        res.innerHTML += `<p> A média entre esses número é ${media.toFixed(2)}</p>`       
     }
                
        }    
