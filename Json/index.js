const fs = require('fs');

const testing = {
    name : "Basant joshi",
    branch : "Ece",
    data3 : "data3",
    tdata4 : "data4",
    tdata5 : "data5"
}

//converting it ti json
const jsondata = JSON.stringify(testing) //use to convert object into json

//entering json data into another file
// fs.writeFile("jsoon.json",jsondata,(err)=>{
//     console.log("File created ");

// })

fs.readFile('jsoon.json',"utf-8",(err,data)=>{
    // console.log(data);
    const realdata = JSON.parse(data);
    console.log(realdata);  
})





