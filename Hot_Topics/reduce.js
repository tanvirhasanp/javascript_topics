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

// Get the total mass of all characters
const totalMass = characters.reduce ( (acc,el) => {
    return acc + parseInt(el.mass)
}, 0)
console.log(totalMass)
// Get the total height of all characters
const totalHeight = characters.reduce( (acc, el) => {
    return acc+ parseInt(el.height)
},0)
console.log(totalHeight)

// Get the total number of characters in all the character names
const totalChar = characters.reduce( (acc,el) => {
    return acc + el.name.length
},0)
console.log(totalChar)
// Get the total number of characters by eye color (hint. a map of eye color to count)
const totalEyeColor = characters.reduce( (acc,el) => {
    return acc + el.eye_color.length
},0)
console.log(totalEyeColor)
