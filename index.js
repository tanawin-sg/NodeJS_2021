// ทำ Rounting ใช้ req.url รับ path url มาตรวจสอบและสั่งทำงาน 
const http = require('http');
const fs = require('fs');
const url = require('url');

//${__dirname} = ที่อยู่โฟลเดอร์ปัจจุบัน  // console.log("dir = "+__dirname)
const IndexPage = fs.readFileSync(`${__dirname}/templates/index.html`,'utf-8');
const ProductPage1   = fs.readFileSync(`${__dirname}/templates/product1.html`,'utf-8');
const ProductPage2   = fs.readFileSync(`${__dirname}/templates/product2.html`,'utf-8');
const ProductPage3   = fs.readFileSync(`${__dirname}/templates/product3.html`,'utf-8');

const server = http.createServer((req,res)=>{

    // console.log(url.parse(req.url,true))
    const {pathname,query} = url.parse(req.url,true)
    // console.log("url = "+pathName)  // const pathName = req.url
    if(pathname === '/' || pathname ==='/home'){
        const prm_hrml = ('\
        \<h1>Hello Homepage <H1>\
        \<p style="color:red">Tanawin</p>');
        // res.end(prm_hrml);
        res.end(IndexPage);
    }else if(pathname === '/product'){
        if(query.id == 1){
            res.end(ProductPage1);
        }else if (query.id == 2){
            res.end(ProductPage2)
        }else if (query.id == 3){
            res.end(ProductPage3)
        }else{
            res.writeHead(404);
            res.end("<h1>Not Found</h1>");
        }
        // res.end("<h1>Hello Product</h1>")
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