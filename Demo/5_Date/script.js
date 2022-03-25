// Récupérer la date local d'aujourd'hui
const today = new Date()
console.log(today);

// Création de dates

// Constructeur vide
// => Date actuelle
const d1 = new Date()

// avec format string
// const d2 = new Date('24/03/2022')
const d2 = new Date('2022/03/24 15:30:27')
console.log(d2);

// avec timestamp en millisecondes
const d3 = new Date(1616595140000)
console.log(d3);

// Partie de date
const d4 = new Date(2022, 03)
console.log(d4)

const d5 = new Date(2022, 03, 15)
console.log(d5)

const d6 = new Date(2022, 03, 15, 7)
console.log(d6)

const d7 = new Date(2022, 03, 15, 7, 27)
console.log(d7)

// ...

console.clear();

// Accesseurs - Getters - Récupérer une valeur

console.log(today);

console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());

console.log(today.getTime());

console.log();


// Mutateurs - Setters - Modifier une valeur
console.log(today.setFullYear(1996));
console.log(today.setMonth(3));
console.log(today.setDate(3));

console.log(today.setHours(23));
console.log(today.setMinutes(9));
console.log(today.setSeconds(32));
console.log(today.setMilliseconds(222));
// sconsole.log(today.setTime());

console.log(today);