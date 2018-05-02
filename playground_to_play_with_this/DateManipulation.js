function dateManipulationFunction () {
 const dayArray = ['Sunday', 'Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let datevalue = new Date()

    console.log(datevalue)
    let dayOfWeek = dayArray[datevalue.getDay()]
    let yearValue = datevalue.getFullYear()
    let monthValue = (datevalue.getMonth() + 1)
    let twoDigitMonth = monthValue <= 9 ? '0'+ monthValue : monthValue
    let dayValue= datevalue.getDay()
    let twoDigitDay = dayValue <= 9 ? '0'+ dayValue : dayValue

    let fullDate = `${yearValue}-${twoDigitMonth}-${twoDigitDay}`

    let hourValue = datevalue.getHours()
    let twoDigitHour = hourValue <= 9 ? '0'+ hourValue : hourValue
    let minuteValue = datevalue.getMinutes()
    let twoDigitMinute = minuteValue <= 9 ? '0'+ minuteValue : minuteValue
    let secondValue = datevalue.getSeconds()
    let twoDigitSecond = secondValue <= 9 ? '0'+ secondValue : secondValue

    let fullTime = `${twoDigitHour}:${twoDigitMinute}:${twoDigitSecond}`

    let fullDateAndTime = `${fullDate} ${fullTime}`

        // console.log(this)
        
    return fullDateAndTime

    
}

const dateAndTime = {

    calculation : function () {
        const dayArray = ['Sunday', 'Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
           let datevalue = new Date()
       
           console.log(datevalue)
           let dayOfWeek = dayArray[datevalue.getDay()]
           let yearValue = datevalue.getFullYear()
           let monthValue = (datevalue.getMonth() + 1)
           let twoDigitMonth = monthValue <= 9 ? '0'+ monthValue : monthValue
           let dayValue= datevalue.getDay()
           let twoDigitDay = dayValue <= 9 ? '0'+ dayValue : dayValue
       
           let fullDate = `${yearValue}-${twoDigitMonth}-${twoDigitDay}`
       
           let hourValue = datevalue.getHours()
           let twoDigitHour = hourValue <= 9 ? '0'+ hourValue : hourValue
           let minuteValue = datevalue.getMinutes()
           let twoDigitMinute = minuteValue <= 9 ? '0'+ minuteValue : minuteValue
           let secondValue = datevalue.getSeconds()
           let twoDigitSecond = secondValue <= 9 ? '0'+ secondValue : secondValue
       
           let fullTime = `${twoDigitHour}:${twoDigitMinute}:${twoDigitSecond}`
       
           let fullDateAndTime = `${fullDate} ${fullTime}`
//            console.log(this)       
           return fullDateAndTime
       
        
       }
}

const modifiedDateAndTime = {

    datevalue : new Date(),
    yearMonthDay : function () {
        const dayArray = ['Sunday', 'Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let dayOfWeek = dayArray[this.datevalue.getDay()]
        let yearValue = this.datevalue.getFullYear()
        let monthValue = (this.datevalue.getMonth() + 1)
        let twoDigitMonth = monthValue <= 9 ? '0'+ monthValue : monthValue
        let dayValue= this.datevalue.getDay()
        let twoDigitDay = dayValue <= 9 ? '0'+ dayValue : dayValue
    
        return `${yearValue}-${twoDigitMonth}-${twoDigitDay}`

    },
    hourMinuteSecond : function() {
        let hourValue = this.datevalue.getHours()
        let twoDigitHour = hourValue <= 9 ? '0'+ hourValue : hourValue
        let minuteValue = this.datevalue.getMinutes()
        let twoDigitMinute = minuteValue <= 9 ? '0'+ minuteValue : minuteValue
        let secondValue = this.datevalue.getSeconds()
        let twoDigitSecond = secondValue <= 9 ? '0'+ secondValue : secondValue
    
        return `${twoDigitHour}:${twoDigitMinute}:${twoDigitSecond}`

    },
    calculation : function () {
           let fullDateAndTime = `${this.yearMonthDay()} ${this.hourMinuteSecond()}`
           console.log(this.datevalue)
           console.log(this)
           return fullDateAndTime
       

          
       }
}
console.log(`
*****************************************************`)
console.log(`************* Execution of Function *****************`)
console.log(`uncomment the 'this' console.log to see scope of this`)
console.log(`*****************************************************`)
console.log(dateManipulationFunction())
console.log(`
******************************************************`)
console.log(`**** Execution of Function rewritten as a Method *****`)
console.log(`uncomment the 'this' console.log to see scope of this`)
console.log(`******************************************************`)
console.log(dateAndTime.calculation())
console.log(`
***********************************************************`)
console.log(`**** Execution of Methods split into seperate methond *****`)
console.log(`***uncomment the 'this' console.log to see scope of this***`)
console.log(`***********************************************************`)
console.log(`This is the returned value from the method calculation ${ modifiedDateAndTime.calculation()  }`)

console.log(`This is the returned value from the method yearMonthDay ${ modifiedDateAndTime.yearMonthDay()  }`)

console.log(`This is the returned value from the method hourMinuteSecond ${ modifiedDateAndTime.hourMinuteSecond()  }`)