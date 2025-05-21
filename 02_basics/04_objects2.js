console.log("====================== singleton Objects ======================");

// const tinderUser = new Object() // te singleton object h
const tinderUser = {} // ye non singleton object h but dono same hi output dete h


tinderUser.id = "123abc"
tinderUser.name = "Alok"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email : "sonambhajba@hotmail.com",
    fullname : {
        userFullname : {
            firstname : "sonam",
            lastname : "bhajba"
        }
    }
}


// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullname);
// console.log(regularUser.fullname?.userFullname.firstname); // ? optional chaning

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2} aise object ke andr object aa ajata h

// const obj3 = Object.assign(obj1, obj2)
//const obj3 = Object.assign({}, obj1, obj2)  // {} optinal hota h  ->  Object.assign(target, source)
// const obj3 = Object.assign({}, obj1, obj2, obj4)  // {} optinal hota h  ->  Object.assign(target, source)

const obj3 = {...obj1, ...obj2} // mostly you use this 
// console.log(obj3);


// jab data base se aaye to

const users = [
    {
        id: 1,
        email: "alok@gmail.com"
    },
    {
        id: 1,
        email: "alok@gmail.com"
    },
    {
        id: 1,
        email: "alok@gmail.com"
    },
    {
        id: 1,
        email: "alok@gmail.com"
    },
]


// console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // jb ye krte h to usko keys ka ek array bna deta h or aap log loop kr skte h
console.log(Object.values(tinderUser)); // jb ye krte h to usko values ka ek array bna deta h or aap log loop kr skte h
console.log(Object.entries(tinderUser)); // ye to us klhatnak h array ke ander array bna deta h

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
console.log(tinderUser.hasOwnProperty('isLogged')); // false



 



