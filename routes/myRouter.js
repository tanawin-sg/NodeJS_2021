//จัดการ Routing
const express = require('express')
const router = express.Router() //เรียกใช้ class router
const path = require('path') //เรียกใช้ module path

router.get('/',(req,res)=>{
    // เก็บอ๊อบเจ็คในแอเร
    const sname = "Tanawin"
    const lname = "<h2>Lastname : Sangjan</h2>"
    const products = ["เสื้อ","พัดลม","หูฟัง","คีย์บอร์ด"]
    const products_obj = [
        {name:"โน๊ตบุ๊ค",price:"25000",image:"images/products/product1.png"},
        {name:"เสื้อ",price:"1500",image:"images/products/product2.png"},
        {name:"หูฟัง",price:"2500",image:"images/products/product3.png"}
    ]
    //send prm to file ejs
    res.render('index',{products:products,sname:sname,lname:lname,products_obj:products_obj}) //index.ejs
})

router.get('/addForm',(req,res)=>{
    res.render('form')
})
router.get('/manage',(req,res)=>{
    res.render('manage')
})
module.exports = router