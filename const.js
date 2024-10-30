const { log } = require("util")

{
    const a = 10
    console.log(a)
}

// console.log(a) // const is a block scope so can't access

const a = 10 
// const a = 20 
// a = 20 we can't reassign to a const variable also redeclare
console.log(a)

// const b  in a const variable must be initialized in when it's defined
// b = 10

const b = 10



const cars = ["Saab", "Volvo", "BMW"];
// cars = [1,2,4] we can reasign a array
cars[1] = 2 // but can change the value


cars.push(1) //
console.log(cars)


// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

car.type = 'green'
console.log(car)