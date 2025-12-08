function one(){
    const username = "Aditya"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}

// one()

if(true){
    const username = "Aditya"
    if(username === "Aditya"){
        const website = " youtube"
        // console.log(username + website);
        
    }
   // console.log(website);
    
}
// console.log(username);

// ++++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++

console.log(addone(5));


function addone(num){
    return num + 1
}

console.log(addTwo(5));

// function ko variable mei hold kroge toh initialization se phele execute nhi hoga
const addTwo =  function(num){
    return num + 2
}

