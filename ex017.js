let amigo = {nome:'João',
idade:32,
peso: 34.5,
sexo:'M',
engordar(p=0){
    this.peso += p
    console.log(`${this.nome} engordou ${p}Kg e está pesando ${this.peso}Kg`)
}
}

amigo.engordar(2)