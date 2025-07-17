// create a static keyword in class

class Cars{
    name = 'BMW'
    model= '4kz10'
    year = 2020

   static fullSpecific(){
        return `This car name is ${this.name} and model is${this.model}`
    }
}

const final = new Cars()
console.log(final.name) // access properties from class by creating object
// console.log(Cars.fullSpecific()) // access properties from class by using static keyword