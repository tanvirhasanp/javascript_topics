//Create object by object literal

const person = {
    fname: 'Md. Tanvir',
    lname: 'Hasan',
    age: 24,
    fullName: () =>{
        return `My full name is ${person.fname} ${person.lname}` 
    }
}
console.log(person)
console.log(person.fullName())