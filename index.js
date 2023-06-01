const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const database = require('./src/services/database')
const routes = require('./src/routes/main.routes');
const cors = require('cors')
const app = express();
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/netflix', { useNewUrlParser: true, useUnifiedTopology: true });
}
const filmeRoutes = require('./src/routes/main.routes')
const usuarioRoutes = require('./src/routes/usuarios.routes')
/// MIDDLEWARES
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
/// ROUTES
app.use("/", filmeRoutes);
app.use("/usuario", usuarioRoutes );




app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});