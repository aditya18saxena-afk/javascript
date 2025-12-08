// IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function chai(){
    // yeh h named iife
    console.log(`DB CONNECTED`);
    
})();

(  (name) => {
    // yeh h un-named iife
    console.log(`DB CONNECTED TWO ${name}`);
    
}  )('Aditya') // first parenthesis for function definition and 2nd parenthesis for function execution

//global scope ke pollution se problem hoti h kayi baar
// uss pollution ko htane ke liye iife ka use kiya 

// jab do iife saath mei use krne ho toh semicolon lgao phle iife ke baad 
