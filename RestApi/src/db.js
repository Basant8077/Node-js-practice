const mongoose = require('mongoose');

const datbaseConnect = ()=>{
//connecting database with express
mongoose.connect('mongodb://127.0.0.1/MongoDBP')
    .then(() => {
        console.log('Database Connected')
    }).catch((err) => {
        console.log('Failed to connect ')
    })

}
module.exports = datbaseConnect;


