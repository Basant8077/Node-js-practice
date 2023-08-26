const express = require('express');
const app = express();
const mongoose = require('mongoose');
var validator = require('validator');

const studententry = mongoose.Schema({  
    name:{
        type: String,
        lowercase: true,
        minlength: 4,
        required: true,
        trim: true
    },
    class:{
        type: Number,
        required: true
    },
    section:{
        type: String,
        lowercase: true,
        required: true
    },
    age:{
        type: Number,
        validator(value){
            if(value<0){
                throw new Error("Enter a valid age");
            }
        },
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: [true, "Email already present"],
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Enter a valid email");
            }
        }
    },
    
})

const StudentBio = mongoose.model('StudentBio',studententry);
module.exports = StudentBio;