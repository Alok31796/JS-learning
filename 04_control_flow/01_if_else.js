console.log("============== Control flow ==============");

// if statement

// const isUserLoggedIn = true
// const temperature = 41

// if (temperature < 50){
//     console.log("less then 50");
    
// }else{
//     console.log("temperature is greater than 50");
// }

// <, >, <=, >=, ==, !=, ===, !==


const score = 200

// if(score > 100){
//     // var power = "fly"
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
//     console.log(`User power: ${power}`);

// const balance = 1000;

// if(balance > 500) console.log("test");
// if(balance > 500) console.log("test"),console.log("test2"); // dont do like this

// if(balance < 500){
//     console.log("less than 500"); 
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less then 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFormGoogle = false
const loggedInFormEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}


if(loggedInFormGoogle || loggedInFormEmail){
    console.log("User Logged in"); 
}


// Nullish Coalescing Operator (??) : null undefiened

let val1;

val1 = 5 ?? 10

console.log(val1);
