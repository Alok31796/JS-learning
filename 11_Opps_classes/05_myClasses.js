console.log("============= Class =============");
// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const chai = new User("alok", "alok@gmail.com", "123")

// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


// behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("alok", "alok@gmail.com", "123")

console.log(tea);
console.log(tea.encryptPassword());
console.log(tea.changeUsername());