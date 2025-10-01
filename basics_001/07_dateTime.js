//dates 

let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);

// month starts from 0 in javascript hen return in comma format and from 01 when written in ddmmyyyy format.



//  let myCreatedDate = new Date(2025,0,23)
//  let myCreatedDate = new Date(2025,0,23,5,3)
// let myCreatedDate = new Date("2025-01-23")
let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);
console.log(newdate.getSeconds());
console.log(newdate.getMinutes());
console.log(newdate.getHours());
console.log(newdate.getDay());
console.log(newdate.getMonth());

// `${newdate.getDate()} and the time `

newdate.toLocaleString('default',{
    weekday: "long"
})
