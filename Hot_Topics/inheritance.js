// create inheritance 01

// class father{
//     num1 = 20
//     num2 = 30

//     addnum(){
//         return this.num1+this.num2
//     }
// }

// class son extends father{

// }

// const sonobj= new son()
// console.log(sonobj.addnum())

// const fatherobj = new father()
// console.log(fatherobj.addnum()) 

//02

// class father{

//     addNum(a, b){
//         return a + b  
//     }
// }

// class son extends father{ 

// }

// const sonObj = new son()
// console.log(sonObj.addNum(10,20)) 


// constructor in a class

class father{
    constructor(){
        console.log(`Hey! I'm from father class`)
    }
}

class son extends father{

}
new son()

// constructor with parameter only parent class

class parent{

    constructor(msj){
        console.log(msj)
    }
}

class child extends parent{

}
new child(`ami parent theke bolci bt child`)
new parent(`ami absolute parent`)

// constructor with parameter only child class

class cat{

}

class meww extends cat{
    constructor(something){
        super()
        console.log(something)
    }
}
new meww(`meww meww from cat's child`)

// constructor with both class 

// class dog{
//     constructor(){
//         console.log(`ami dog theke bolci`)
//     }
// }

// class dig extends dog{
//     constructor(){
//         super()
//         console.log(`ami dig theke bolci`)
//     }

// }

// new dog()
// new dig() 

class dog{
    constructor(dog_msj){
        console.log(dog_msj)
    }
}

class dig extends dog{
    constructor(dig_msj){
        super()
        console.log(dig_msj)
    }

}

new dog(`ami dog`)
new dig(`ami dig`) 