function getP1(kind: string | number){
    if(typeof kind === 'string'){
        return `Getting ${kind}`
    } return `Position order : ${kind}`
}

function serverMax(msg?: string){
    if(msg){
        return `Serving ${msg}`
    } return `Serving redbull`
}

function orderRedBull(size : 'medium' | 'small' | 'large' | number){
    if(size === `small`){
        return 'small redbull'
    }
    if(size === 'medium' || size === 'large'){
        return 'make extra redbull'
    }
    return `bull order : ${size}`
}

class Redbull{
    serve(){
        return `Serving RedBull`
    }
}

class Monster{
    serve(){
        return `Serving Monster`
    }
}

function serveDrink(drinks: Redbull | Monster){
    if(Monster instanceof serveDrink){
        return drinks.serve()
    }
}

type drinkOrder = {
    type : string,
    sugar : number
}

function isDrinkOrder(obj:any):obj is drinkOrder{
    return(
        typeof obj === 'object' &&
        obj !== null && 
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    )
}

function serveOrder(item:drinkOrder | string){
    if(isDrinkOrder(item)){
        return `serving ${item.type} with ${item.sugar} sugar`
    }
    return `serving : ${item}`
}

type red = {car : "ferrari"; rank : number}
type black = {car : "mercedes"; rank : number}
type orange = {car : "mcalren"; rank : number}

type team = red | black | orange

function who_won(rank : team){
    switch(rank.car){
        case "ferrari" :
            return `ferrari won`
            break
        case "mercedes" :
            return `mercedes won`
            break
        case "mcalren" : 
            return "mclaren won"
            break
    }
}