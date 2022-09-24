function conta (numero, saldo, tipoConta, agencia, deposito, saque) {
    return {
    numero,
    saldo,
    tipoConta,
    agencia,
    deposito,
    saque, 

    getSaldo() {
        return saldo
    },

    getNumero() {
        return numero
    },

    getDeposito() {
        var saldoFinal = saldo + deposito
        return saldoFinal
    },

    getSaque() {
        saldoFinal = saldo + deposito - saque
        return saldoFinal
    }
    
    }


}

const conta1 = conta(123, 1100, 'corrente', 3206, 300, 250)
console.log('Saldo da conta:', conta1.getSaldo())
console.log('Saldo final com depósito:',conta1.getDeposito())
console.log('Saldo final com saque:',conta1.getSaque())
console.log('Número da conta:',conta1.getNumero())