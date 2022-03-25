let fruit = 'cerise'

switch (fruit) {
  case 'poire':
    console.log("Le prix est de : 12.5€ /kg")
    break

  case 'pomme':
    console.log("Le prix est de : 10.5€ /kg")
    break

  case 'ananas':
    console.log("Le prix est de : 22.5€ /kg")
    break
  
  case 'litchi':
  case 'cerise':
    console.log("Le prix est de : 5.99€ / kg")
    break

  default:
    console.log("Fruit non reconnu")
}

switch (8) {
  case 1:
  case 2:
  case 3:
    console.log("La valeur est de 1 à 3.")
    break
  case 4:
  case 5:
  case 6:
    console.log("La valeur est de 4 à 6.")
    break
  case 7:
  case 8:
  case 9:
    console.log("La valeur est de 7 à 9.")
    break
}

/*
  Structures Itératives
*/

const personnes = [
  {
    lastname: 'Geerts',
    firstname: 'Quentin',
  },
  {
    lastname: 'Tongiani',
    firstname: 'Gaétan',
  },
  {
    lastname: 'Romano',
    firstname: 'Benjamin',
  },
]

console.table(personnes)

// FOR
for (let index = 0; index < 10; index++) {
  console.log(index)  
}

// Foreach - For of
for(personne of personnes) {
  console.log(personne.firstname + ' ' + personne.lastname)
}

// Foreach - For in
for(index in personnes) {
  console.log(personnes[index].firstname + ' ' + personnes[index].lastname)
}

personnes.forEach((tutu) => {
  console.log(tutu.firstname + " " + tutu.lastname)
})


console.clear()

// Continue + break

console.warn("Break")
let i = 0
while (i < 10) {

  if (i == 4) break

  console.log(i)

  i ++
}

console.warn("Continue")
i = 0
while (i < 10) {
  if (i == 4) {
    i ++
    continue
  }
  console.log(i)
  i ++
}


// Compléments d'explications Loïc le Maître ! <3

console.warn("Part Loïc")

function fctCallForEachElement(currentObjectEach, currentKeyObject, allData) {
  console.log(currentObjectEach, currentKeyObject, allData)
}

personnes.forEach(fctCallForEachElement)