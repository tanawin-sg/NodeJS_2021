const express = require('express')
const path = require('path')
const app = express()

const indexPage = path.join(__dirname,'/templates/index.html')

//app.use("/home",(req,res)=>{  // เหมาะสำหรับ 1-2 path ถ้า path เยอะๆจะใช้ method get
app.get("/home",(req,res)=>{
    res.status(200)
    res.type("text/html")
    res.sendFile(indexPage)
})

app.get("/product",(req,res)=>{
    res.sendFile(path.join(__dirname,'/templates/product1.html'))
    // res.send("Hello Product")
})

app.listen(8080,()=>{
    console.log("Start server port 8080")
})