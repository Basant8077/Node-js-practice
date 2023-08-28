const mongoose = require('mongoose')

const connectToDatabase = ()=>{

    mongoose.connect(`mongodb://127.0.0.1:27017/MongoDBP`)
        .then(()=>{
            console.log("Database connected");
        })
        .catch((err)=>{
            console.log(err);
        })
}
module.exports = connectToDatabase;