import "./assets/css/styles.css";
// import _ from "lodash";
// import Icon from './assets/img/img-test-webpack.jpg';

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

// dark mod

let button = document.getElementById("dark-mode");
let body = document.querySelector("body");
let p = document.querySelector("p")


function darkMode() {
    // alert("ok");
    body.classList.toggle("bg-black");
    body.classList.toggle("text-white");

}

button.addEventListener("click", darkMode);



let buttonblue = document.getElementById("blue-mode");
let bodyblue = document.querySelector("body");

function blueMode() {
    // alert("ok");
    body.classList.toggle("bg-blue-500");
    bodyblue.classList.toggle("text-pink-500");
}

buttonblue.addEventListener("click", blueMode)
