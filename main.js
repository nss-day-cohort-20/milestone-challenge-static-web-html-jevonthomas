
let hiddenMenu = document.getElementsByClassName("menu_hide");
console.log(hiddenMenu);

let hamburgerMenu = document.getElementById("menu_icon");
console.log(hamburgerMenu);

// add click event to the menu icon
hamburgerMenu.addEventListener("click", function() {
// on click, toggle the ID of the nav links
	hiddenMenu[0].classList.toggle("menu_show");
});
