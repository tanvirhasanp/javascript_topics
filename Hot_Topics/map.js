 //array map 

 const arrayMethod = [
    {
        name: 'Md.Tanvir Hasan',
        age: 25,
        faculty: 'CSE',
        university: 'PSTU'
    },
    {
        name: 'Md. Mahmudul Hasan',
        age: 24,
        faculty: 'FBA',
        university: 'PSTU'
    },
    {
        name: 'Md. Shakib Al Hasan',
        age: 26,
        faculty: 'LLA',
        university: 'PSTU'
    },
    {
        name: 'Md. Rakibul Hasan',
        age: 23,
        faculty: 'NFS',
        university: 'PSTU'
    }
 ]
 /* QUESTIONS: 
  1. print only names from all objects
  2. print all objects 
  3. print only names and university from all objects
  4. print only first part of names from all objects 
 */

  // 01
const allNames = arrayMethod.map ( (el) => {
    return el.name;
})
// console.log(allNames);

//02
const allObjects = arrayMethod.map ( (el) => {
    return el
})
// console.log(allObjects)

//03
 const nameUni = arrayMethod.map( (el) => {
    return {
        name: el.name,
        university: el.university
    }
 })

//   console.log(nameUni) 

//04
const firstpartNames = arrayMethod.map ( (el) => {
    return el.name.split(' ')[0]
})
console.log(firstpartNames)

