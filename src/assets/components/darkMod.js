// ************* darkmod *************

const body = document.querySelector("body");

// for dark mod
const btnDarkMode1 = document.getElementById("btn-dark-mode1");
const btnDarkMode2 = document.getElementById("btn-dark-mode2");

// for shadow headet & main
const shadowLight1 = document.getElementById("shadow-light1");
const shadowLight2 = document.getElementById("shadow-light2");
const shadowLightAll = document.querySelectorAll("div.shadow-light-all")

// for shadow mobile header
const mobileShadowLight1 = document.getElementById("mobile-shadow-light1");

// for bg nav burger
const darkBurger = document.getElementById("dark-burger");

// for box contact remove bg
const removeBoxPink = document.querySelectorAll("div.remove-box-pink");

const darkMode = () => {
  body.classList.toggle("bg-black");
  body.classList.toggle("text-white");
  body.classList.toggle("bg-pink-100");
  shadowLight2.classList.toggle("shadow-black");
  shadowLight2.classList.toggle("shadow-white");
  shadowLight1.classList.toggle("shadow-black");
  shadowLight1.classList.toggle("shadow-white");
  mobileShadowLight1.classList.toggle("shadow-black");
  mobileShadowLight1.classList.toggle("shadow-white");
  darkBurger.classList.toggle("bg-pink-100");
  darkBurger.classList.toggle("bg-black");
  removeBoxPink.forEach((element) => {
    element.classList.toggle("bg-red-200");
    element.classList.toggle("bg-gray-500");
  });
  shadowLightAll.forEach((element) => {
    element.classList.toggle("shadow-black")
    element.classList.toggle("shadow-white")
  })
  
};

btnDarkMode1.addEventListener("click", darkMode);
btnDarkMode2.addEventListener("click", darkMode);

export default darkMode;
