console.log("========== High Order Array loops ==========");

// ["", "", ""]
// [{}, {}, {}]

// for of -> Array pr lgta h

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(`Value is ${num}`);
// }

// for of -> String pr nhi lgta h

// const greetings = "hello world";

// for (const greet of greetings) {
//   if (greet == " ") {
//     continue;
//   }
//   console.log(greet);
// }


// MAPs -> map khud bhi object hota h joki key value paire hold krta h

const map = new Map()

map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "INDIA")   // value dublicate ni hoti h

// console.log(map);


// for (const key of map) {
//     console.log(key); 
// }

// for (const [key, value] of map) {
//     console.log(key, ':-', value); 
// }

// const myObject = {
//     'game1': "NFS",
//     'game2': "Spiderman"
// }

// for(const [key, value] of myObject){   // for of se object etrelibale ni h
//     console.log(key, "---", value);
// }


//  For In loop  -> keys deta h object pr chlata h or maps pr ni chlta h kyuki vo itreable ni h fir in se
// const myObj = {
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObj) {
//     console.log(key, "-----", myObj[key]); 
// }



// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(`${key} of Array and value is ${programming[key]}`)
// }





