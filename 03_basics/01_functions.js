console.log("============ Functions and parameter ============");



function sayMyName(){
    console.log("A");
    console.log("L");
    console.log("O");
    console.log("K");
}

//sayMyName // referance
// sayMyName() // exicution

// function addTwoNumbers(number1, number2){   // function ki defenation me jo hota h usko perameters 
//     console.log(number1 + number2);
    
// }

// addTwoNumbers()  // jb aise doge to NAN aayega
// addTwoNumbers(4, "6") // but problem tb aayrgi jb number ni denge
// addTwoNumbers(4, "a") // or bhi bdi problem tb aayrgi jb number ni denge
// addTwoNumbers(4, null) // or bhi bdi problem tb aayrgi jb number ni denge
// addTwoNumbers(4, 6) // ye arguments h
// const result = addTwoNumbers(4, 6) // ye arguments h
// console.log("Result: ", result); // yhio h bdi problem kyuki return ni kr rha h


// function addTwoNumbers2(number1, number2){   // function ki defenation me jo hota h usko perameters 
//     let result = number1 + number2  // ye result or function ke bahr wala result alg alg h (scope ki wja se aage pdenge)
//     console.log("alok"); // ye prient hoga
//     return result;
//     console.log("alok pandey"); // ye kabhi bhi exicute ni hoga kyuki return hone ke baad function exit kr jata h
    
// }

function addTwoNumbers2(number1, number2){ 
    return number1 + number2;
}

const result = addTwoNumbers2(4, 6)
// console.log("Result: ", result);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }



//  loginUserMessage("alok")
// console.log(loginUserMessage("alok"));
// console.log(loginUserMessage(""));

// check kr lo
// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter the user name"); 
//         return     
//     }
//     return `${username} just logged in`
// }

// ! true ko false me or false ko true me
//  js ke ander kusch cheejo ko false mana jata h   "" -> false value and undefined -> false

// function loginUserMessage(username){
//     if(!username){  // username jo false h usko !unsername yni true kr do
//         console.log("Please enter the user name"); 
//         return     
//     }
//     return `${username} just logged in`
// }


//  Defalt perameters
function loginUserMessage(username = "sam"){
    if(!username){  // ab esme aayega hi ni kyuki hamesa sam hg bha pr to undefied aana hi nahi h
        console.log("Please enter the user name"); 
        return     
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("")); // pr ek case me undefied aayega kyuki "" intensanly bej rhe ho jiski value false hoti h
console.log(loginUserMessage(" ")); // 🤣 space h count hoga
console.log(loginUserMessage(undefined)); // undefined to bhi defalt work krega
console.log(loginUserMessage()); // undefined h to defalt work krega
console.log(loginUserMessage("ALOK")); // agr value h to defalt ni chelga
 