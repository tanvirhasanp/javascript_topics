// constructor e first letter always capital hoi , eta general rules.
// constructor mainly ekta object er blueprint 

const Person = function(fname,lname,age){ 
    this.firstName = fname,
    this.lastName = lname,
    this.age = age
    this.fullName = function(){  // this is a method.
       return this.firstName + ' ' + this.lastName
    }
}
const Tanvir = new Person('Tanvir','Hasan',25)
Tanvir.country = 'Bangladesh'
console.log(Tanvir)
console.log(Tanvir.fullName())