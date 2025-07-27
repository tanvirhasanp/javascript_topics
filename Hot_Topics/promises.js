const generateNum = new Promise((res, rej) => {
    const randomNum = Math.floor(Math.random() * 10)
    console.log(randomNum)

    if(randomNum >= 5){
        return res()
    }
    else {
        return rej()
    }
})

generateNum
           .then(function(){
            console.log(`Above`)
           })
           .catch(function(){
            console.log(`Bellow`)
           })