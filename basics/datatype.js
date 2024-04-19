"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// ********primitive********  call by value    we are changing in copy of data

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

//*********/ non-primitive******
// object
// array
// array

console.log(typeof undefined); // undefined
console.log(typeof null); // object


//*******  Memory ********
// 1. Stack , 2. Heap

// stack is used for Primitive dataTypes   (here we change the values in the copy)
let fName = "Kapil"
let lName= fName
lName="Sachin"
console.log(fName);
console.log(lName);

// Heap is used for non-Primitive dataTypes   (here we change the actual values of data)
let class2 = {name:"hello", mail:"kkk@gmail.com"}
let class3= class2
class3={name:"HLWO", mail:"yyy@gmail.com"}
console.log(class2);
console.log(class3);