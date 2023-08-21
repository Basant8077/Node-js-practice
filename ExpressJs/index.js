const express = require('express');
const app = express();
const PORT = 5000;

//routing
app.get('/',(req,res)=>{
    res.send("Hlo world")
})

//routing
app.get('/about' , (req,res)=>{
    res.send("This is about");

})

app.get('/setting', (req,res)=>{
    res.send("This is settings");
})

app.listen(PORT,()=>{
    console.log(`App is listening on localhost:${PORT}`);
})