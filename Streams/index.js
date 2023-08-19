const fs = require('fs');
const http = require('node:http');
const server = http.createServer();

server.on('request', (req, res)=>{

    //! METHOD 1 of reading data but it will load all data at a same time which is a problem when size of file is large

    // fs.readFile('testing.txt' , (err , data)=>{
    //     if(err) console.log(err)
    //     res.end(data.toString());
    // })
    
    //! method 2 stream
    // const rsStream = fs.createReadStream('testing.txt');
    // rsStream.on('data', (chunkdata)=>{
    //     res.write(chunkdata);
    // })
    // rsStream.on("end", ()=>{
    //     res.end();
    // })
    // rsStream.on('error',(err)=>{
    //     console.log("File not found");
    // })

    //! Method 3 pipe fastest and best way to read file 

    const reStream = fs.createReadStream('testing.txt');
    reStream.pipe(res);

})
server.listen(5000 , "127.0.0.1", ()=>{
    console.log("listerning in port 5000")
})