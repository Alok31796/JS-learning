class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USER NAME is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)  // yha pr vo call.(this, username) nahi likhna pdega
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was addes by ${this.username}`);
    }
}


const chai = new Teacher("alok", "alok@gmail.com", "123")

chai.addCourse()

const masalaChai = new User("Alok pandey")

// masalaChai.addCourse()
masalaChai.logMe()
chai.logMe()

console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
