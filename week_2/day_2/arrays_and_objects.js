var sports = ["football","tennis","rugby"]
//console.log(sports[0])
console.log("Array Length: " , sports.length)

// Adds to the array
sports.push("curling")
sports.push("snooker")
sports.push("darts")


// Remove the last element in the array
var removedSport = sports.pop()
//console.log("All sports: ", sports)
//console.log("Removed Sport: " , removedSport)

// Remove the first element in the array
var removedFirstSport = sports.shift()
//console.log("Removed From Front: " , removedFirstSport)
//console.log("All sports: ", sports)

// Add an element to the start of the array
sports.unshift("Basketball")
console.log(sports)

// Removing elememts anywhere in the array
// 1. What index were starting at
// 2. How many are we removing
var spliceSport = sports.splice(2,1)
console.log(sports)
console.log("Splice sport: ", spliceSport)

// Adds elements anywhere in the array
// 3. The element I want to add
// (2,1,"element") to replace the element
sports.splice(2, 0 , "golf")
console.log(sports)
