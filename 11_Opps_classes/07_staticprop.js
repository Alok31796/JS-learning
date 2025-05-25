class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){  // ye or logo ko access krne se rok deta h
        return `123`
    }
}

const alok = new User("Alok")
// console.log(alok.createId()); // to yha pr access ni kr skte dictly

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")

iphone.logMe()
// console.log(iphone.createId()); // inherit krke bhi access ni kr skte




