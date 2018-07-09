
var x = ['']
    let linePrint = ''
for (var i = 1; i<= 10; i++) {
    linePrint = linePrint + String.fromCharCode(42)
} 
console.log(linePrint)
for (var i = 0; i < 4; i++) {
 //   let linePrint = ''
    let linePrint = String.fromCharCode(42)
    for (j = 1; j <= i; j++) {
        linePrint = linePrint + String.fromCharCode(32)
    } 
    linePrint = linePrint + String.fromCharCode(42)
    for (var k = (6 - i*2);  k> 0; k-- ) {
        linePrint = linePrint + String.fromCharCode(32)

    }
    linePrint = linePrint + String.fromCharCode(42)
    for (l = 1; l <= i; l++) {
        linePrint = linePrint + String.fromCharCode(32)
    } 
    linePrint = linePrint + String.fromCharCode(42)
    console.log(linePrint)
}

for (var i = 3; i >= 0; i--) {
    //   let linePrint = ''
       let linePrint = String.fromCharCode(42)
       for (j = 1; j <= i; j++) {
           linePrint = linePrint + String.fromCharCode(32)
       } 
       linePrint = linePrint + String.fromCharCode(42)
       for (var k = (6 - i*2);  k> 0; k-- ) {
           linePrint = linePrint + String.fromCharCode(32)
   
       }
       linePrint = linePrint + String.fromCharCode(42)
       for (l = 1; l <= i; l++) {
           linePrint = linePrint + String.fromCharCode(32)
       } 
       linePrint = linePrint + String.fromCharCode(42)
       console.log(linePrint)
   }
   linePrint = ''
   for (var i = 1; i<= 10; i++) {
    //    linePrint = String.fromCharCode(42)
        linePrint = linePrint + String.fromCharCode(42)
    } 
    console.log(linePrint)

