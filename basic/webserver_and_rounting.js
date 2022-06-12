// ทำ Rounting ใช้ req.url รับ path url มาตรวจสอบและสั่งทำงาน 
const http = require('http');

const server = http.createServer((req,res)=>{
    const pathName = req.url
    console.log("url = "+pathName)
    if(pathName === '/' || pathName ==='/home'){
        const prm_hrml = ('\
        \<h1>Hello Homepage <H1>\
        \<p style="color:red">Tanawin</p>') 
        res.end(prm_hrml);
    }else if(pathName === '/product'){
        res.end("<h1>Hello Product</h1>")
    }else{
        res.writeHead(404)
        res.end("<h1>Not Found</h1>")
    }

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