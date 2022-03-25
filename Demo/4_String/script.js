/*
  String
*/

const c = "Javascript"

console.log(c);

// Récupérer un caractère à une position donnée
console.log(c.charAt(4));

// Concaténer deux chaines de caractères
console.log(c.concat(" youpie !"))

// Récupérer la position par rapport à un ou une chaine caractères

console.log(c.indexOf("script")) // 4
console.log(c.indexOf("a")) // 1
console.log(c.indexOf("z")) // -1
console.log(c.indexOf("a", 2)) // 3

// Permet de remplacer un ou plusieurs caractères par un autre
console.log(c.replace("a", "o"))
console.log(c.replaceAll("a", "o"))

// Permet de récupérer une partie d'une chaine de caractères

console.log(c.slice())
console.log(c.slice(4, 6))

// Découper une chaine de caractères sur base d'un délimiteur
const result = "geerts,quentin,03/04/1996"
const quentin = result.split(",")
console.table(quentin)
console.table(c.split(''))

// Mettre en MAJ / MIN
console.log(c.toUpperCase())
console.log(c.toLowerCase())
