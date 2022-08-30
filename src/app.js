import _, { size } from "lodash";
import "./assets/css/styles.css";
import  "@fortawesome/fontawesome-free/js/all";


// document.body.appendChild(component());
// import Icon from './assets/img/';

// function component() {
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(['', ''], ' ');
//   element.classList.add("text-3xl");

//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);

//   return element;
// }

// document.body.appendChild(component());

let button = document.getElementById("dark-mode");
let body = document.querySelector("body");

function darkMode() {
 body.classList.toggle("bg-black");
 body.classList.toggle("text-white")
}
button.addEventListener("click",darkMode);

// function test() {
//   let name = "warren";
// };

// let name = "warren";


// let data = {
//   userName:"warren",
//   iban:"fr7777777",

// }

// console.log(data);

// let root = document.getElementById("root");
// console.log(" Vous vous appelez: " + data.userName  +"   " +  data.iban);
// console.log(`Vous vous appelez : ${data.userName}, votre IBAN est $ {data.iban}`)
// let results = `Vous vous appelez : ${data.userName}, votre IBAN est $ {data.iban}`

// let paragraph = document.createElement("p")

// paragraph.innerHTML = results;
// console.log(paragraph)

// root.before(paragraph)

// class User{
//   constructor( username , iban , city) {
//    this.username = username;
//    this.iban = iban;
//    this.city = city;
//   };
// };
// new User
// console.log(new User("warren" , fr, "Meaux"));

// class Car {
//   constructor(mark, modeL, price , color, desc) {
//     this.mark = mark;
//     this modeL = modeL;
//     this price = price;
//     this color = color; 
//     this desc = desc;
//   };
// };

// new Car 
// console.log(new Car ("tesla" , "model S" , 55000,"white", "lorem"));

// let number = 10; 
// let number1 = 9;
// if=condition
// if (number === null) {
// console.log("Number est égal à null.");
// } else if (number !== null){
//     console.log("n'est pas égal a null");
// }

// if ( number < 10 && number1 <= 9) {
//     console.log("true");
// } else {
//     console.log("False");
// }

// if (number <= 11 || number1 <= 10) {

// }
//crée une erreur
// number === 11 ? console.log("true") : console.log("false");
// number === 11 ? console.log("true") : "";
// console.error("error");

// try {
//   func();  
// }catch (error) {
// console.log("error");
// }
//création d'une class =class
// class fly {
//     constructor(time,) {
    
    
//     this ,time =time;
// }
// flying() {
//     return "je vole";
//     }
// }

// class plane  extends fly{
//     constructor (society,color,price,desc, time) {
//         super(time);
//         this ,society =society;
//         this , color = color;
//         this , price = price;
//         this , desc = desc;
//     };
//     results() {
//         console.log(`${super.flying()} avec l'avion de warren`);
//     }
// };


//let=variable
// let plane = new plane("acs", "yellow" , 200000, "ff");
// console.log(plane); 
// console.log(plane.price, results());
// console.log(new Date());
// let person = {

//     age: "20",
//     height: "200cm",
//     weight:"70kg" 

// };
// console.log(person.weight); 

// type  primitive
// let number = 32;
// let name = "warren";
// let object = [];
// let true =true
// let false = false
// let symbol = new symbol();

// let null = null;
// let array = [];
// let func = function name(params){
// };
//  let undefined = undefined;

