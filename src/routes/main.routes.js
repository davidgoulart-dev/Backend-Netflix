const express = require('express');
const router = express.Router();
const Filme = require('../models/filme');

router.get('/', (req, res) => {
    // recuperar todos os registros
    res.json({ message: 'Pegar todos os registros' });
});

router.get('/:id', (req, res) => {
    // recuperar um registro
    const id = req.params.id;
    res.json({ message: 'Pegar um registro' });
});
// criar um registro
router.post('/', async (req, res) => {
    try {
    const filme = req.body;
   const response = await new Filme(filme).save();
    res.json({ error: false, filme: response });

    }catch (err) {
        res.json({ error: true, message: err.message });

    }
    
});
// atualizar um registro
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json({ mensagem: 'Atualizar um registro', id, body });
});
// deletar um registro
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ id });

});






module.exports = router;