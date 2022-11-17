/*
function contar(){
    var res = document.getElementById('res')
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passos = document.getElementById('passos')
    res.innerHTML = ''

    var num_inicio = Number(inicio.value)
    var num_fim = Number(fim.value)
    var num_passos = Number(passos.value)

    for(var cont = num_inicio; cont <= num_fim; cont += num_passos){
        
        if (cont < num_fim){
            res.innerHTML += ' -> '
        }

        res.innerHTML += `${cont}`        
    }
    res.innerHTML += ' FIM '
}
*/

function contar(){
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passos = document.getElementById('passos')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passos.value.lenght == 0){
        window.alert('[ERRO] Insira os dados!')
    }else{
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passos.value)

        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f){ //Contagem Crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }else{ //Contagem Descrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += '\u{1F3C1}'
        
    }
}