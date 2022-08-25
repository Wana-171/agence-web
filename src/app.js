import _ from "lodash";
import "./assets/css/styles.css";
import  "@fortawesome/fontawesome-free/js/all";
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