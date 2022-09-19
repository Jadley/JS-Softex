//primeira função
function simple(){
    return console.log('Função simples.')
}
simple()

//segunda função
function soma(x, y){
    x  =  7
    y=  3
    resultado = x +  y
    return resultado
}
console.log(`resultado da função  soma: ${soma()} `)    

// terceira função
const calculadora = (operador,[num1, num2]=[7, 3])=>  'Resultado da operação: ' + eval(`${num1} ${operador} ${num2}`);

console.log(calculadora('*'))