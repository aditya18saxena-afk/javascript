// const tinderUser = new Object()

const tinderUser = {}


//key value ke bina input kr diya object mei 
// i meaan {} iske andar likhe bina.


tinderUser.id = "123abc"
tinderUser.name = "Aadi"
tinderUser.isLoggedIn = false

const regularUser = {
    email : "sum@gmail.com",
    fullname: {
        userFullName : {
            fisrtname: "Aditya",
            lastname: "Saxena"
        }
    }
}
console.log(regularUser.fullname.userFullName.fisrtname);
// console.log(regularUser.fullname?.userFullName.fisrtname);
// ab dekho isme fullname ke baad ? lga hai 
// yeh protection dila deta hai age koi value exist nhi krti tb .
// ab yeh phele check krega agr regular user object mei fullname exist krta hai ya nhi fr aage bdhega.

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 ={obj1,obj2}
console.log(obj3);


// console.log(tinderUser);

