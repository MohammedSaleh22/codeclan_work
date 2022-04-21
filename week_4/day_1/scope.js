// var name = "Mohammed"

var secretsFunction = function(){
    var pinCode = [5,2,8,4]
    // console.log(name)
    // console.log("pinCode inside the function ", pinCode)
}

secretsFunction()

// console.log("pinCode outside the function ", pinCode)

var filterNamesByFirstLetter = function(names, letter){
    var filterNames =[]
    for (let name of names){
        if (name[0] === letter){
        filterNames.push(name)
    }
    // console.log(name)
}
    return filterNames
}
var student = ["Connor","Abbas","Arad","Harrison","AJ","Mohammed","Devlin"]
// console.log(filterNamesByFirstLetter(student, "A"))

let calculateEnergy = function(mass){
    const speedOfLight = 299792458
    // speedOfLight ++ 
    return mass * speedOfLight ** 2
}

console.log(calculateEnergy(75))