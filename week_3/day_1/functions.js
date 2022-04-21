function sayHello(name){
    // console.log("Hello " + name)
    var greeting = "Hello " + name
    return greeting
}

var newGreeting = sayHello("Mohammed")
// console.log(newGreeting)

function timeOfDay(time , date){
     var timeAndDate = "The time is " + time + " on " + date
     return timeAndDate
}

var todaysDate = timeOfDay("10:48" , "11th of April")
// console.log(todaysDate)
var todaysDate2 = timeOfDay("12:48" , "12th of April")
// console.log(todaysDate2)

// Calculator
function add(firstNumber , secondNumber){
    var result = firstNumber + secondNumber
    return  result
}

var answer = add(1 , 4)
console.log(answer)

//subtract, multiply and divide
 function sub( firstNumber, secondNumber){
     var result = firstNumber - secondNumber
     return result
 }
 var answer = sub(5 , 2)
 console.log(answer)
function multi(firstNumber , secondNumber){
    var result = firstNumber * secondNumber
    return result
}
var answer = multi( 2 , 2)
console.log(answer)
function divide( firstNumber , secondNumber){
    var result = firstNumber / secondNumber
    return result
}
var answer = divide(10 , 2)
console.log(answer)

// I want to pass in string and get returned the length of the string
function lengthOfString(string){
    var length = string.length
    return length
}

var lengthOfName = lengthOfString("Mohammed")
//console.log(lengthOfName)

// I want the total length of 2 strings added together

function lengthOf2Strings(string1 , string2){
    var length = string1.length + string2.length
    return length
}
// var lengthOf2Name = lengthOf2Strings("Mohammed" , "Ahmed")
// console.log(lengthOf2Name)
console.log(lengthOf2Strings("Ali" , "Ahmed"))
