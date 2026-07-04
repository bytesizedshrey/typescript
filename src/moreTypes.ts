let response: any = '42'

let numericLength: number = (response as string).length

 type Book = {
    name : string
 }

 let bookString = `{"name" : "how to drive a ferrari"}`
 let bookObject = JSON.parse(bookString) as Book

 console.log(bookObject.name)


 try {
    
 } catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("error", error)
 }

 const data : unknown = 'f1'
 const strdata : string = data as string


 type Role = 'admin' | 'user' | 'superadmin '

 function redirectBasedOnRole(role : Role) : void {
    if(role === 'admin'){
        console.log('Redirect to admin dashboard')
        return
    }
    if(role === 'user'){
        console.log('redirect to user dashboard')
        return
    }
    role //never
 }