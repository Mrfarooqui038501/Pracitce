//________________ARRAYS __________
/*below the few different methods to  create an array 
const newArr =  [1,2,3,7];
const arr = ["arman","goa","gone"]
const arr1 = new Array (1,4,8,9,"Apple","Kill")
console.log(arr1)*/
 
//   Array Methods
 /* 1  name.push() 
const arr = [1,9,0,"apple"]
//arr.push(10) // using push we can add any element in the end of the array 
//console.log(arr)
console.log(arr.push(1),arr) //  output 5 [ 1, 9, 0, 'apple', 1 ]--we can direclty do like  this as well
arr.push("spam")
console.log(arr) // output  [ 1, 9, 0, 'apple', 1, 'spam' ]
console.log(arr.push("my bike"),arr) // output 7 [ 1, 9, 0, 'apple', 1, 'spam', 'my bike' ] */

/* // 2 name.pop() -- we use this method to delete Element from the end of the array
let newArr = ["arman","rohit",1,4,6,9]
newArr.pop()
console.log(newArr) //output  [ 'arman', 'rohit', 1, 4, 6 ]
console.log(newArr.pop(),newArr) // output 6 [ 'arman', 'rohit', 1, 4 ] */

/* // 3 name.Unshift() -- It will add the element in the begining of  the array 
let newArr = ["arman","rohit",1,4,6,9]
newArr.unshift(90)
console.log(newArr) // output  [ 90, 'arman', 'rohit', 1, 4, 6, 9 ]
console.log(newArr.unshift("start"),newArr) // output 8 [ 'start', 90, 'arman', 'rohit', 1, 4, 6, 9 ] -- this method will also give the length size */

/* // 4 name.shift() -- this will remove the element from the starting of the array
let newArr = ["arman","rohit",1,4,6,9]
newArr.shift()
console.log(newArr) // output [ 'rohit', 1, 4, 6, 9 ]
console.log(newArr.shift(),newArr.shift(),newArr) // output rohit 1 [ 4, 6, 9 ] --
from the above method we will also get the value those we removed from the array  */

/* // 4. name.includes()  -- form this method we can check if that element exist or not in our array 
const arr = [89,"arman","kashish","shubham",45,78]
arr.includes("arman")
console.log(arr.includes("arman"))// true 
console.log(arr.includes("Arman")) // flase */

/* // 5. name.indexof() -- from this method we can check the index of any element 
const arr = [89,"arman","kashish","shubham",45,78]
console.log(arr.indexOf("arman")) // output 1 
console.log(arr.indexOf("Pot")) // ouptput -1 -- because this value don't exist in our  array */

/* // 6 name.join() -- from this method we can conver an array to string 
const arr = [89,"arman","kashish","shubham",45,78]
const newArr = arr.join() 
console.log(arr) // ouptut [ 89, 'arman', 'kashish', 'shubham', 45, 78 ]
console.log(newArr) // output 89,arman,kashish,shubham,45,78 */
 
 // 7  name.slice() , we use this method to trim value from specific indexes 
// const arr = [1,2,3,4,5,6,7]
// const newArr = arr.slice(2,5)  // 5 index value will not be inculded in output 
// console.log(arr) // output  [ 1, 2, 3, 4,  5, 6, 7 ]
// console.log(newArr) // output [ 3, 4, 5 ]
//console.log(arr.slice(0,4),arr) // this is not a good way to do  it 
// const newAr = arr.slice(0,4)
// console.log(arr) // output [ 1, 2, 3, 4,  5, 6, 7 ]
// console.log(newAr)  // output [ 1, 2, 3, 4 ]

// // 8 name.splice(), we use this method to trim array but it will change the existing array as well 
// const arr = [1,2,3,4,5,6,7]
// //const nA = arr.splice(0,3)
// /* console.log(arr) // output [ 4, 5, 6, 7 ]   -- so when we use splice method  it make the changes in original
// //array and its reamin with the value those are not the part of splice */
// //console.log(nA)  // output [ 1, 2, 3 ] -- so this is the trim array 
// const ar = arr.splice(2,10) 
// console.log(arr) // output  [ 1, 2 ]
// console.log(ar) //[ 3, 4, 5, 6, 7 ]