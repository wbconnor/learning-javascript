
function calulateAverage() {
    if (arguments.length === 0) {
        console.log('there are no arguments')
    } else {
        var j = 0
        for( i=0; i < arguments.length; i++) {
            j = j + arguments[i]
            }
        console.log(j/arguments.length) 
        }
    }
    
calulateAverage()
calulateAverage(1)
calulateAverage(2,5)

calulateAverage(2,5,5,7,8,9)