let input = document.getElementById ('resultado')
let numero = document.getElementsByClassName ('numero')
let operacao = document.getElementsByClassName ('operacao')
let resultado = document.getElementsByClassName ('resultar')
let anterior=0
let final= numero.length



for ( let i=anterior ; i<final; i++){
    numero[i].onclick = function(){ 
        if (numero[i].innerText == '.'){
            input.value = input.value += numero[i].innerText
            let textoInput=input.value
            let anterior=0
            let final= textoInput.length
            let encontrouPonto=false
            for ( let i=anterior ; i<final; i++){
                if (textoInput == '.'){
                    encontrouPonto=true
                }else{
                    input.value = input.value += numero[i].innerText
                }
                if (encontrouPonto== true){
                    console.log('tinha ponto!!!')
                }else{
                    input.value = input.value += numero[i].innerText
                }
            
                
            }
        }else{
        input.value = input.value += numero[i].innerText
        }
    
    }
}