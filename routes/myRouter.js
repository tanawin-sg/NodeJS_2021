//จัดการ Routing
const express = require('express')
const router = express.Router() //เรียกใช้ class router
const path = require('path') //เรียกใช้ module path

router.get('/',(req,res)=>{
    res.render('index.ejs')
})

module.exports = router