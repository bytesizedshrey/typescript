const chai = {
    name : 'masala chai',
    price : 20,
    isHot : true
}

let tea : {
    name : string,
    price : number,
    isHot: boolean
}

tea = {
    name : 'msala',
    price : 69,
    isHot : true
}

type Tea = {
    name : string,
    price : number,
    ingredients : string[]
}

const adrakChai: Tea = {
    name : 'Adrak Chai',
    price : 25,
    ingredients : ['ginger','tea leaves']
}

type Cup = {size : string}
let smallCup : Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"}

smallCup = bigCup


const updateChai = (updates : Partial<Cup> => {
    console.log('updating chai with : ', updates)
})

updateChai({smallCup: 25})