// singleton yeh main refrence de deta hai. yeh constructor se bnta hai . 

// literals se bnaoge toh instances create hote hai.
// Object.create

// object literals

const mySym = Symbol("key1") // symbol ko object m key bnane ke liye [] iska use krna pdta hai.
// symbol ki value object mei print krwane ke liye bhi dot nhi [] lgega
// for ex console.log(jsUser[mySym]) aise!!


// objects mei key:value pair honge


const JsUser = {
    name: "Aditya",
    "full name": "Aditya saxena", // isko dot se access kren ka koi trika nhi hai.
    mySym:"mykey1",   //yeh abhi type of mei string dikhayega.
    //[mySym]: "mykey1", // yeh abhi type of mei symbol dikhayega.
    age: 18,
    location: "Delhi",
    email: "Aditya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //yh best trika nhi hai value access kren ka .
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Aditya@chatgpt.com"
// Object.freeze(JsUser) //object freeze kr diya hai ab object ki koi bhi value change nhi hogi
JsUser.email = "Aditya@microsoft.com"
// console.log(JsUser); // value phele hi freeze krdi ab yeh chatgpt ki jgh microsoft nhi krega.

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // yahan pr this isiliye lgaya hai kyunki sam object ko refer kr rhe hai.
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// console.log(typeof JsUser.mySym);
