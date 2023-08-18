const os = require('node:os');
console.log(os.hostname());
console.log(os.uptime())
const memo = os.freemem();
console.log(`${memo / 1024 / 1024 / 1024}`)
const totalmemo = os.totalmem();
console.log(`${totalmemo / 1024 / 1024 / 1024 }`)