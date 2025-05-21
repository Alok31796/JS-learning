console.log("======================= Object =======================");

// ======= singleton ======= -> jb constructor se bnate h to ek hi object anta h apne trike ka
// Object.create

//  ======= Object literals ======= -> esme multiple instance bn jate h // esko object litral bhi bolte h

const mySym = Symbol("key1")

const JsUser = {
    name: "Alok",
    "full name": "Alok Pandey",
    age: 18,
    // mySym: "myKey1",
    [mySym]: "myKey1",
    location: "lucknow",
    email: "alok@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Satuarday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); // ye wala aaise hi ho skta h
// console.log(JsUser.mySym); // but ye sombol ni h
// console.log(typeof JsUser.mySym);  // note:- upr wala code comment or uncomment krke check krna
// console.log(JsUser[mySym]);  // symbol aise access krte h
// console.log(typeof JsUser[mySym]);  // but yr symbol h jb object print kroge to usme dikhata h

JsUser.email = "Aman@gmail.com"
// console.log(JsUser);
// Object.freeze(JsUser) // esse koi change ni hota h object me vo frize kr deta h
// JsUser.email = "Ankit@gmail.com" // ye wala change ni hoga
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`); // this apne object ko refernce krta h
}

//console.log(JsUser.greeting); // esme functine return krta h eska rfrance aata h
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





