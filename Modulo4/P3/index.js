
(async () => {
    const database = require('./db');
    const produto = require('./produto');

    try {
        const resultado = await database.sync();
        console.log('Conexão feita com sucesso!', resultado);
    } catch (error) {
        console.log('Conexão mal sucedida.', error);
    }

    const retornoFuncao = await produto.create({
        
        nome: 'prato',
        preco: 25,
        descricao: 'prato de vidro temperado'
    })
})();