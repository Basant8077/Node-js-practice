//IIFE  is use in background in node
(function(exports , require , module , __filename , __dirname){
    const a = "Basant";
    console.log(a);
  
})();
//console.log not applicable outside iife function all are private
//! behind the scence node code isme wrap krke execute krta h
console.log(__dirname);
console.log(__filename);