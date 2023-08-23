const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const PORT = 5000;

//! serving dynamic site through express

const link  = path.join(__dirname,"../public");
const viewpath = path.join(__dirname,"./template/views")
const headerpath = path.join(__dirname,'../src/template/partials')
console.log(headerpath);


app.use(express.static(link)) //* to serve static site in public folder
//app.use method is used to mount the specified middleware function(s) at the path which is being specified. ==> app.use(path, callback) where callback is any middleware function 

app.set("view engine","hbs"); //handlebars express engine for dunamic data from backend
//app.set(name,value) function assigns or sets a setting name to value. This can store any type of value as the user wants, but there are some certain names that can be used to configure the behaviour of the server

//? CHANGING views folder name 
app.set('views',viewpath);

//* Adding partials similar to components
hbs.registerPartials(headerpath);

app.get('/',(req,res)=>{
    //render method is use to render the file rather than passing static string in app.send mathod 
    res.render('index',{
        name: "Dynamic site",
        header: "This is a dynamic output "
    })
})
//! NOTE :-  In Express if above / come first then it will render first rather then same / afterword



//routing
app.get('/',(req,res)=>{
    res.send("Hlo world")
})

app.get('/about',(req,res)=>{
    res.render('aboute'); //use render method while working with template engine
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