console.log("10_Dates");

// JS Date Object represent a single moment in time from January 1, 1970, UTC(the epoch)
// date ms me hoti h 
// TC39

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23) // (yrar month date)  month 0 se start hote h
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // (yrar month date)
// let myCreatedDate = new Date("2023-01-14") // (yrar month date) 00 me 01 se jan hota h start
// let myCreatedDate = new Date("01-14-2025") // (yrar month date) 00 me 01 se jan hota h start
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


// let myTimeStamp = Date.now()

// console.log(myTimeStamp); 
// console.log(myCreatedDate.getTime()); // ye time niakne ke liye
// console.log(Date.now());// ms me kaise kre
// console.log(Date.now()/1000); // but desimal me aa gya
// console.log(Math.floor(Date.now()/1000)); // MS me aa gyi





let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))