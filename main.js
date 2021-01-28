
// const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// const now = new Date()

// let year = now.getFullYear()
// let month = now.getMonth()
// let dayNumber = now.getDate()
// let dayName = now.getDay()

// month = months[ month ]
// dayName = days[ dayName ]

// let usDate = dayName+','+month+''+dayNumber+','+year

// console.log('U.S. Date:'+ usDate)

/************************************* */
// const now = new Date()

let hour = now.getHours()
let minute = now.getMinutes()
let second = now.getSeconds()
let millisecond = now.getMilliseconds()

  if( minute<10){ minute='0'+ minute}
  if( second<10){ second='0'+ second}

let time = 'It is now: ' + hour + ':' + minute + ':' + second + ' and ' + millisecond + ' milliseconds '

 console.log( time)

// // console.log(now.getHours())

/************************************* */

let greeting = 'Good Morning! '

  if( hour>11 ){ greeting = 'Good Afternoon! '}
  if( hour>17 ){ greeting = 'Good Evening! '}

 console.log(greeting)

let suffix = (hour > 11) ? 'P.M.' : 'A.M.'

  if( hour > 12) { hour-= 12 }

console.log('This time is: '+ hour +':'+ minute +' '+ suffix)