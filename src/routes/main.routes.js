const express = require('express');
const router = express.Router();
const Filme = require('../models/filme');
const _ = require('underscore')
const Temporada = require('../models/temporada')
/// RECUPERAR TELA HOME
router.get('/home', async(req, res) => {
    try{
        let filmes = await Filme.find({});
        let finalFilmes = [];

        for(let filme of filmes){
            const temporadas = await Temporada.find({
                filme_id: filme._id
            });
            const newFilme = {...filme._doc, temporadas};
            finalFilmes.push(newFilme);

        }
        //misturar resultados aleatóriamente 
        finalFilmes = _.shuffle(finalFilmes);

        // filme principal 
        const principal = finalFilmes[0];

        // separar em seções 
        const secoes = _.chunk(finalFilmes, 5);
        res.json({error: false, principal, secoes})
    }catch (err){
        res.json( {error: true, message: err.message  })

    }
} )


router.get('/', async (req, res) => {
    // recuperar todos os registros
    try{
        const filmes = await Filme.find({});
        res.json({ error: false, filmes });

    }catch (err) {
        res.json({ error: true, message: err.message });
    }
    
});

router.get('/:id', async (req, res) => {
    // recuperar um registro
    try {
        const id = req.params.id;
        const filme = await Filme.findById(id);
        res.json({ error: false, filme });

    }catch (err) {
        res.json({ error: true, message: err.message });

    }
    
    
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
router.put('/:id', async (req, res) => {
   try {
        const id = req.params.id;
       const novo_filme = req.body;

       const filme = await Filme.findByIdAndUpdate(id, novo_filme);
         res.json({ error: false, filme });


   }catch (err) {
       res.json({ error: true, message: err.message });
   
    
    const body = req.body;
    res.json({ mensagem: 'Atualizar um registro', id, body });
}});
// deletar um registro
router.delete('/:id', async (req, res) => {
    try{
    const id = req.params.id;
    const deleted = await Filme.findByIdAndDelete(id);
    res.json({ error: false, deleted });

    }catch (err) {
        res.json({ error: true, message: err.message });
    }
    
    res.json({ id });

});






module.exports = router;