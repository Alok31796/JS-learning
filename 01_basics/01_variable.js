const accountId = 144553
let accountEmail = "alok31796@gmail.com"
var accountPasword = "12345"
accountCity = "Lucknow"
let accountState;

//accountId = 2 // not allowed

accountEmail = "ap@gmail.com"
accountPasword = "2564154"
accountCity = "Dehli"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPasword,accountCity,accountState]);
