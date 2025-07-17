// explain method over riding
// over riding: child class toh parent class er value pbe , bt value pawar pore child clss jdi parent theke pawa value cng kore nijer moto kore then setake over riding bola hoi

class father{
    sumNum(){
        let a =10
        let b =100
        return a+b 
    }
}

class son{
     sumNum(){
        let a =50
        let b =150
        return a+b 
    }
}

const fatherObj = new father()
console.log(fatherObj.sumNum())

const sonObj = new son()
console.log(sonObj.sumNum())   // over ride the father's value , this is called over riding