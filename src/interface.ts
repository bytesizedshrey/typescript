type coffeeOrder = {
    type : string;
    sugar : number;
    strong : boolean;
}

function makeCoffee(order: coffeeOrder){
    console.log(order)
}

function serveCoffee(order : coffeeOrder){
    console.log(order)
}

type coffeeRecipe = {
    water : number,
    milk : number
}

class blackCoffee implements coffeeRecipe{
    water = 100;
    milk = 34;
}

interface CupSize {
  size : 'small' | 'large'='large'
}
