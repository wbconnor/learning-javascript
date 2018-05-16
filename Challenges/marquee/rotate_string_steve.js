
function rotate_string(stringInput){

    console.log(stringInput)

    for(var i = 0; i <= stringInput.length - 1; i++) {
        var lastLetter = stringInput.charAt(stringInput.length - 1)
        stringInput = lastLetter + stringInput.substr(0, 23)
        console.log(`${stringInput}`)
    }

}
console.log('AAAAAAAAAAAAAAAAAAAA')
rotate_string('the length of the string')







function rotate_string2(stringInput){
    return stringInput.charAt(stringInput.length - 1) + stringInput.substr(0, 23)
}

let stringInput = 'the length of the string'

let returnedstring = rotate_string2(stringInput)

console.log('BBBBBBBBBBB')
for(var i = 0; i <= stringInput.length - 2; i++) {
    returnedstring = rotate_string2(returnedstring)
    console.log(returnedstring)
}









let rotate_string3 = (function (){

    let stringInput = ''
    return  (stringInput) => {  
         //   console.log(stringInput)
        return stringInput.charAt(stringInput.length - 1) + stringInput.substr(0, 23)
  
    }
})()

stringInput = 'the length of the string'

//let returnedstring = rotate_string3('the length of the string')
console.log('************************')

for(var i = 0; i <= stringInput.length - 1; i++) {
 let   returnedstring = rotate_string3(stringInput)
    stringInput = returnedstring
    console.log(returnedstring)
}
