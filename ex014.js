let num = [22,17,222]

/*
for (var cont=0; cont<num.length; cont++){
    console.log(`A posição ${cont} tem o valor ${num[cont]}`)
}
*/

for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log('FIM!')