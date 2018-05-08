console.log(new Date())
const dayArray = ['Sunday', 'Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let dateTime = new Date()

console.log(`Today's date is: ${dayArray[dateTime.getDay()]}`)

console.log(dateTime.getHours())
console.log(dateTime.getMinutes())
console.log(dateTime.getSeconds())

let hourOfDay = (dateTime.getHours() >= 12) ? (dateTime.getHours() - 12) : dateTime.getHours()
let pmOrAm = (dateTime.getHours() >= 12) ? 'PM' : 'AM'
console.log(`Current time is : ${hourOfDay} : ${dateTime.getMinutes()} : ${dateTime.getSeconds()} ${pmOrAm}`)