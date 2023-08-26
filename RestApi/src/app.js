const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; //give any avilable port 
const Student= require('../Router/Student')
const datbaseConnect = require('./db')

//connection with database
datbaseConnect();


//middleware
app.use(express.json());
app.use(Student);

// app routes 
app.post('/', (req, res) => {
    res.send("Hlo everyone")
})

//listening to port
app.listen(PORT, () => {
    console.log(`App is listening on http://127.0.0.1:${PORT}`)
})

