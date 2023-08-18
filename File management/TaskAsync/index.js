const fs = require("fs");

//Create operation
fs.mkdir("Basant", (err)=>{console.log("Folder created")});

//Read operation
fs.writeFile('./Basant/bio.txt',"This is bio of file" , (err)=>{
    console.log(err);
})

//Update 
fs.appendFile('./Basant/bio.txt', ' Additional data' , (err)=>{console.log("Data updated")})

//raed
fs.readFile('./Basant/bio.txt', 'utf-8' , (err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})

//rename
fs.rename('./Basant/bio.txt','./Basant/Renamebio.txt',(err)=>{console.log("Rname completed")})

//delete
fs.unlink('./Basant/Renamebio.txt',(err)=>{
    console.log("deleted");
    console.log(err)
})

//folder delete
fs.rmdir("Basant" , (err)=>{console.log(deleted)})