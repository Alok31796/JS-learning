
// - object literal ===================

const user = {    // object ko hi object literal khte h
    username: "Alok",
    loginCount: 8,
    signedIn: true,

    getUserDeatails: function(){
        // // console.log("Got user detalis from database");
        // // console.log(`username: ${username}`);
        // // console.log(`username: ${this.username}`);
        // console.log(this); // ye current object ke context ko refer krta h
        
    }
}


// console.log(user.username);
// console.log(user.getUserDeatails());
// console.log(this); // ye global context refer krta h pr nnode me ni hota h to {} aa rha h pr browseer me window aata h



// - constructor function ==============
// new keyword constructor function h to jo new keyword h ye ek hi object literal ke kayi sare instace  bna skte h ( kayi sare context bna skte h)
// const promise1 = new Promise()
// const date = new Date()

// ex

// function User(username, logincount, isLoggedIn){
//     this.username = username;
//     this.logincount = logincount;
//     this.isLoggedIn = isLoggedIn;

//     // return this   // new wale exapmle me likho na likho apko value milegi ye imlesitly define hota h (but bina new keyword ke ni hota to comment hta kr dekh lena upr wake exp me jisme new ni likha h )
// }


// // const userOne = User("alok", 12, true)
// // const userTwo = User("aman", 11, false)
// // console.log(userOne);


// const userOne = new User("alok", 12, true)
// const userTwo = new User("aman", 11, false)
// console.log(userOne);
// console.log(userTwo);


// new me 
// step1: {} epmty object create hota h 
// step2: constaurtor function call hota h new keyword ki wja se -> to jo bhi argument wghra h usme pack ho jate h
// step3: this keyword h jisme jo bhi argument wghra h vo inject (add) ho jata h
// step4: apko ye sb mil jata h 




function User(username, logincount, isLoggedIn){
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }

    // return this   // new wale exapmle me likho na likho apko value milegi ye imlesitly define hota h (but bina new keyword ke ni hota to comment hta kr dekh lena upr wake exp me jisme new ni likha h )
}


// const userOne = User("alok", 12, true)
// const userTwo = User("aman", 11, false)
// console.log(userOne);


const userOne = new User("alok", 12, true)
const userTwo = new User("aman", 11, false)
console.log(userOne.constructor);  // khud ka hi referece deta h 
// console.log(userOne);
// console.log(userTwo);


// check Instanceof function in mdn

