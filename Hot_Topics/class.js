//create a class and get an object from this class

 class person{
    first_name = 'Md.Tanvir'
    last_name = 'Hasan'
    age = 24
    fullName(){
        return `My name is ${this.first_name} ${this.last_name}`
    }

}
const Tanvir = new person()
console.log(Tanvir)
console.log(Tanvir.fullName())