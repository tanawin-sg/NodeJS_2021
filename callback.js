//เขียนโปรแกรมดาวโหลดไฟล์

const url1 = "winnity.com/file1.json"

function downloading(url,callback){
  console.log('กำลังดำโหลดไฟล์จาก '+url)
  setTimeout(()=>{
    callback(url)
  },3000)
}

function complete(result){
  console.log("ดาวน์โหลด "+result+ " เรียบร้อย!")
}

//downloading(url1,complete)
//callback รูปย่อ
downloading(url1,function(result){
  console.log("ดาวน์โหลด "+result+ " เรียบร้อย!")
})