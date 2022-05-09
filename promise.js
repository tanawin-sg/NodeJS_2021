//สร้าง Promise

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
                resolve("โหลด "+url+" เรียบร้อย")
            }else{
                // console.log("เกิดข้อผิดพลาด")
                reject("เกิดข้อผิดพลาด")
            }
        },2000)
    })
}

/*
downloading(url1).then(result=>{
    console.log(result)
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log("จบการทำงาน")
})
*/
/*
// Promise Hell
downloading(url1).then(function(result){
    console.log(result)
    downloading(url2).then(function(result){
        console.log(result)
        downloading(url3).then(function(result){
            console.log(result)
        })
    })
})
*/

//Promise Then
downloading(url1).then(function(result){    //ค่าจาก promise 1
    console.log(result)
    return downloading(url2)                //return promise 2 ออกไปใช้งานด้านนอก
}).then(function(result){
    console.log(result)
    return downloading(url3)
}).then(function(result){
    console.log(result)
})






/* Ex Callback Hell
const url1 = "winnity.com/file1.json"
const url2 = "winnity.com/file2.json"
const url3 = "winnity.com/file3.json"
const url4 = "winnity.com/file4.json"

function downloading(url,callback){
  console.log('กำลังดำโหลดไฟล์...')
  setTimeout(()=>{
    callback(url)
  },1000)
}

//callback hell
downloading(url1,function(result){
  console.log("ดาวน์โหลด "+result+ " เรียบร้อย!")

  downloading(url2,function(result){
    console.log("ดาวน์โหลด "+result+ " เรียบร้อย!")

    downloading(url3,function(result){
      console.log("ดาวน์โหลด "+result+ " เรียบร้อย!")
      
      downloading(url4,function(result){
        console.log("ดาวน์โหลด "+result+ " เรียบร้อย!")
      })
    })
  })
})
*/