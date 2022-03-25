// Les bases

function addition(a, b)
{
    console.log(a + b);
}

addition(90, 10)
console.clear()


let testAddition = (c = 5, d = 15) => {
    console.log(c + d)
}

testAddition()
testAddition(40, 50)
console.clear()




let testAddition2 = function(e, f){
    console.log(e + f)
}
testAddition2(60, 20)
console.clear()


//les return
function addition(a, b)
{
    return a + b
}
let res = addition(100, 200)

res = addition(res, res)

console.log(res)

//version longue
function calculate(a, b, operator)
{
    if(operator == "x" || operator == "*")
    {
        return a * b
    }
    else if(operator == "-")
    {
        return a - b
    }
    else if(operator == "+")
    {
        return a + b
    }
    else if(operator == "/" && b > 0)
    {
        return a / b
    }
    else
    {
        return "Opérateur non connu ou division par 0"
    }
}

//version plus courte
function calculate(a, b, operator)
{
    if(operator == "x" || operator == "*") return a * b
    else if(operator == "-") return a - b
    else if(operator == "+") return a + b
    else if(operator == "/" && b > 0) return a / b
    return "Opérateur non connu ou division par 0"
}

console.log(calculate(5, 5, "*"))
console.clear()



//référence

let arrayName = ["Maxime", "Christophe", "Boris"]

let personnes = 
    {
      lastName: 'Romano',
      firstName: 'Benjamin',
    }

function test1(arrayStr, user)
{
    /*array part */
    console.log(arrayStr)
    let newArrayStr = arrayStr /* ne crée pas une copie !!!! */
    let newArrayStr2 = [...arrayStr] /*crée un réelle copie parfaite ! du tableau*/

    newArrayStr2.push("Benjamin")
    newArrayStr2.push("Tony")
    newArrayStr2.push("Gaétan")
    /* end of*/


    /* object part */
    let tmpUser = user.lastName = "Turlututu"
    let tmpUser2 = {...user}
    tmpUser2.lastName = "Choupouipui"
    /* endof */
}


test1(arrayName, personnes)

console.log(arrayName)
console.log(personnes)

