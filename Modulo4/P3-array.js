var banco = {
    conta: 'corrente',
    agencia: 3223,
    saldo: 1200.00
}

const Jadley = ['162cm', '73Kg','Masculino']

console.log('Propriedades do Objeto:')
for(const propriedades in banco){
    console.log(`${propriedades}: ${banco[propriedades]}`)
}

console.log('\n\nValores do Array:')
for(const x of Jadley){
    console.log(x)
}

for(const x in Jadley){
    console.log(x)
}

