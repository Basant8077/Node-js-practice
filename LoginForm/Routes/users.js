const express = require('express')
const Router = express.Router();
const CreateUser = require('../Schema/CreateUser');

//api link  /api/createuser.bod
Router.post('/createuser',async(req,res)=>{
    const { name , password , address , city } = req.body
    const user = new CreateUser({
        name: name,
        password: password,
        address : address,
        city: city
    });
    const result = await user.save();
    console.log(result)
    res.send(result)
    
})


module.exports = Router;