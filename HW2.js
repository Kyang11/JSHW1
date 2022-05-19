//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function food(thing) {
    if (typeof thing==='string'){
        console.log(thing)
    
    }else if(Array.isArray(thing)){
        for(let i of thing){
            food(i)
        }
    }else{
        for(let key in thing){
            food(thing[key])
        }
    }
}

food(person3)
// or 
// console.log(person3.pizza)
// console.log(person3.tacos)
// console.log(person3.burgers)
// console.log(person3.ice_cream)
// console.log(person3.shakes[0].oberwise)
// console.log(person3.shakes[0].dunkin)
// console.log(person3.shakes[0].culvers)
// console.log(person3.shakes[0].mcDonalds)
// console.log(person3.shakes[0].cupids_candies)



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
 function Person(name, age){
     this.name = name;
     this.age = age;
     // method prototype
    this.printInfo = function(){
        console.log(`Name: ${this.name} \nAge: ${this.age}`)
    }
 }
let man = new Person("Nathan", 25);

console.table(man);

console.log(man.name="Cashton")
console.log(man)

man.age=30
console.log(man)


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let c = new Promise((resolve, reject) =>{
    let word_string = "This is the test for promising"
    if (word_string.length > 10){
        resolve("Big Word")
    }else{
        reject("Small Number")
    }
})

c.then((message) =>{
    console.log("This is a "+message)
}).catch((message) =>{
    console.log("This is a "+message)
})


