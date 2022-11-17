var agora = new Date()
var hora = agora.getHours()
var minutos =  agora.getMinutes()
console.log(`Agora são ${hora} horas e ${minutos} minutos                            !`)
if (hora < 12){
    console.log('Tenha um bom dia!')
}else if(hora > 12 && hora < 18){
    console.log('Tenha uma boa tarde!')
}else{
    console.log('Tenha uma boa noite!')
}