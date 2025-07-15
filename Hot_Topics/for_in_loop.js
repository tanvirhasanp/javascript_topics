const person = {
    fname: 'Md. Tanvir',
    lname: 'Hasan',
    age: 25,
    faculty: 'CSE',
    getFullName: function(){
        return this.fname + ' ' + this.lname;
    }
};

for (let x in person){
    if(typeof person[x]==='function'){ // access function (condition)
        console.log(person[x]()) // function call and print
    }
    else
        console.log(person[x]) // access other value
}