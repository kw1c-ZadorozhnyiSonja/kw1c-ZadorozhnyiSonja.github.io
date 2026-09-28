// Hamburger menu

// Variables
var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");
var main = document.getElementById("main");

let checkLandscape = window.matchMedia("(orientation: landscape)");

// Function
function MenuToggle()
{	
	if (menu.style.display === "block")
	{
		menu.style.display = "none";
		main.style.display = "inline";
	} else
	{
		menu.style.display = "block";
		main.style.display = "none";
	}
}

checkLandscape.addEventListener("change",function(x) // Checking whether the device is in landscape mode
{
	if (x.matches) // When the device is in landscape mode
	{
		menu.style.display = "flex";
	}
})