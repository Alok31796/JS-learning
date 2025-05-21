console.log("========================= Array2 =========================");

const marvel_heros = ["thor", "Ironman", "spriderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros) // existing array me push krta h

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// const allHeros = marvel_heros.concat(dc_heros) // pr ye new array return krta h
// console.log(marvel_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]; //spread krke araay me add kr deta h
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("ALok")); // array h ya ni
console.log(Array.from("ALok")); // array me convert kr deta h
console.log(Array.from({ name: "alok" })); // agr ni bna payega to empty array deta h

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
