//blocking or synchronous
const fs = require ('fs')

//อ่านไฟล์ input.txt
const data = fs.readFileSync('myfile/input.txt','utf-8')

console.log(data)

//เขียนไฟล์
const outputtext = "เนื้อหาสำหรับเขียนไฟล์"+ new Date();
fs.writeFileSync('myfile/output.txt',outputtext)
console.log("เขียนไฟล์เรียบร้อย")
console.log("จบการทำงานแบบ synchronous")