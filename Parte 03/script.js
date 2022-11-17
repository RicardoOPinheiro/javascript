function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoForm = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (anoForm.value.length == 0 || anoForm.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var sexForm = document.getElementsByName('sex')
        var idade = ano - anoForm.value
        var genero = ''
        var fase = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')
        img.style.margin = '15px'

        if(sexForm[0].checked){
            genero = 'masculino'
            if (idade >= 0 && idade <10){
                //Criança
                fase = 'uma criança'
                img.setAttribute('src', 'bebe_m.png')
            }else if(idade >= 10 && idade < 24){
                //Jovem
                fase = 'um jovem'
                img.setAttribute('src', 'jovem_m.png')
            }else if(idade >= 24 && idade < 50){
                //Adulto
                fase = 'um adulto'
                img.setAttribute('src', 'adulto.png')
            }else{
                //Idoso
                fase = 'um idoso'
                img.setAttribute('src', 'idoso.png')
            }
        }else{
            genero = 'feminino'
            if (idade >= 0 && idade <10){
                //Criança
                fase = 'uma criança'
                img.setAttribute('src', 'bebe_f.png')
            }else if(idade >= 10 && idade < 24){
                //Jovem
                fase = 'uma jovem'
                img.setAttribute('src', 'jovem_f.png')
            }else if(idade >= 24 && idade < 50){
                //Adulto
                fase = 'uma adulta'
                img.setAttribute('src', 'adulta.png')
            }else{
                //Idoso
                fase = 'uma idosa'
                img.setAttribute('src', 'idosa.png')
            }
        }

        res.innerHTML = `Detectamos ${fase} do gênero ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}