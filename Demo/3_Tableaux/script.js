/*
  Tableaux - Méthodes
*/
const myAr = []

console.log(myAr);

// Ajouter un élément à la fin du tableau
myAr.push(5)
let newLength = myAr.push(5, 9, 4, 2, 1, 3, 9)

myAr.push("Toto")

console.log(myAr);

// Ajouter un élément au début du tableau
myAr.unshift("Début")

console.log(myAr);

// Retirer un élément à la fin du tableau
const removedItem = myAr.pop()

console.log(removedItem, myAr);

// Retirer un élément au début du tableau
const removedItem2 = myAr.shift()
console.log(removedItem2, myAr);

// Supprimer des éléments dans le tableau
console.clear();
console.table(myAr);
// myAr.splice(2, 3)
// console.table(myAr);

// Ajouter des éléments en supprimant certains dans le tableau
myAr.splice(2, 3, 3, 3, 3)
console.table(myAr);

// Insérer des éléments dans le tableau
myAr.splice(2, 0, 4, 5, 6)
console.table(myAr);

// Convertir un tableau en chaine de caractères avec un séparateur personnalisé

console.log(myAr.join());
console.log(myAr.join(" ~ "));


// Trier un tableau de manière ALPHABÉTIQUE
myAr.push(110)
myAr.sort()
console.log(myAr);

// Trier un tableau de manière CROISSANTE
// myAr.sort(function (a, b) {return a - b})
myAr.sort((a, b) => a - b)
console.log(myAr);

const strings = ['hello', 'world', 'quentin', 'javascript', 5, 7, 1, 3, 0]

console.log(strings);
strings.sort((a, b) => a - b)
console.log(strings);

// Renverser un tableau
strings.reverse()

console.log(strings);

// Fusioner plusieurs tableaux
const myNewArray = myAr.concat(strings)

console.log(myNewArray);
console.log(myAr);
console.log(strings);

// Récupérer une partie d'un tableau

const MNA_copy = myNewArray.slice()
console.log(MNA_copy);

const MNA2 = myNewArray.slice(2, 4)
console.log(MNA2);