/*
 Constantes prédéfinies
*/

// -- NaN --
// Not a Number

console.log(3 / '3') // output : 1
console.log(3 / 'a') // output : NaN

console.log(Math.sqrt(9)) // output : 3
console.log(Math.sqrt(-4)) // output : NaN

console.log(NaN == NaN)   // output : false
console.log(isNaN(NaN))   // output : true
console.log(isNaN('a'))   // output : true
console.log(isNaN(1))     // output : false
console.log(isNaN('1'))   // output : false


// -- Infinity --
console.log(Infinity * Infinity) // output : Infinity
console.log(500 / Infinity) // output : 0
console.log(500 / 0) // output : Infinity
console.log(Infinity / Infinity) // output : NaN

// -- Undefined ---
let a
console.log(a)
console.log(a == undefined)

a = 4
console.log(a == undefined)

// -- Math --

console.log(Math.abs(-5)) // ouput : 5
console.log(Math.ceil(5.356)) // ouput : 5
console.log(Math.floor(5.356)) // ouput : 5
console.log(Math.round(5.356)) // ouput : 5
console.log(Math.random()) // ouput : 0 ... 1


// -- Number --
let b = "10"
console.log(b);
console.log(parseInt(b));
console.log(parseInt(b, 10));

/*
 Constantes
*/

const LENGTH = 5
const URL_API = `https://www.monapi.com`

console.log(LENGTH);
console.log(URL_API);

// Pas possible
// LENGTH = 4
// URL_API = `https://www.monapi.be`

console.log(LENGTH);
console.log(URL_API);

console.clear()
/*
  Variables
*/

// Déclarer une variable
// let 
// var

// -- var --
console.warn("VAR");

var maVariable = 5

console.log(maVariable) // output : 5

if (true) {
  var maVariable = 6
  console.log(maVariable);
}

console.log(maVariable);


// -- let --
console.warn("LET");

let maVariable2 = 5

console.log(maVariable2) // output : 5

if (true) {
  // console.log(maVariable2); // output : 6
  let maVariable2 = 6
  console.log(maVariable2); // output : 6
}

console.log(maVariable2); // output : 5

// -- const --
console.warn("const");

const maVariable3 = 5

console.log(maVariable3) // output : 5

if (true) {
  // console.log(maVariable3); // output : 6
  const maVariable3 = 6
  console.log(maVariable3); // output : 6
}

console.log(maVariable3); // output : 5

console.clear();

// Tableau 
const array = [1, 2, 3]
console.table(array)
console.log(array.length);

// Tableau associatif

const planetes = []

planetes["p1"] = "Mercure"
planetes["p2"] = "Vénus"
planetes["p3"] = "Terre"

console.table(planetes);
console.table("Taille du tableau : ", planetes.length);

console.log(Object.keys(planetes).length);


console.clear();
