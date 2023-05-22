const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
    // recuperar todos os registros
    res.json({ message: 'Pegar todos os registros' });
});

app.get('/:id', (req, res) => {
    // recuperar um registro
    const id = req.params.id;
    res.json({ message: 'Pegar um registro' });
});
// criar um registro
app.post('/', (req, res) => {
    const body = req.body;
    res.json(body);
});
// atualizar um registro
app.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json({ mensagem: 'Atualizar um registro', id, body });
});
// deletar um registro
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ id });

});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});