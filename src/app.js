import "@fortawesome/fontawesome-free/js/all";
import "./assets/css/styles.css";



// ************* For homepage header *****************
// ********* menu burger for tablet & mobile *********

const btnHomeBurger = document.getElementById("btn-home-burger");
const menuHomeNav = document.getElementById("menu-home-nav");

const ShowHomeMenu = () => {
  menuHomeNav.classList.toggle("hidden");
};

btnHomeBurger.addEventListener("click", ShowHomeMenu);

// ************* darkmod *************

const body = document.querySelector("body");
const btnDarkMode1 = document.getElementById("btn-dark-mode1");
const btnDarkMode2 = document.getElementById("btn-dark-mode2");

const darkMode = () => {
  body.classList.toggle("bg-black");
  body.classList.toggle("text-white");
};

btnDarkMode1.addEventListener("click", darkMode);
btnDarkMode2.addEventListener("click", darkMode);