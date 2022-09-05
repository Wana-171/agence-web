import "@fortawesome/fontawesome-free/js/all";
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



// api google maps

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
