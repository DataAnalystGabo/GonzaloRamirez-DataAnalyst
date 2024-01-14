const nav            = document.getElementById("header__menu");
const backgroundMenu = document.getElementById("header__background");
const hamburguerIcon = document.getElementById("header__hamburguer");
const closeIcon      = document.getElementById("header__close");
const listLi         = document.getElementsByClassName("header__li");

function showMenu(){
  nav.style.right = "0px";
  backgroundMenu.style.display = "block";
  hamburguerIcon.style.display = "none"
};

function hiddenMenu(){
  nav.style.right = "-100%"
  backgroundMenu.style.display = "none";
  hamburguerIcon.style.display = "block"
}

hamburguerIcon.addEventListener("click", showMenu);
closeIcon.addEventListener("click", hiddenMenu);
backgroundMenu.addEventListener("click", hiddenMenu);

Array.from(listLi).forEach(list => {

  list.addEventListener("click", hiddenMenu);
  
});