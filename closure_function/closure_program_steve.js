

var addWordToString = (function  () {

    var stringOfWords = '';

    return function (theWord) { 
        stringOfWords = stringOfWords + theWord; 
        console.log( stringOfWords)}
});
console.log('These two functions represent a closure')
console.log('A closure is an inner function that has')
console.log('access to the outer (enclosing) function\'s')
console.log('variables (after the the external function ')
console.log('is done executing and is no longer on the ')
console.log('scope chain')

var returnedString = addWordToString('the')
returnedString('the')
returnedString( ' fox')
returnedString( ' ran')
returnedString( ' up')
returnedString( ' the')
returnedString( ' tree')


var addWordToStringTwo = (function  () {

    var stringOfWords = '';

    return function (theWord) { 
        stringOfWords = stringOfWords + theWord; 
        console.log( stringOfWords)}
})();

addWordToStringTwo('the')
addWordToStringTwo( ' fox')
addWordToStringTwo( ' ran')
addWordToStringTwo( ' up')
addWordToStringTwo( ' the')
addWordToStringTwo( ' tree')