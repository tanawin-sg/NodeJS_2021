// การทำงานต่างๆในโปรเจค

function getCurrentTime(){
  return new Date()
}

function add(x,y){
  return x+y
}

function formatNumber(num){
  return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

//ส่งออกคำสั่งไปใช้ exports.ตั้งชื่อสำหรับส่งออก = ชื่อฟังก์ชั่นในโมดูล
module.exports.getCurrentTime = getCurrentTime
module.exports.add = add
module.exports.formatNumber = formatNumber