const express = require('express')
const path    = require('path') 
const router = require('./routes/myRouter') // ใช้ static เพื่อให้ server มองเห็นไฟล์

const app = express()

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs') //setting template engine ตั้งค่านามสกุลเอนจิ้น .ejs
app.use(express.urlencoded({extended:false})) // สำหรับส่งข้อมูลจาก form method POST ระบุก่อนใช้ router
app.use(router)
app.use(express.static(path.join(__dirname,'public')))

app.listen(8080,()=>{
    console.log("Start server port 8080")
})