const mongoose = require('mongoose');


main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb+srv://davidgoulartdev:22456328@cluster0.elhsxfg.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
}