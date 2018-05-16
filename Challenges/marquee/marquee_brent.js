/***
 * Rotate the string 'w3resource' in right direction by periodically removing
 * one letter from the end of the string and attaching it to the front.
 *
 * Like the HTML marquees from the good ol days
 */

 function marquee(scroll_string) {
   // accept a string
   // turn string into array for manipulaiton
   // output each incrementally scrolled version of the string



   for(i2 = 0; i2 < scroll_string.length; i2++) {

     if(typeof new_string_array === "undefined") {

       var array_string = scroll_string.split("");

     }
     else {

       var array_string = new_string_array;

     }

     var new_string_array = [];

     var new_string = "";

     for(i = 0; i < scroll_string.length; i++) {

       if(i + 1 < scroll_string.length) {
         new_string_array.push(array_string[i + 1]);
       }
       else {
         new_string_array.push(array_string[0]);
       }

       new_string = new_string_array.join("");

     }

     console.log(new_string);
   }

 }


marquee("example ");
