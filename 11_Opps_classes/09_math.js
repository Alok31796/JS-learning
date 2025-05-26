// predifen property ko kaise upadte krte h
// Object.getOwnPropertyDescriptor(Math, "PI")
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);

// note: {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);


// const mynewObject = Object.create(null)  // ye trika bhi h object bnane ka fectory function ke sath 

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bani");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// Object.defineProperty(chai, "name", {
//     writable: false,
//     // enumerable: false
//     enumerable: true
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))


// for (const [key, value] of chai) {
//     console.log(`${key} and ${value}`); 
// }

// for (const [key, value] of Object.entries(chai)) {
//     console.log(`${key} and ${value}`); 
// }

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function'){
        console.log(`${key} and ${value}`); 
    }
}


// Ye pad lena kaide se