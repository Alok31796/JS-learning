console.log("08_strings");


// // "ALok" or 'pandey' same

// const name = "Alok";
// const repoCount = 50;

// console.log(name + repoCount + " Value");

// // use `` backtitck it's called string menupulation
// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);


// console.log("===== Without New Keyword =====");
// const myName = "Alok Pandey" // behaind ke screen ye bhi hota to string object hi h
// console.log(myName);
// console.log(typeof myName);
// console.log(myName[0]);
// console.log(myName.__proto__);
// console.log(myName.length);
// console.log(myName.toUpperCase());

// console.log("===== With New Keyword =====");
// const gameName = new String('Alok-pand')  // esme toda advance aata h string object ke roop me pr hota string hi h browser me console me dekh lena us ko chla ke
// console.log(gameName);
// console.log(typeof gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('p'));
// console.log(gameName.indexOf('o'));


// const newString = gameName.substring(0, 4) // esme negative value ni de skte h gameName.substring(-8, 4) -8 ko egnore krke 0 se start krega
// console.log(newString);

// const anotherString = gameName.slice(0, 4)
// console.log(anotherString);

// const anotherString2 = gameName.slice(-8, 4)
// console.log(anotherString2);


// const newStringOne = "   Alok   "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // extra space remove kr deta h ye form me kaam aata h jadatr

const url = "https://alok.com/alok%20pandey"

const newGame = new String('alok-ap-com')

console.log(url.replace("%20", '-'));
console.log(url.includes("alok"));
console.log(url.includes("aman"));

// ab mujhe array bnana h newGame wali string ka

console.log(newGame.split("-"));



