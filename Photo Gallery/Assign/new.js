// alert("Welcome to Aniwall");

let greetings = "Hello world"
let isActive = true;
let notdefind;
const no = 777;

console.log(5 == "5");
console.log(5 === "5");
console.log(10 > 5 && 5 < 7);

// let age = 12;
// if (age >= 18){
//     console.log("you are an adult");
// } else{
//     console.log("you are a minor")
// }

// function declaration
function add(a,b){
    return a + b;
}
console.log (add(3,7));

// arrow function
const multiply =(x, y) => x*y;
console.log(multiply(4,5));

// Array
let fruits = ["apple", "berry", "cherry"];
console.log(fruits [1]);

// Object
let person = {
    name: "Dammy",
    age: 300,
    isfrontendstudent: false
};
console.log(person.age);

try{
    let result = divide(10,0);
}catch (error) {
    
console.error("an error ocurred");
}


