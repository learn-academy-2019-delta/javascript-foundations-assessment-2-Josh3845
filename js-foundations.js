// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write an arrow function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".

let array = [15, 0, 385, -7]

let num = array.map(value => {
    if(value % 3 === 0){
        return `${value} is divisible by three`;
    }
    else {
        return `${value} is not divisible by three`
    }
})
console.log(num);
// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.
let helloMe = {firstName: "Josh",
  lastName: "Steinbock",
  eyeColor: "Brown",
  hairColor: "Brown",
  aboutMe: function() {return `Hello my name is ${this.firstName} ${this.lastName} and I have ${this.eyeColor} eyes and ${this.hairColor} hair.`}
};

helloMe.aboutMe(); // I could not get this code to log it came up empty.  I even tried the exaple below which gave the same result
// var person = {
//  name: "Alex Keaton",
//  phone: 123456789,
//  getData: function() { return this.name+"-"+this.phone }
// };
// person.getData();   -> "Alex Keaton-123456789"


// -------------------------------------------------
// Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item as one string. Expected output: "streetlamp teeth nephew database"
let everyOther = (other) => {
  let str = other.split(" ")
  let final = str.filter((value) =>{
    return str[I] + 1

  })

}

console.log(final(randomNouns));


// 3b. Create an arrow function that takes in the variable and returns an array with the number of letters in each string. Expected output: [10, 6, 5, 10, 6, 11, 8]
let str = ["aaaaaaaaaa","bbbbbb","ccccc","dddddddddd","eeeeee", "fffffffffff", "gggggggg"]
console.log(str.map(totalNum => totalNum.length))


// 3c. Stretch: Create a function called capitalizer that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]



// -------------------------------------------------
// Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"
let alphabetSoup = function(alpha){
let arr = alpha.split("")
  return arr.sort().join('')
}

console.log(alphabetSoup(testString1))


// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"
let alphabetSoup = function(alpha){
let arr = alpha.split("")
let newArr = []
  return arr.sort().join('').push(newArr)
}

console.log(alphabetSoup(testString1,testString2,testString3))



// -------------------------------------------------
// Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

let combined = (a1,a2) => a1.map((x,i) => [x,a2[i]])


console.log(combined(amounts,animals));


// 5b. Stretch: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"
