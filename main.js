
let hiddenMenu = document.getElementsByClassName("menu_hide");
console.log(hiddenMenu);

let hamburgerMenu = document.getElementById("menu_icon");
console.log(hamburgerMenu);

let navigation = document.getElementsByClassName("navigation");

let mainHeader = document.getElementsByClassName("main_header");

// add click event to the menu icon
hamburgerMenu.addEventListener("click", function() {
// on click, toggle the ID of the nav links
	hiddenMenu[0].classList.toggle("menu_show");
	navigation[0].classList.toggle("menu_show");
	mainHeader[0].classList.toggle("menu_show");
});

//need to create a blog object prototype


//need to add a function that sends my blog post to this function
document.getElementById("blog").innerHTML +=
	`	<article>

		<header>
			<h1>${articleName}</h1>
		</header>

		<section>
			<p>${blogPost}</p>
		</section>

		<footer>
			<author>Jevon Thomas</author>
			<date>${postDate}</date>
		</footer>

	</article>`
