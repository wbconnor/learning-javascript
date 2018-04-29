function getStringAndReverse(stringValue) {
    let lengthOfString = stringValue.length
    let newString = ''
    for (let i  = lengthOfString; i--; i>0) {

        newString = newString+stringValue.charAt(i)
    }

    return newString 

}

console.log(getStringAndReverse('the cat ran up the tree'))