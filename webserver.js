// สร้างเว็บ Server ด้วย NodeJS
const http = require('http');

const server = http.createServer((req,res)=>{
    const pathName = req.url
    console.log("url = "+pathName)
    const prm_hrml = ('\
    \<h1>Hello Node.JS <H1>\
    \<p style="background:red">Tanawin</p>')
    // res.write(prm_hrml);
    res.end(prm_hrml);
})
// server.listen(3000,()=>{
//     console.log("Start server in port 8080")
// })

server.listen(8080,'localhost',()=>{
    console.log("Start server in port 8080")
}) 



// http.createServer((req,res)=>{
//     res.write("<h1>Hello Node.JS <H1>");
//     res.end();
// }).listen(8080,()=>{
//     console.log("Start server in port 8080")
// })