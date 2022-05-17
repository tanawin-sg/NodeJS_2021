const modules = require('./modules/modules.js')
const DateNow = require('./modules/modules.js').getCurrentTime // import แบบเป็นชื่อฟังก์ชั่นเลย
const plus = require('./modules/modules.js').add // import แบบเป็นชื่อฟังก์ชั่นเลย

console.log(modules.getCurrentTime())
console.log(modules.add(4,5))
console.log(DateNow())
console.log(plus(2,5))
console.log(modules.formatNumber(5000000))