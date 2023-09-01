const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('node:path');
const hbs = require('hbs');
const connectToDatabase = require('./db');
const users = require('../Routes/users');

connectToDatabase();

//paths and dir
// const viewPath = path.join(__dirname,"../Public")

//middlewares
app.use(express.json());
// app.use(express.static(viewPath))

//used to take input from the form
app.use(express.urlencoded({extended:false}))
//view engine
app.set("view engine","hbs");

//routers
app.get('/', (req, res)=>{
    res.render("index");
})
app.use('/api',users);



app.listen(PORT , ()=>{
    console.log(`Project is working on http://127.0.0.1:${PORT}`);
})