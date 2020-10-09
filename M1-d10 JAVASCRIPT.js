/* JS EXERCISES
        21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete Email from the previously created object
        24) Create an array with 10 stdings in it
        25) Print in the console every stding in the previous array
        26) Create an array with 100 random numbers in it
        27) Wrote a function to get the MAX and the MIN from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays and returns the longest one
        30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
        */

        //1
    let x = "John"
    let y = "Doe"
    console.log(x + " <> " + y)
//2
    const person = {
name: "Evgeni",
surname: "Gyurov",
email:"evgeni776@abv.bg"
//3
    }
    const deleteEmail = function(){
        delete person.email
    }

//4 
    const myArray = []
    for (let index = 0; index < 10; index++) {
        myArray.push(index.toString())
    } 
    //5
    for (let index = 0; index < 10; index++) {
        
        console.log(myArray[index])
    } 
//65
      const myArray2 = []
    for (let index = 0; index < 100; index++) {
        myArray2.push(Math.floor(Math.random*101))
        console.log(myArray2[index])
    }  

//7
const getMax = function(array){
    return Math.max(array)
}
const getMin = function(array){
    return Math.min(array)
}
//8
const arrayOfarrays = []
for (let index = 0; index < array.length; index++) {
    const arrayToAdd = []
   for (let index = 0; index < 10; index++) {
      arrayToAdd.push(index)
   }
    arrayOfarrays.push(arrayToAdd)
}
console.log(arrayOfarrays)
//9
const getLongerArray = function(firstArray,SecondArray){
    let firstLenght = firstArray.length
    let secondLenght = secondLenght.length

    if(firstLenght > secondLenght){
        return firstArray
    }else{
        return SecondArray
    }
}
//10

const getArrayWithHighestSum = function(firstArray, SecondArray){
    let firstSum = 0
    let secondSum = 0

    for (let index = 0; index < firstarray.length; index++) {
        const element = array[index];
        firstSum += element
    }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        secondSum += element
    }
    if(firstSum > secondSum){
        return firstSum
    }else{
        return secondSum
    }
}