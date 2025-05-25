console.log("============== CALL ==============");
//  video me dekh lena 44 wala

function SetUserName(username){
    // complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    // SetUserName(username)
    // SetUserName.call(username)
    SetUserName.call(this, username) // this optionaly hota h // ye exicution context ko kisi or ko deta h or udne ni deta h

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai); // sirf email and password hi ho rha h username ni ho rha h
