//Asynce & Await

const connect = true //เช็ตว่าต่อเน็ต
const url1 = "winnity.com/file1.json"
const url2 = "winnity.com/file2.json"
const url3 = "winnity.com/file3.json"
const url4 = "winnity.com/file4.json"

function downloading(url){
    return new Promise(function(resolve,reject){
        console.log("กำลังโหลดไฟล์จาก "+url)
        setTimeout(()=>{
            if(connect){
                // console.log("โหลด "+url+" เรียบร้อย")
                resolve("โหลด "+url+" เรียบร้อย") //return ค่า resolve ออกไป
            }else{
                // console.log("เกิดข้อผิดพลาด")
                reject("เกิดข้อผิดพลาด")
            }
        },2000)
    })
}

//Promise Then
/*
downloading(url1).then(function(result){    //ค่าจาก promise 1
    console.log(result)
    return downloading(url2)                //return promise 2 ออกไปใช้งานด้านนอก
}).then(function(result){
    console.log(result)
    return downloading(url3)
}).then(function(result){
    console.log(result)
}) */

//async สั่งทำให้ทำงานพร้อมกันทุกคำสั่ง ไม่ต้องรองานใดงานหนึ่งเสร็จ
async function start(){
    
    //ถ้าใช้คำสั่ง await จะเป็นการทำงานรูปแบบ sysncronus
    //await รอให้ download url1 ทำงานเสร็จก่อนแล้วทำคำสั่งถัดไป
    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
    console.log(await downloading(url4))
}

start() //เมื่อเรียกใช้ฟังก์ชั่น คำแรกจะทำงานก่อน คำสั่งที่เหลือจะถูกบล๊อคเอาไว้

//การทำงานฝั่ง fontend
// api ภาพสินค้า (backend) -> fontend (แสดงภาพในเว็บ)

// api ลักษณะ (promise) -> (pending) -> รอข้อมูลครบก่อน (await) -> แสดงภาพ

// loading .... -> แสดงภาพ

