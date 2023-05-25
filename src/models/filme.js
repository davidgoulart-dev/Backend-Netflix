const mongoose = require('mongoose');

const Filme = mongoose.model('Filme', { 
    titulo: String,
    tipo: String,
    capa: String,
    logo: String,
    generos: Array,
    thumb: String,
    descricao: String,
    elenco: Array,
    cenas_momentos: Array,    
    ano: Number,
    detalhes: Object
    

});

module.exports = Filme;