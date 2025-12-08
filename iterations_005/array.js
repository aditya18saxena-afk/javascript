// for of 

// ["","",""]
// [{},{},{}]

const arr =[1,2,3,4,5]

// for (const val of arr) {
//     console.log(val);
    
// }

// const greetings = "Hello world"
// for (const greet of greetings) {
//     console.log(`Each char of greetings is ${greet}`);
    
// }

//Maps

const map =new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

// console.log(map); // unique value pairs and in inserted order 

// duplicated entries not printed

// for (const key of map) {
//     console.log(key);
    
// }


// for (const [key,value] of map) { // object de construction
//     console.log(key,':-',value);
    
// }


const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key,value] of myObject) { // shows myObject is not iterable
//     console.log(key,':-',value);
    
// }

