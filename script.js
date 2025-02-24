// this prints hello world to the console.
console.log("Hello World!");

// this will add 3 and 5 and print the result to the console
const x = 3 // const stands for constant veriable, a function cannot change it
let y = 5 // let is a variable that a function could potentially change
console.log(x + y);

document.getElementById("total").innerHTML = `total = ${x + y}`; // This is how we are selecting the id in the html to change it
// the `total = ${x + y}` is called a template literal and is used to insert a variable into a string

const button=document.getElementById("button"); // this defines the button from the HTML for the JavaScript

// This adds functionality to the button by changing the HTML
button.addEventListener("click", function(){document.getElementById('demo').innerHTML = 'This is JavaScript!'});


const a = document.querySelector('.a').innerHTML;

const b = document.querySelector('.b').innerHTML;

const enter=document.getElementById("enter");

enter.addEventListener("onClick", function(){parseInt(a); parseInt(b); add});

function add(a, b){
   let t = a + b;
   let h = document.createElement("p");
   document.querySelector(".math").appendChild(h);
   h.innerHTML = `${t}`;
}

// this is an array
let fruits = ["apple", "orange", "banana", "coconut"];

// you can change elaments of an array
fruits[0] = "green apple";

// you can use the method of changing elements to add elements to an array
fruits[3] = "guava";

//you can also use other methods to edit arrays
fruits.push("grape");//push adds an element to the end of an array

fruits.pop();//pop removes the last element of an array

fruits.unshift("kiwi");//unshift adds an element to the beginning of an array

fruits.shift();//shift removes the first element of an array

// you can list out and add elements to an array

console.log(fruits); 
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// you can also get the length of an array
let numOfFruits = fruits.length;

// this will print the number of fruits in the array
console.log(numOfFruits);

// you can use this method to search for an element in an array
let index = fruits.indexOf("banana");

console.log(index);