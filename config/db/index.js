
const mongoose = require('mongoose');

async function connect() {
   /*  try{
        await mongoose.connect('mongodb://0.0.0.0:27017/uwc_v2', {
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log("Connect successfully!!!")
    }
    catch{
        console.log("Connect failure!!!");
    } */
    // mongodb+srv://languyengiahy:I0ELxZEo1ac2zV1N@cluster0.bsu29kk.mongodb.net/uwc_v2
    try{
        await mongoose.connect('mongodb+srv://languyengiahy:I0ELxZEo1ac2zV1N@cluster0.bsu29kk.mongodb.net/test', {
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log("Connect successfully!!!")
    }
    catch{
        console.log("Connect failure!!!");
    }
}

module.exports = {connect};
