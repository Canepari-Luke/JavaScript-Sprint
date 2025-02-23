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