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

// Sort by name
// a - b dile small to high / b-a dile high to small
const nameSort = characters.sort((a, b) => {
    return a.name.localeCompare(b.name);
});
// console.log(nameSort)

// Sort by mass
const massSort = characters.sort( (a,b) => {
    return b.mass - a.mass
})
// console.log(massSort)

// Sort by height
const heightSort = characters.sort( (a, b) => {
    return a.height - b.height
})
// console.log(heightSort)
// Sort by gender

const genderSort = characters.sort ( (a, b) => {
    return a.gender.localeCompare(b.gender)
})
// console.log(genderSort)