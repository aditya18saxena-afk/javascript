// Arrays

// arrays are resizable and can contain mix of different data types.
// array declaration

const myArr = [0,1,2,3,4,5]
const heroes = ["shaktimaan","ironman","hawkie","thor","loki"]
const myArr2 = new Array(1,2,3,4)


// console.log(myArr[1]);

// arrays methods

// myArr.push(6)
// myArr.push(8)
// myArr.pop() //removes the last element from array.

// myArr.unshift(9) //adds the given element at first disturbing all the other elements in the array.
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(4));
// console.log(myArr.indexOf(99));

// const newArr = myArr.join() //makes string of elements with comma as seperator.


// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr);

// slice,splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3) //doesn,t manipulate the original array.

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3) //manipulate the original array as shown by below code 
// yeh range ko array se hi gayab kr deta hai.
console.log("C",myArr);

console.log(myn2);








