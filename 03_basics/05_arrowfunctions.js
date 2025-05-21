console.log("=================== THIS and arrow function ===================");

//  This keyword tell yoou current context 

// const user = {
//     username: "alok",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to website`);
//         console.log(this); // esi object ki cuurent value  ko refer krta h
        
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // node invarment me {} empty refer krta h

// this ko browser me run krke dekhna current context ko refur krta h


// function chai(){
//     let username = "Alok"
//     console.log(this.username); // yjs use ni kr skte
// }

// chai()


// const chai = function(){
//     let username = "Alok"
//     console.log(this.username); // yjs use ni kr skte
// }
// chai()



// const chai = ()=>{
//     let username = "Alok"
//     // console.log(this.username); // yjs use ni kr skte
//     console.log(this); // {}  aata h
// }
// chai()

// ================= Arrow function =================

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4));


//  ======== implecit return ==========
// const addTwo = (num1,num2) => num1 + num2
// console.log(addTwo(3, 4));


// //  ======== implecit return ==========
// const addTwo = (num1,num2) => (num1 + num2)
// console.log(addTwo(3, 4));
ssssss

//  ======== es liye () use krte h ==========
const addTwo = (num1,num2) => ({username: "ALok"})
console.log(addTwo(3, 4));




// const myArray = [4,5,6,2,8,41]
// myArray.forEach(()=>{})








