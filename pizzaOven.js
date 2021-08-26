function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
function randomPizza(crustType,sauceType, cheese, toppings) {
    crustType = ["deep dish", "hand tossed"];
    sauceType = ["marinara", "traditional"]
    cheese = ["mozzarella", "feta", "cheddar"]
    toppings = ["pepperoni", "sausage", "olives", "onions", "mushrooms"]
    {
        randomPizza1 = "is " + crustType[Math.floor(Math.random()*crustType.length)] + " with " + sauceType[Math.floor(Math.random()*crustType.length)] + " sauce, " + cheese[Math.floor(Math.random()*cheese.length)] + " cheese and " + toppings[Math.floor(Math.random()*toppings.length)] + " as a topping.";
        return "The Pizza " + randomPizza1;
    }
}
var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(pizza1);
console.log(pizza2);
var randomPizza1 = randomPizza()
console.log(randomPizza1);