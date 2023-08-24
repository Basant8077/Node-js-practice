const mongoose = require("mongoose");

//Note: - always write localhost code 127.0.0.1 not localhost


//connecting database 
mongoose.connect("mongodb://127.0.0.1:27017/MongoDBP")
    .then(() => {
        console.log(" Database <MongoDBP> Connected")
    }).catch((err) => console.log(err));

//Create a schema
const list = new mongoose.Schema(
    {
        name:{
            type: String,
            required : true,
        },
        language: {
            type: String
        },

        identity: {
            type: String,
            required: true
        },
        status:{
            type: Boolean
        },
        date:{
            type: Date
        }
})
//after creating schema do modeling or collection creation
const Listing = new mongoose.model("Listing",list);

//*it is a class 
//*string ke andar or const ke age vale dono ka first latter capital hona chaye

//!Insert document in collection  //CREATE operation
const cretedocument = async()=>{
    try {
        //create a document in collection
        const document = new Listing({
            name: "Java Script",
            language:"Frontend",
            identity:"Prog lang",
            status:true,
        })
        // const result = await document.save(); it is for saving one doc at a time
        //it returns a promise since it take some time to save a document in collection

        //todo:- add multiple docs 
        const doc2 = new Listing({
            name: "Html",
            language:"Frontend",
            identity:"markup",
            status:true,
        })
        const doc3 = new Listing({
            name: "Mongodb",
            language:"DBMS",
            identity:"Database",
            status:true,
        })
        const doc4 = new Listing({
            name: "Express js",
            language:"Backend",
            identity:"Framework",
            status:true,
        })
        const doc5 = new Listing({
            name: "Node js",
            language:"Backend",
            identity:"Framework",
            status:true,
        })
        const result = await Listing.insertMany([document,doc2,doc3,doc4,doc5]);
        console.log(result);
        
        
    } catch (error) {
        console.log(error);
    }
}
// cretedocument();

//!finding the documents   READ operation

const finddoc = async ()=>{
    const result = await Listing.find({status : true},{name:1 , _id: 0}).sort({name:-1});
    //sort({name: ----})  1 for alphabetical or -1 for reverse
    console.log(result)
}
// finddoc();

//! Update operation in db

const update = async (_id)=>{

    //one update at a time,

    const updt = await Listing.findByIdAndUpdate({_id}, {$set: {language: "Edited langauage"}},{new: true} )

    
    console.log(updt);
}

// update("64e63beae5118d025cad6ea4");

//!Deleting operartions
const deleteing= async ()=>{
    const result = await Listing.deleteMany({})
    console.log(result);
}
// delet
eing();
// database deleted


