const mongoose = require('mongoose')
var jwt = require('jsonwebtoken');
const SECURE_KEY = process.env.SECURE_KEY;

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
    },
    tokens:[
      {  token:{
            type: String,
            required: true
        }}
    ]
    
})
//middleware
regester.methods.generatetoken = async function(){
    console.log(this._id);
const tokengen = await jwt.sign({_id : this._id.toString()},"jklwdqwldnqwkdnqwldnk");
this.tokens = this.tokens.concat({token:tokengen})
console.log(tokengen);
return tokengen;
}

const createuser = mongoose.model("Createuser", regester);
module.exports = createuser;