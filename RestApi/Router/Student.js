const express = require('express');
const app = express();
const Router =  express.Router();
const StudentBio = require('../Modals/Student€bio');



Router.post('/studentLogin',async (req,res)=>{
    try {
        const user = new StudentBio(req.body);
        const result = await user.save(); //use save data in db 
        res.status(201).send(result)
        console.log(result);
    } catch (error) {
        res.status(401).send(`Opps Something went wrong ${error}`);
    }

});

//getting student data
Router.get('/studentLogin', async(req,res)=>{
    try {
        const data = await StudentBio.find();
        res.status(200).send(data);

    } catch (error) {
        res.status(401).send(`Error occured ${error}`);
    }
} )

//get a specific student
Router.get('/studentLogin/:id', async ( req , res) => {
    try {
        const _id =  req.params.id; //param se url me jo id dalte h vo a jati h
        const studentData = await StudentBio.findById(_id);
        if(!studentData){
            res.status(404).send();
        }
        else{
            res.send(studentData);
        }
    } catch (error) {
        res.send(401).send(error);
    }
})

//deleting a tudent data
Router.delete('/studentLogin/:id' , async (req , res)=>{
    try {
        const id = req.params.id;
        const deletedStudent = await StudentBio.findOneAndDelete(id);
        if(!id){
            res.status(400).send("Invalid data");

        }
        else{
            res.send(deletedStudent);
        }
    } catch (error) {
        res.status(500).send("Internal server error");
    }
})

// ubdating a request
Router.patch('/studentLogin/:id', async(req,res)=>{
   
    try {
        const id = req.params.id;
    const updatedData = await StudentBio.findByIdAndUpdate(id,req.body,{
        new: true
    });
    res.status(200).send(updatedData)
    } catch (error) {
        res.status(500).send("Internal server error")
    }
})

module.exports = Router;