
// ************* For homepage header *****************
// ********* menu burger for tablet & mobile *********

const btnHomeBurger = document.getElementById("btn-home-burger");
const menuHomeNav = document.getElementById("menu-home-nav");

const ShowHomeMenu = () => {
  menuHomeNav.classList.toggle("hidden");
};

btnHomeBurger.addEventListener("click", ShowHomeMenu);

export default ShowHomeMenu