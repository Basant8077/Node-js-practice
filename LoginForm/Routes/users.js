const express = require('express')
const Router = express.Router();
const CreateUser = require('../Schema/CreateUser');
const bcrypt = require('bcryptjs');
const saltRounds = 10;


//api link  /api/createuser.bod
Router.post('/createuser',async(req,res)=>{
    const { name ,password, address , city } = req.body;

    const securepass = await bcrypt.hash(password, saltRounds);;

    const user = new CreateUser({
        name: name,
        password: securepass,
        address : address,
        city: city
    });

    const token = await user.generatetoken();
    

    const result = await user.save();
    console.log(result)
    res.send(result)
    
})


module.exports = Router;