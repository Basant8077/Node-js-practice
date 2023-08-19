const EventEmitter = require('events');
const event = new EventEmitter();

//Best part of event module is that we can listern various events on same button at a same time
 
event.on("onclick",()=>{
    console.log("hlo everyone ev1");
})
event.on("onclick" , (sc , msg)=>{
    console.log(`Page status ${sc} ${msg}`);
})

event.emit("onclick",200 , 'ok'); 