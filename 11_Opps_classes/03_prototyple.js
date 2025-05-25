console.log("=============== Prototype ===============");

// let myName = "alok     "
// let myChannel = "codelog     "

// // console.log(myName.length);
// // console.log(myName.trueLength);  // trueLangth banana h


// let myHero = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.alok = function(){   // object me hi define kr diya h to ye sb ke pass hoga
//     console.log("alok is present in all objects")
// }

// heroPower.alok() // object
// myHero.alok() // array
// myName.alok() // string


// Array.prototype.heyAlok = function(){   // object me hi define kr diya h to ye sb ke pass hoga
//     console.log("alok says hello")
// }

// // heroPower.heyAlok()  // eske pass access ni h
// myHero.heyAlok()  // sirf array ke ppas hi h



// // inheritance
// const User = {
//     name: "alok",
//     email: "alok@gmail.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: "JS assignment",
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__= User

// console.log(Teacher.email);
// console.log(TASupport.isAvailable);

// // morden Syntext
// Object.setPrototypeOf(TeachingSupport, Teacher)
// console.log(TeachingSupport.makeVideo);


// 

let anotherUserName = "alokCodelog       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"aman".trueLength()
"iceTea".trueLength()