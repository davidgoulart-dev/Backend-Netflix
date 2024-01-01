const mongoose = require('mongoose');


main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb+srv://davidgoulart:22496067@cluster0.t5jelz2.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
}

