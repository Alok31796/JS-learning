console.log("09_Nums_Math");


// const score = 400;
// console.log(score);

// const balance = new Number(100)
// console.log(balance);
// console.log(balance.length); // abhi ni use kr skte
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));
// console.log(balance.toFixed(2));


// const otherNum1 = 23.8966
// console.log(otherNum1.toPrecision(3));
// const otherNum2 = 123.8966
// console.log(otherNum2.toPrecision(3));
// const otherNum3 = 1123.8966
// console.log(otherNum3.toPrecision(3));
// console.log(typeof otherNum3.toPrecision(3));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // us standered ke hisab se aata h
// console.log(hundreds.toLocaleString('en-IN')); // indian or bhi country ki hoti h mdn pr dwkho

// "Number" ko console me dal ke . lga kr dekho or cheick kro max min me kitni bdi value daal skte ho


// ==================== Math ======================== //

// console.log(Math); //yha kuch ni dekhne ko mil rha h broswer me dekho
// console.log(Math.abs(-4)); // esse -value + ho jati h -4 -> +4 pr ulta ni hota h
// console.log(Math.round(4.3)); 
// console.log(Math.round(4.6)); 
// console.log(Math.ceil(4.2)); 
// console.log(Math.floor(4.2)); 
// console.log(Math.floor(4.9)); 
// console.log(Math.min(4,3,6,8)); 
// console.log(Math.max(4,3,6,8)); 
console.log(Math.random()); // 0 se 1 ke beech me aati h
console.log(Math.random()*10); // ek 0 se sift ho jati h 
console.log(Math.random()*10 + 1); // 1 se value bad jati h pr niche wale se kro bracet me kr ke
console.log((Math.random()*10) + 1); // esse shi aayega
console.log(Math.floor(Math.random()*10) + 1); // jab chate h value choti aye or 1 hi aaye

const min = 10;
const max = 20;
//  eske bech me chaiye value

// Math.random() * (max - min + 1) + min
// Math.floor(Math.random() * (max - min + 1)) + min

console.log(Math.floor(Math.random() * (max - min + 1)) + min);









