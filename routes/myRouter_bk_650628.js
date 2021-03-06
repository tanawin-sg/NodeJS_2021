//จัดการ Routing
const express = require('express')
const router = express.Router() //เรียกใช้ class router
const path = require('path') //เรียกใช้ module path

const indexPage = path.join(__dirname,'../templates/index.html')

//app.use("/home",(req,res)=>{  // เหมาะสำหรับ 1-2 path ถ้า path เยอะๆจะใช้ method get
router.get("/",(req,res)=>{
    res.status(200)
    res.type("text/html")
    res.sendFile(indexPage)
})

router.get("/product/:id",(req,res)=>{
    const productID = req.params.id

    if(productID == 1){
        res.sendFile(path.join(__dirname,'../templates/product1.html'))  //เปิดไฟล์อ่านข้อมูลและส่งข้อมูลกลับ
    }else if(productID == 2){
        res.sendFile(path.join(__dirname,'../templates/product2.html'))
    }else if (productID == 3){
        res.sendFile(path.join(__dirname,'../templates/product3.html'))
    }else{
        // res.status(404)
        // res.send("<h1>404 Page Not Found</h1>")
        res.redirect('/')
    }
    

})
/*app.get("/product",(req,res)=>{
    res.sendFile(path.join(__dirname,'/templates/product1.html'))
    // res.send("Hello Product")
}) */

module.exports = router