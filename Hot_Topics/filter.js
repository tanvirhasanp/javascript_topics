//filter

const filterArray = [1,2,3,4,5,6,7,8,9,10]

const evenNumbers = filterArray.filter( (el) => {
    return el % 2 === 1;
})
// console.log(evenNumbers) 

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// Get characters with mass greater than 100
// Get characters with height less than 200
// Get all male characters
// Get all female characters

//01

const massFilter = characters.filter( (el) => {
    return el.mass > 100;
})
console.log(massFilter)