// truthy falsy 

const userEmail = "a@aditya.ai"

// if (userEmail) {
//     console.log("Got user email");
    
// } else{
//     console.log("Don't have user email");
    
// }

// non empty string returns true
// empty string returns false

// empty array returns true 

// falsy values :-

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN 


// truthy values :-

// true , "0" , 'false'/"false" , " " , [] , {} , function(){} 

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("object is empty ");
    
// }

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

// NULLISH COALESCING OPERATOR (??): null undefined

let val1 ;
// val1 = 5 ?? 10

// val1 = null ?? 10

val1 = undefined ?? 15

val1 = null ?? 10 ?? 15

console.log(val1);

// ternary operator 

condition ? true : false 
