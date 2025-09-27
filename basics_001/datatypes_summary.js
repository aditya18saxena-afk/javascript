// primitive contains 7 datatypes : string , number , boolean , null , undefined , symbol , BigInt 

// non primitive : arrays , objects , functions

// primitive are call by value and non primitive are call by refrence 

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


const bigNumber = 446743545435463786n

const heroes = ["shaktimaan","naagraj","doga"];

let myobj = {
    name:"Aditya",
    age: 19,

}

const myFunction = function(){
    console.log("Hello world");
    
}
console.log(typeof bigNumber);
