import "@fortawesome/fontawesome-free/js/all";
import "./assets/css/styles.css";
import darkMode from "./assets/components/darkMod";



// ************* For homepage header *****************
// ********* menu burger for tablet & mobile *********

const btnHomeBurger = document.getElementById("btn-home-burger");
const menuHomeNav = document.getElementById("menu-home-nav");

const ShowHomeMenu = () => {
  menuHomeNav.classList.toggle("hidden");
};

btnHomeBurger.addEventListener("click", ShowHomeMenu);

