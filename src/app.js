import _ from "lodash";
import "./assets/css/styles.css";
import Icon from './assets/img/img-test-webpack.jpg';

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
//   }
// }
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