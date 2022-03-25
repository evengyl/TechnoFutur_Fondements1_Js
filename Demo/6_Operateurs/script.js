/*
  Opérateurs
*/

let score = 0

// score = score + 12
score += 12
score -= 12
score *= 12
score /= 12
score %= 12

// Opérateurs de comparaison
console.log(12 == 12) // true
console.log(12 == '12') // true

// == : Vérifier la valeur
// === : Vérifier la valeur OU le type
console.log(12 === 12) // true
console.log(12 === '12') // false 

console.log(12 != 13) // true
console.log(12 != '13') // true 
console.log(13 != 13) // false
console.log(13 != '13') // false
console.log(13 !== '13') // true
console.log(12 !== '13') // true

console.log(false ? "Est vrai" : "est faux")

console.log(typeof true);



let i = 0

console.log(++i); // 1
console.log("après : i", i);
console.log(i++); // 1
console.log("après : i", i);
console.log(--i); // 1
console.log("après : i", i);
console.log(i--); // 1
console.log("après : i", i);