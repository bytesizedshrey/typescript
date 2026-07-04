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

class redbull{
    serve(){
        return `Serving RedBull`
    }
}

class Monster{
    serve(){
        return `Serving Monster`
    }
}