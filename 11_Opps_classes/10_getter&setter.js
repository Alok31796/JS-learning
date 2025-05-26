console.log("=============== Geeter and Setter ===============");
// TODO: kayi baar ahe finegain control chiye hota h kisi ko passwrod ni dena chata hu to use krte h geeter and setter
// FIXME:


// class User {
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }
// }

// const alok = new User("Alok", "123")
// console.log(alok.password);





// class User {
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }

//     get password(){  // ye krne ke baad access ni ho payega agr chaiye to setter bhi krna pdega or property ke naam pr hi getter setter method bnte h  // esme koi value hi ni daal paoge sirf setter se dalegi
//         return this.password.toUpperCase()
//     }
// }

// const alok = new User("Alok", "123")
// console.log(alok.password);




// class User {
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }

//     get password(){  // ye krne ke baad access ni ho payega agr chaiye to setter bhi krna pdega or property ke naam pr hi getter setter method bnte h  // esme koi value hi ni daal paoge sirf setter se dalegi
//         return this.password.toUpperCase()
//     }

//     set password(value){
//         this.password = value   // ye error ayegi :- RangeError: Maximum call stack size exceeded
//     } // kaise set kre kyuki constructor bhi yha value set krne ki kosis kr rha h or hm setter se bgi kra rhe h
// }

// const alok = new User("Alok", "123")
// console.log(alok.password);










// class User {
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }

//     get password(){  
//         return this._password.toUpperCase() // to hm _ lga denge mtlb alg hi varible h ye
//     }

//     set password(value){
//         this._password = value.toUpperCase()   // to hm _ lga denge mtlb alg hi varible h ye
//     } 
// }

// const alok = new User("Alok", "abc")
// console.log(alok.password);





// class User {
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }

//     get email(){
//         return this._email.toUpperCase()  // ye almost private property hi bn gyi h
//     }

//     set email(value){
//         return this._email = value  // ye almost private property hi bn gyi h
//     }

//     get password(){  
//         return `${this._password}alok` // pr bhej ye rhe h
//     }

//     set password(value){
//         this._password = value   // db me to ye set kr rhe h 
//     } 
// }

// const alok = new User("Alok@gmail.com", "abc")
// console.log(alok.email);
// console.log(alok.password);




// Old wayes like properties se get or set kaise define hote the



// function User(email, password){
//     this._email = email;
//     this._password = password;

//     Object.defineProperty(this, "email", {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
    
//     Object.defineProperty(this, "password", {
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     })

// }


// const chai = new User("alok@gmail.com", "chai")
// console.log(chai.email);
// console.log(chai.password);


// more old object base

const User ={
    _email: "alok@gmail.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    
    set email(value){
        this._email = value
    }

}


const tea = Object.create(User)
console.log(tea.email);   // length


// smjh lena video 48 me





