const user = {
    username : "Aditya",
    price : 499,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Aadi"
// user.welcomeMessage()

 //console.log(this); //{} empty context

// function Chai(){
//     let username = "Aditya"
//     console.log(this.username); // dekho iss tarah se this use nhi ho skta function mei
    
// }

// Chai()

// const Chai = function(){
//     let username = "Aditya"
//     console.log(this.username); // undefined
    
// }

// Chai()

const chai = () => {
    let username = "Aditya"
    console.log(this);
    
}
// chai()

// const addtwo = (num1 ,num2) => {
//     return num1 + num2
// }


// const addtwo = (num1 ,num2) =>  num1 + num2  // implicit return hai yeh 
// const addtwo = (num1 ,num2) =>  (num1 + num2)  // implicit return hai yeh 

const addtwo = (num1 , num2) => ({username: "Aditya"})

console.log(addtwo(3,4));
console.log(`HELLLO`);

