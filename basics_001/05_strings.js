const name="Aditya"
const repocount=50

// console.log(name+repocount+" Value");
console.log(`Hello my name is ${name} any my repo count is ${repocount}`);


const gameName = new String('Aditya-aa-aa')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

// last value didn't got included in newstring

const anotherString = gameName.slice(-8,4)

console.log(anotherString);


const newStringone = "  Aditya    "
console.log(newStringone);
console.log(newStringone.trim());

const url ="https://Aditya.com/Aditya%30Saxena"

console.log(url.replace('%30','-'))


console.log(url.includes('Aditya'));

console.log(gameName.split('-'));

