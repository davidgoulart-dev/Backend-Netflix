const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const database = require('./src/services/database')
const routes = require('./src/routes/main.routes');
const cors = require('cors')
const app = express();
database

const filmeRoutes = require('./src/routes/main.routes')
const usuarioRoutes = require('./src/routes/usuarios.routes')
const episodeosRoutes = require('./src/routes/episodeos.routes')
/// MIDDLEWARES
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
/// ROUTES
app.use("/", filmeRoutes);
app.use("/usuario", usuarioRoutes );
app.use("/episodeo", episodeosRoutes)




app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});