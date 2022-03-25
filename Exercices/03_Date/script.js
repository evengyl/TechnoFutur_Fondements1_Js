/*Utilisez l’objet Date et des structures conditionnelles, écrivez un programme qui 
affiche le jour de la semaine.
Exemple : « Bonjour, nous sommes lundi! »*/


let date = new Date().getDay()


console.log(date)

switch(date)
{
    case 0 : 
        console.log("Bonjour, nous sommes dimanche")

    case 1 : 
        console.log("Bonjour, nous sommes lundi")

    case 2 : 
        console.log("Bonjour, nous sommes mardi")

    case 3 : 
        console.log("Bonjour, nous sommes mercredi")
    
    case 4 : 
        console.log("Bonjour, nous sommes jeudi")
    
    case 5 : 
        console.log("Bonjour, nous sommes vendredi")
    
    case 6 : 
        console.log("Bonjour, nous sommes samede")
}

//permet de récupérer en toute lettre le jours actuel !
//console.log(new Intl.DateTimeFormat('fr', { weekday: 'long'}).format(new Date()));



console.clear()
/*
Réalisez un programme qui permet d’afficher, dans la console, la structure 
suivante à l’aide d’une boucle :
*/

let lettre = 'A'
let b = lettre

for(let i = 0; i < 10; i++)
{
    console.log(b)
    b += lettre
}

for(let i = 0; i < 10; i++)
{
    console.log(b)
    b = b.slice(1)
}

console.clear()
