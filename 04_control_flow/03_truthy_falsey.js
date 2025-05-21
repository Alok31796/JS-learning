console.log("============ Truethy and Falsey value ============");

const userEmail = "a@mail.com" // true
// const userEmail = "" // false
// const userEmail = [] // true

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}


// falsy values -> false, 0, -0, Bigint 0n, "", undefined, NAN

// Truthy values -> true, 1, "0", "false", " ", [], {}, function(){}


// if(userEmail.length === 0){} // empty array check krne ke liye

const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){} // empty object check karna

// false == 0 // true
// false == '' // true
// 0 == '' // true


// Nullish Coalescing Operator (??) : null undefiened

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1);



// Terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");
