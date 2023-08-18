const fs = require("fs");

//!use for making a file writing in it

//fs.writeFileSync("Readme.md","This is readme of this repo");

//! rewrite previous data with new data

// fs.writeFileSync('Readme.md', 'This is sedited text');

// const data = fs.readFileSync("Readme.md",'utf-8');
// console.log(data);

// fs.unlinkSync('Readme.md') //! use to delete file


// fs.writeFile('Read.txt',"This is data inside the txt file",(err)=>
// {
//     console.log("File created async");
// })

//! Edit file using this.
fs.appendFile("Read.txt", " Data added new" , (err)=>{
    console.log(err);
}) 
console.log("Hlo this is basant") //it will exicute first