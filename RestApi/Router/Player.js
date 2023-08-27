const express = require('express');
const app = express();
const Router = express.Router();
const PlayerBio = require('../Modals/PlayerData');
const { body, validationResult } = require('express-validator');

//Routing the player with

Router.post('/playerdata', async(req,res)=>{
    try {
    const user = new PlayerBio(req.body);
    const result = await user.save(); 
    res.status(200).send(result)
    console.log(result);

    } catch (error) {
        res.send(500).send(error);    
    }
})

//Finding data in api
Router.get('/playerdata/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const result = await PlayerBio.findById(id);

        res.status(200).send(result);
        console.log(result);
    } catch (error) {
        res.send(500).send(error); 
        
    }
})

//update the db
Router.patch('/playerdata/:id', async (req,res)=>{
    try {
        const _id = req.params.id;
        const result = await PlayerBio.findByIdAndUpdate(_id, {$set: req.body},{
            new: true
        });
        if(!result){
            res.status(404).send("Not Found")
        }
        res.status(200).send(result);

    } catch (error) {
        res.status(500).send(`Internal server Error ${error}`)
    }
   
})

//delete the player
Router.delete('/playerdata/:id', async (req,res)=>{
    try {
        const result = await PlayerBio.findByIdAndDelete(req.params.id);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports= Router;