const express = require('express')
const Router = express.Router();
const CreateUser = require('../Schema/CreateUser');

//api link  /api/createuser
Router.post('/createuser',async(req,res)=>{
    const user = new CreateUser();
    
})


module.exports = Router;