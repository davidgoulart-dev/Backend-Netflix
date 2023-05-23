const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./src/routes/main.routes');
const app = express();
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/netflix', { useNewUrlParser: true, useUnifiedTopology: true });
}


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use("/", routes);



app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});