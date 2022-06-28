//จัดการ Routing
const express = require('express')
const router = express.Router() //เรียกใช้ class router
const path = require('path') //เรียกใช้ module path

router.get('/',(req,res)=>{
    const name = "Tanawin"
    const age = 35
    const address = "<h3>กรุงเทพ</h3>"
    //send prm to file ejs
    res.render('index',{name:name,age:age,address:address}) //index.ejs
})

module.exports = router