// Hamburger menu

// Variables
//let leftImage = document.getElementById("left-image");
//let centerImage = document.getElementById("center-image");
//let rightImage = document.getElementById("right-image");

let imagePreviewer = document.getElementById("image-previewer");
let previewImage = document.getElementById("preview-image");
let closePreview = document.getElementById("close-preview");

// Function
function ShowImage(side)
{
	switch(side)
	{
		case "left":
			previewImage.src = leftImage.src;
			break;
		case "center":
			previewImage.src = centerImage.src;
			break;
		case "right":
			previewImage.src = rightImage.src;
			break;
		default:
			break;
	}
}

function PreviewImage(side)
{	
	if (imagePreviewer.style.display === "block") // If the previewer is already on
	{
		imagePreviewer.style.display = "none";
		imagePreviewer.style.backgroundColor = "rgba(77,47,35,0)";
	} else // Otherwise..
	{ 
		imagePreviewer.style.display = "block";
		imagePreviewer.style.backgroundColor = "rgba(77,47,35,0.9)";
		ShowImage(side);
	}
}