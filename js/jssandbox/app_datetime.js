let val;

const today = new Date();
let birthday = new Date("03-23-1990 11:30:59");
birthday = new Date("23 1990 Mar 11:30:59");

val = String(birthday);
val = today.getDate();
val = today.getDay();
val = today.getMonth();
val = today.getFullYear();

val = today.getHours();
val = today.getSeconds();
val = today.getMinutes();

val = today.getTime(); //Timestamp: seconds from Jan 1 1970

birthday.setMonth(13); //month starts from 0 and adds months to given year

console.log(birthday);
