console.log("================= Functions with objects and array =================");


// jb na pata ho kitne parameter aane wale h

// function calculateCardPrice(...num1){   // rest bole h pearameter me esse ek aaraye me daal kr de dega
//     return num1
// }

// console.log(calculateCardPrice(200, 400, 500, 2000));


// function calculateCardPrice(val1, val2, ...num1){   // val1 -> 200, val2 -> 300 baki ka rest me jayega
//     return num1
// }

// console.log(calculateCardPrice(200, 400, 500, 2000));


// const user = {
//     username: "ALok",
//     price: 199,
// }

// const user = {
//     username: "ALok",
//     prices: 199, // ye wale me undefined aaayega kyuki "s" laga h
// }

// function handleObject(anyobject){
//     console.log(`Username Is ${anyobject.username} and price is ${anyobject.price}`);
    
// }
// // handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399,
// })


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));




