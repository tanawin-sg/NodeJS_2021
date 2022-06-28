const express = require('express')
const path    = require('path') 
// const router = require('./routes/myRouter') // ใช้ static เพื่อให้ server มองเห็นไฟล์
const app = express()
app.use(express.static(path.join(__dirname,'public')))

// app.use(router)

app.listen(8080,()=>{
    console.log("Start server port 8080")
})