// Chaîne : « ma formation javascript »
// ● Avec la chaîne ci-dessus :
// ○ Retourner la position de « ma »
// ○ Indiquer l’indice de la lettre « p »
// ○ Retrouver la lettre située à l’indice 21
// ○ Remplacer « javascript » par « Java »
// ○ Découper la chaîne avec le délimiteur «  » (espace)
// ○ Inverser la chaîne de caractères (+ difficile) :
// « ma formation javascript » → « tpircsavaj noitamrof am »

let chaine = "ma formation javascript"

// ○ Retourner la position de « ma »
console.log(chaine.indexOf("ma"));
console.log(chaine.search("ma"));

// ○ Indiquer l’indice de la lettre « p »
console.log(chaine.indexOf("p"));
console.log(chaine.search("p"));


// ○ Retrouver la lettre située à l’indice 21
console.log(chaine.charAt(21));

// ○ Remplacer « javascript » par « Java »
console.log(chaine.replace('javascript', 'Java'));

// ○ Découper la chaîne avec le délimiteur «  » (espace)
console.table(chaine.split(" "));

// ○ Inverser la chaîne de caractères (+ difficile) :
// « ma formation javascript » → « tpircsavaj noitamrof am »

// 3 étapes :
//    - Transformer la chaine de caractères en tableau
//    - Inverser le tableau
//    - Transformer le tableau en chaine de caractères

console.log(
  chaine.split("")
        .reverse()
        .join("")
);

// OU

const stringToArray = chaine.split("")

const reversedStringToArray = stringToArray.reverse()

const reversedString = reversedStringToArray.join("")

console.log(reversedString);


