console.log("05_comparison of datatype");


// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);



// console.log("2" > 1); // true
// console.log("02" > 1); // true
 
// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// The reason is that an equality check == and comparisons > < >= <= work differently. 
// comparisions convert null to a number, treating it as 0. 
// that's why (3) null >= 0 is true and (1) null > 0 is false.


// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false
// console.log(undefined >= 0); // false
// console.log(undefined <= 0); // false


// console.log(null==null); // true    
// console.log(null===null); // true
// console.log(undefined==undefined); // true
// console.log(undefined===undefined); // true
// console.log(undefined==null); // true
// console.log(null==undefined); // true
// console.log(null===undefined); // false
// console.log(undefined===null); // false


// === strict check
// console.log("2" == 2); // true
// console.log("2" === 2); // false
