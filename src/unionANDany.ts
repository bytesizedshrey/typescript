let subs : number | string = '1M'

let apiRequestStatus : 'pending' | 'sucess' | 'error' = 'pending'

apiRequestStatus = 'charles' //wrong
apiRequestStatus = 'sucess'

let indigo : 'aisle' | 'window' | 'middle' = 'aisle'

indigo = 'aisle'

const orders = ['21,431,313,4312']

let currentOrder: string | undefined;

for(let order of orders){
    if(order === '21'){
       currentOrder = order
       break 
    }
    currentOrder = '1'
}

console.log(currentOrder)