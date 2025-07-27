// async function funcOne() {
//     const urlApi = await fetch('https://jsonplaceholder.typicode.com/users');
//     const rawData = await urlApi.json();

//     // Use map to extract all names
//     const userNames = rawData.map((user)=>{
//         return user.name 
//     });

//     // Use forEach to print each name
//     userNames.forEach((naame)=>{
//         console.log(naame)
//     });
// }

// funcOne();










async function fromApi(){
    const apiUrl = await fetch('https://jsonplaceholder.typicode.com/albums')
    const convertJson = await apiUrl.json()
    
    const Func = convertJson.map((yitle) => {
        return yitle.title
    })
    Func.forEach((element) => {
        console.log(element)
        
    });

}
fromApi()








async function checkLast() {
    const apiUrl = await fetch('https://jsonplaceholder.typicode.com/todos')
    const cJson = await apiUrl.json()

    const allData = cJson.map((el) => {
        return el.title
    })
    allData.forEach((result => {
        console.log(result)
    }))
    
}
checkLast()







async function tanvirApi() {
    const apiUrl = await fetch('https://jsonplaceholder.typicode.com/users')
    const convertApi = await apiUrl.json()

    const funcResult = convertApi.map((el)=>{
        return el.name
    })
    funcResult.forEach((final)=>{
        console.log(final)
    }) 
}
tanvirApi()