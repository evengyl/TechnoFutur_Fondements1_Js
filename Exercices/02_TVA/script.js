// Calcul de la TVA
// Écrire un programme qui :
// 1. Demande à l’utilisateur un prix unitaire hors taxe d’un livre
// 2. Demande à l’utilisateur la quantité de livre
// 3. Calcule et affiche le prix total TTC de la commande, en utilisant une TVA de 21%
// Pour interagir avec l’utilisateur, vous utiliserez les fonctions d’entrée/sortie prompt() et alert().

let bookPrice = prompt("Entrez le prix du livre :")
let bookQuantity = prompt("Entrez la quantité de livre :")

const TVA = .21

console.log(`le total de ${bookQuantity} livres à ${bookPrice}€ est de ${bookPrice * bookQuantity * (1 + TVA)}€`);
