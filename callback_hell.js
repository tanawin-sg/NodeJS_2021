//เขียนโปรแกรมดาวโหลดไฟล์

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