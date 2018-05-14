/***
 * Sample Output :
 *
 * Today is : Friday.
 * Current time is : 4 PM : 50 : 22
 *
 */

 function date_format() {
   var d = new Date();
   console.log(d);
   console.log(d.getTimezoneOffset());
   var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
   console.log("Today is " + weekdays[d.getDay()]);

   // This works, but it's like a magic method to me. I don't really undersatnd it.
   // var time = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
   // console.log("Current time is " + time);

   // Doesn't get am/pm designation
   // console.log("Current time is " + d.getHours() + ":" + d.getMinutes());


   console.log("The time is " + twelve_hour_time(d));
 }

 function twelve_hour_time(d) {
   var hours;
   var minutes;
   var ampm;
   if(d.getHours() > 12) {
     hours = d.getHours() - 12;
     ampm = "pm";
   }
   else {
     hours = d.getHours();
     if(hours > 11) {
       ampm = "pm";
     }
     else {
       ampm = "am";
     }
   }
   minutes = d.getMinutes();
   return hours + ':' + minutes + ' ' + ampm;
 }

 date_format();
