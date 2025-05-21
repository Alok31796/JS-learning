console.log("============= Array =============");

// const myArray = [0, 1, 2, 3, 4, 5, true, "alok"]

const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[1]);
// console.log(myArr.length); // length and prototype dono hoti h array me

// const mrHeors = ["shaktiman", "naagraj"];

// const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2[1]);

// Array Method

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  // start me add krta h pr or sari value age sift ho jati h 
// myArr.shift() // start se remove krta h

// console.log(myArr.includes(9)); // true ya false deta h
// console.log(myArr.indexOf(9)); // jb ni aati h tp -1 aata h
// console.log(myArr.indexOf(3)); // index batata h

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(newArr);

// slice, splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // orignal array me koi change ni hota h

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // orignal array me change ho jata h
console.log(myn2);
console.log("C ", myArr);


