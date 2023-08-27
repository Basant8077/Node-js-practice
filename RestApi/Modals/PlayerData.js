const mongoose = require('mongoose');
var validator = require('validator');

//forminf a schema 
const data = new mongoose.Schema({

    event:{
        type: String,
        required: true
    },
    ranking:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true

    },
    country:{
        type: String,
        required: true
    },
    score:{
        type: Number,
        validator(value){
            if(value<0)
            {
                throw new Error("Enter a valid score");
            }       
        }
    }

})

//modeling the schema 

const PlayerBio = mongoose.model("PlayerBio",data);

module.exports = PlayerBio;