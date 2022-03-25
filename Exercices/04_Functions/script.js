/*
Créez une fonction « inverser(chaine) » qui effectuera une inversion des 
caractères d’une chaîne et affichera le résultat en console et en alerte.
Pour rappel : Inverser les caractères se fait en 3 étapes !
*/

let str = "Bonjour à tous"

function inverser(chaine)
{
    return chaine.split("").reverse().join("")
}


str = inverser(str)
console.log(str)
//alert(str)


/* partie 2 */
                // (7, 6, 5, 4, 3, 2)
function maFonction(a, b, c, d, e, f)
{
    let res
    res = a + b //13
    res = res * d //52
    e = f // e = 2
    res = res - e // 50
    return res
}

let a = 2, b = 3, c = 4, d = 5, e = 6, f = 7

let g = maFonction(f, e, d, c, b, a)
console.log(g)