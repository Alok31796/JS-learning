console.log("07_Stack_&_Heap_memory");

// Momories
// stack->(Primitive) : jo bhi variable declare kiya h uska copy milta h
// Heap->(Non-Primitive) : jb bhi heap andr define hoti h h to refrance milta h to jo bhi change kegnge to usme bhi ho jayega



// stack->(Primitive)
let myName = "Alok Pandey"
let anotherName = myName; // eski ek copy banata h
console.log(anotherName);
anotherName = "Amana Pandey" // copy me change homjayega but orignal value ni hoga
console.log(myName);
console.log(anotherName);


// Heap->(Non-Primitive)
let userOne = {
    email:"example@mail.com",
    upi: "any@upi"
}

let userTwo = userOne  // yha pr copy ni mil rhi h same refrance mil rha h

console.log(userOne.email)
console.log(userTwo.email)

userTwo.email = "alok@gmail.com"  // yha pr dono se ek hi value aayegi kuki same refrance h meory me

console.log(userOne.email)
console.log(userTwo.email)
