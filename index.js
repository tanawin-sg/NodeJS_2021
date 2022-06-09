// ทำ Rounting ใช้ req.url รับ path url มาตรวจสอบและสั่งทำงาน 
const http = require('http');
const fs = require('fs');

const IndexPage = fs.readFileSync(`${__dirname}/templates/index.html`,'utf-8');
const ProductPage   = fs.readFileSync(`${__dirname}/templates/product.html`,'utf-8');

const server = http.createServer((req,res)=>{
    const pathName = req.url
    console.log("url = "+pathName)
    // console.log("dir = "+__dirname)
    if(pathName === '/' || pathName ==='/home'){
        const prm_hrml = ('\
        \<h1>Hello Homepage <H1>\
        \<p style="color:red">Tanawin</p>');
        // res.end(prm_hrml);
        res.end(IndexPage);
    }else if(pathName === '/product'){
        // res.end("<h1>Hello Product</h1>")
        res.end(ProductPage);
    }else{
        res.writeHead(404);
        res.end("<h1>Not Found</h1>");
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