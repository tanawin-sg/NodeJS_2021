//จัดการ Routing
const express = require('express')
const router = express.Router() //เรียกใช้ class router
const path = require('path') //เรียกใช้ module path

router.get('/',(req,res)=>{
    const products = ["เสื้อ","พัดลม","หูฟัง","คีย์บอร์ด"]
    const sname = "Tanawin"
    const lname = "<h2>Lastname : Sangjan</h2>"
    //send prm to file ejs
    res.render('index',{products:products,sname:sname,lname:lname}) //index.ejs
})

module.exports = router