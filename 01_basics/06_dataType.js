console.log("06_dataType");

//  JS is daynmic type

// data type divided into two catigory Primitive and Non Primitive(referance) datatype

// Primitive Type : 7 types => String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);
// console.log(id === anotherId);

const bigNumber = 2161231682313186415319n;

// Non Primitive (Reference) Type : Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let obj = {
    userName:"Alok",
    age:22,
}

let fun = function(){
    console.log("Hello world");   
}


// primitive
console.log("==== Primitive ====");
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof bigNumber);
console.log(typeof anotherId);
console.log(typeof userEmail);
console.log(typeof isLoggedIn);
console.log(typeof outSideTemp);

// non primitive
console.log("==== NoN Primitive ====");
console.log(typeof heros);
console.log(typeof obj);
console.log(typeof fun); // object function bola jata h
