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

//Insert document in collection
const cretedocument = async()=>{
    try {
        //create a document in collection
        const document = new Listing({
            name: "HTML",
            language:"Front end",
            identity:"Markup lang",
            status:true,
        })
        const result = await document.save(); //it returns a promise since it take some time to save a document in collection
        console.log(result);
        
        
    } catch (error) {
        console.log(error);
    }
}
cretedocument();