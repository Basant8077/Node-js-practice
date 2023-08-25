const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const validator = require('validator');

//middleware
app.use(express.json());


//connecting database with express
mongoose.connect('mongodb://127.0.0.1/MongoDBP')
    .then(() => {
        console.log('Database Connected')
    }).catch((err) => {
        console.log('Failed to connect ')
    })

//Form Schema for ind=tering student data

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
//collection name is StudentBio

//data entry testing

// const dataentry = async ()=>{
//     const doc1 = new StudentBio({
//         name: "basant joshi",
//         class:"1",
//         section:"A",
//         age: 7,
//         email:'bsntballabhjoshi@gmail.com'
//     })
//     const result = await doc1.save();
//     console.log(result);
// }

// dataentry();

app.get('/', (req, res) => {
    res.send("Hlo everyone")
})
app.post('/studentLogin',async (req,res)=>{
    try {
        const user = new StudentBio(req.body);
        const result = await user.save();
        res.status(201).send(user)
        console.log(user);
    } catch (error) {
        res.status(401).send(`Opps Something went wrong ${error}`);
    }

})

app.listen(PORT, () => {
    console.log(`App is listening on http://127.0.0.1:${PORT}`)
})