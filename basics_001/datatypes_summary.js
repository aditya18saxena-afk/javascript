// primitive contains 7 datatypes : string , number , boolean , null , undefined , symbol , BigInt 

// non primitive : arrays , objects , functions

// primitive are call by value and non primitive are call by refrence 

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId);


// const bigNumber = 446743545435463786n

// const heroes = ["shaktimaan","naagraj","doga"];

// let myobj = {
//     name:"Aditya",
//     age: 19,

// }

// const myFunction = function(){
//     console.log("Hello world");
    
// }
// console.log(typeof bigNumber);

// stack(Primitive) , Heap(Non-Primitive)

// in stack we get a copy of the variable declared whereas in 
// heap we get a refrence of the original Value


let myyoutubename = "AdityaYoutube"

let anotherName= myyoutubename
anotherName="chaiaurcode"

console.log(myyoutubename);
console.log(anotherName);


let userone={
    email:"user@google.com",
    upi:"user@ybl"
}

let usertwo= userone

usertwo.email="aditya@google.com"

console.log(userone.email);
console.log(usertwo.email);

