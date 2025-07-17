// create a constructor object

// class person {
//     constructor(){
//         console.log(`This is Md.Tanvir Hasan`)
//     }

// }
// const tanvir = new person()


// class Summation{
//     constructor(a,b){
//         const sum= a+b
//         console.log(sum)
//     }
// }
// const result= new Summation(10,40)


class calculation{
    number1 = 20
    number2 = 30

    constructor(a,b){
        this.number1 = a
        this.number2 = b 
    }

    getSum(){
        return this.number1 + this.number2
    }
}
 const result = new calculation(500,400)
 console.log(result.getSum())