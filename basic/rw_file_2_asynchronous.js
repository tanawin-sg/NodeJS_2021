//none-blocking or asynchronous
const fs = require ('fs')

//อ่านไฟล์ input.txt
fs.readFile('myfile/input.txt','utf-8',(err, data)=>{
    if(err) return console.log("เกิดข้อผิดพลาด ",err);
    console.log(data);
    const outputtext = "Hollo node.js \n"+data+"\nไฟล์ถูกเขียนเมื่อ " + new Date();
    fs.writeFile('myfile/output_async.txt',outputtext,err=>{
    if(err) return console.log("เกิดข้อผิดพลาด ",err);
        console.log("เขียนไฟล์เรียบร้อย");
    })
})
console.log("จบการทำงาน"); //ไม่รอการทำงานจาก fs จะแสดงผลก่อน