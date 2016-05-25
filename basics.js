// This is a general practice file for JavaScript Basics. Please follow the instructions thoughout the sheet. Do not uncomment the commented out spaces.
var arr, findTwo, pusher, upFront, remover, noMore, copyCat, chopIt, sumIt, evenOdd, timesTen, animal, findAge, getKeys, changeName, speechMaker, addKey, keyLoop, cars, findModels

// Arrays

//1. Create the variable arr and assign it an array with the following list of numbers 12, 42, 36, 51, 96
var arr = [12,42,36,51,96]

// 2. Create a function called findTwo that takes in the arr array and returns the value at index 2.

// purpose: return the value at index 2 for an array
// parameters: array
// preconditions: none
// postsonditions: none
// produces: the value at index 2

function findTwo (arr) {
  return arr[2];
}


// 3. Create a function called pusher that takes in an array and a number and positions the number at the end of the array. Return the new array.

function pusher (array, num) {
  array.push(num)
  return array;
}
console.log(pusher(arr, 102))

// 4. Create a function called upFront that takes in an array and a number and positions the number in beginning of the array. Return the new array.

// 1. takes in an array and inserts a number at the beginning
// 2. array and number
// 3. none
// 4. adds a number at the beginning
// 5. returns the modified array

function upFront (array, num) {
  array.unshift(num);
  return array;
}
console.log(upFront(arr, 8))

// 5. Create a function called remover that takes in an array and removes the value at the end of the array. Return the new array.

// 1. takes in an array and removes the last value
// 2. array
// 3. none
// 4. reduces length of the array
// 5. returns the modified array

function remover (array) {
  array.pop()
  return array
}
console.log(remover(arr))

//6. Create a function called noMore that takes in an array and a number and positions the number in beginning of the array. Return the new array.

// 1. takes in an array and inserts a number at the beginning
// 2. array, number
// 3. none
// 4. increases length of the array 
// 5. returns the modified array

function noMore (array, num) {
    array.unshift(num);
    return array;
}
console.log(noMore(arr, 8))

//7. Create a function called copyCat that takes in an array, copies, and returns the second and third index values.

//takes in array, copies, and returns the second and third index values.
//array
//none
//none
// returns the second and third index values

function copyCat (array) {
    return array.slice(1,3);
}
console.log(copyCat(arr))

// 8. Create a function called chopIt that takes in an array and two numbers, then inserts the two numbers into the array after the second index value and deletes the original third index value.

// 1. takes in an array and 2 numbers and inserts them at the second index and removes the value at the third index
// 2. array and 2 numbers
// 3. none
// 4. inserts 2 number and delete the value at the 3rd index
// 5. returns the modified array

function chopIt (array, num1, num2) {
  array.splice(2, 1, num1);
  array.splice(2, 0, num2);
  return array
}
console.log(chopIt(arr, 32, 46))

// 9. Create a function called sumIt that takes in the array and returns the sum of each of the values in the array.

// 1. to sum all the values of an array
// 2. array
// 3. none
// 4. none
// 5. returns the sum value of the values in an array

var total = 0;
function sumIt (array) {
  for ( var i = 0; i < array.length; i++ ){
    total += array[i];
  }
  return total;
}
console.log(sumIt(arr))

// 10. Create a function called evenOdd that takes in the array and pushes into a new array "even" or "odd" for every value in the array, depending upon whether they are even or odd number values.
// Hint: Use the modulus operator

// 1. takes in an array and moves the even numbers into an "even array" and the odd numbers into an "odd" array
// 2. array
// 3. none
// 4. creates 2 new arrays
// 5. returns 2 new arrays one "even" and one "odd"

var oddArray = []
var evenArray = []

function evenOdd (array) {
  for ( var i = 0; i < array.length; i++ ) {
    if (array[i] % 2 == 0) {
      evenArray.push(array[i])
    }
    else(oddArray.push(array[i]));
  }
  return oddArray
  return evenArray
}
console.log(evenOdd(arr))

// 11. Create a function called timesTen that takes in an array and multiplies each value by 10 and returns the new array.
// Hint: Use the map method

// 1. takes in an array an multiplies each value by 10 
// 2. array
// 3. none
// 4. none
// 5. returns the array



// Objects

// 1. Create an object called animal. Make sure the animal has the following keys. (species, name, age, gender, favoriteFood) Also, give the animal a method of speech that returns a string that displays what the animal says.

var animal = {species: "dog", name: "zoey" , age: 1, gender: "female", favoriteFood: "apples"}

animal.speech = "woof";

// 2. Create a function called findAge that takes in an object and returns the age key value.

// 1. takes in an object and returns the age value
// 2. object
// 3. none or the object needs to have the age value defined (depending on interpretation)
// 4. none
// 5. returns the age value of the object

function findAge (obj) {
  return obj.age;
}
console.log(findAge(animal))

// 3. Create a function called getKeys that takes in an object and returns all of the key names (not values!).

// 1. takes in a object and returns all key names
// 2. object
// 3. none
// 4. none
// 5. returns all key names of an object

function getKeys (obj) {
  return Object.getOwnPropertyNames(obj);
}
console.log(getKeys(animal))

// 4. Create a function called changeName that takes in an object and a name value and replaces the object name with the given name value. Return the new object.

// 1. to take in an object and replace the name value with a new name
// 2. object, name
// 3. none
// 4. changes the name value of an object
// 5. returns the new object

function changeName (obj, newName) {
  obj.name = newName;
  return obj.name;
}

console.log(changeName (animal, "zo"))

// 5. Create a function called speechMaker that takes in an object and returns the response from calling the speech method.

function speechMaker (obj) {
  return obj.speech;
}
console.log(speechMaker(animal))

// 6. Create a function called addKey that takes in an object and adds a new key name bedtime and assigns it a value. Return the object.

function addKey (obj) {
  obj.bedtime = "9 p.m.";
  return obj
}
console.log(addKey(animal))

// 7. Create a function called keyLoop that takes in an object and loops through each of the key values. If any of the key values are equal to "monkey", then return "There's a monkey!", otherwise return "There's no monkey here!".

function keyLoop (obj) {
  for (var i = 0, Object.)
}

// Intermediate Arrays and Objects

// 1. Create an array called cars of 3 objects of 3 different cars with the key names of make, model, year.

// 2. Create a function called findModels that takes in an array, loops through the array and returns an array of all of the model values of each object.

