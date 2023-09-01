const mongoose = require('mongoose')

const regester = mongoose.Schema({
    name:{
        type:String
    },
    password:{
        type: String
    },
    address:{
        type: String
    },
    city:{
        type: String
    }
})
const createuser = mongoose.model("Createuser", regester);
module.exports = createuser;