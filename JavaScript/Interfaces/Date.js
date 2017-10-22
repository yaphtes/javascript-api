/*** <<< Свойства экземпляров >>> ***/

Date.now()  // => number
Date.parse(string)  // => number
Date.toString()  // => string
Date.UTC(year, month, date?, hours?, minutes?, seconds?, ms?)  // => number



/*** <<< Прототип >>> ***/

let date = new Date()

date.getDate()  // => number
date.getDay()  // => number
date.getFullYear() // => number
date.getHours()  // => number
date.getMilliseconds()  // => number
date.getMinutes()  // => number
date.getMonth()  // => number
date.getSeconds()  // => number
date.getTime()  // => number
date.getTimezoneOffset()  // => number
date.getUTCDate()  // => number
date.getUTCDay()  // => number
date.getUTCFullYear()  // => number
date.getUTCHours()  // => number
date.getUTCMilliseconds()  // => number
date.getUTCMinutes()  // => number
date.getUTCMonth()  // => number
date.getUTCSeconds()  // => number
date.setDate(date)  // => number
date.setFullYear(year, month?, date?)  // => number
date.setHours(hours, min?, sec?, ms?)  // => number
date.setMilliseconds(ms)  // => number
date.setMonth(month, date)  // => number
date.setSeconds(sec, ms?)  // => number
date.setTime(value)  // => number
date.setUTCDate(date)  // => number
date.setUTCFullYear(year, month?, date?)  // => number
date.setUTCHours(hours, min, sec?, ms?)  // => number
date.setUTCMilliseconds(ms)  // => number
date.setUTCSeconds(sec, ms?)  // => number
date.toDateString()  // => string
date.toISOString()  // => string
date.toJSON()  // => string
date.toLocaleDateString(locales?, Intl.DateTimeFormatOptions?)  // => string
date.toLocaleString(locales?, Intl.DateTimeFormatOptions?)  // => string
date.toLocaleTimeString(locales?, Intl.DateTimeFormatOptions?)  // => string
date.toString()  // => string
date.toTimeString()  // => string
date.toUTCString()  // => string
date.valueOf()  // => number


