const database = require('../services/database');
const Temporada = require('../models/temporada')
const Episodeo = require('../models/episodeo')
const Filme = require('../models/filme');


const addTemporadasEpisodeos = async() => {
    try{
        const series = await Filme.find({tipo: 'serie'}).select('_id');
        for (let serie of series ){
            console.log(`FILME ${serie}------`)
            const numTemporadas = Math.floor(Math.random() * 5) + 1;
            for (let i = 1; i <= numTemporadas; i++ ){
                console.log(`Inserindo Temporada ${i} de ${numTemporadas}`)
                const temporada = await new Temporada({
                    filme_id: serie,
                    titulo: `Temporada ${i}`
                }).save();
                const numEpisodeos = Math.floor(Math.random() * 5) + 1;
                for (let x = 1; x <= numEpisodeos; x++){
                    console.log(`Inserindo Episodeos ${x} de ${numEpisodeos}`);
                    await new Episodeo({
                        temporada_id: temporada._id,
                        titulo: `Episodeo ${x} `,
                        numero: x,
                        descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.In elementis mé pra quem é amistosis quis leo.Pra lá , depois divoltis porris, paradis.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!',
                        capa: 'https://picsum.photos/300/200',

                    }).save() 

                }
            }
        }
        console.log('Final do Script')
    }catch(err) {
        console.log(err.message);
    }
}

addTemporadasEpisodeos();