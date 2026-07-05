interface coffee {
    flavour : string
    price : number
}

const powder : coffee = {
    flavour : "nanhe",
    price : 123
}

interface team {
    name : string,
    drivers_number : number
}

const ferrari : team = {
    name : 'charles leclerc',
    drivers_number : 16
} 

interface teaMachine{
    start() : void,
    stop()  : void
}

const machine : teaMachine = {
    start(){
        console.log('start')
    }, 
    stop(){
        console.log('stop')
    }
}

interface charRating{
    [flavor : string] : number
}

const rating : charRating = {
    cool : 43,
    roar : 32
}