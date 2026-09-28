// The viewer for the portfolio

// All the work that I have created
let workLibrary = {
	0 : {
		'path' : 'ZomerInDenBosch.png',
		'name' : 'Zomer in Den Bosch',
		'date' : '31-06-2026',
		'description' : 'Deze afbeelding was gemaakt tijdens de laatste projectweek voor de 1e leerjaar, tijdens deze week moesten we werken met mensen van verschillende opleidingen om tot een gehele resultaat toe te gekomen, hierbij heb ik een foto van een fotograaf van mijn team gebruikt.'
	},
	1 : {
		'path' : 'berg.png',
		'name' : 'Berg',
		'date' : '15-06-2026',
		'description' : 'Gemaakt tijdens de les van Digitaal Tekenen waar we tekeningen moesten creëren die speciaal voor de portfolio bedoelt waren, hier is een van de tekeningen!'
	},
	2 : {
		'path' : 'rooftop.png',
		'name' : 'Rooftop',
		'date' : '15-06-2026',
		'description' : 'Gemaakt tijdens de les van Digitaal Tekenen waar we tekeningen moesten creëren die speciaal voor de portfolio bedoelt waren, hier is een van de tekeningen!'
	},
	3 : {
		'path' : 'klimaat.png',
		'name' : 'Klimaatverandering in Nederland',
		'date' : '16-06-2026',
		'description' : 'Klimaatverandering is wel een belangrijke thema in de wereld dat we nu leven. Dit heb ik gemaakt voor een opdracht voor Grafische Vormgeving.'
	},
	4 : {
		'path' : 'fijnekerst.png',
		'name' : 'Fijne kerst! 1',
		'date' : '08-12-2025',
		'description' : 'Gemaakt tijdens de eerste projectweek van mijn eerste leerjaar van de opleiding nog VOOR de project, door mijn docent heb ik een idee gekregen om dit te gaan maken.'
	},
	5 : {
		'path' : 'kerstkaart2.png',
		'name' : 'Fijne kerst! 2',
		'date' : '20-12-2025',
		'description' : 'Gemaakt tijdens de eerste projectweek.'
	},
	6 : {
		'path' : 'mountain.png',
		'name' : 'Mountain',
		'date' : '23-03-2026',
		'description' : 'Tijdens de derde periode van mijn eerste leerjaar moest ik werk creëren van twee verschillende stijlen, en dit is een van de werken die ik gemaakt had.'
	},
	7 : {
		'path' : 'beeldverhaal_edit.png',
		'name' : 'Beeldverhaal',
		'date' : '23-03-2026',
		'description' : 'Tijdens de derde periode van mijn leerjaar moest ik werk creëren van twee verschillende stijlen, en dit is een van de werken die ik gemaakt had. De tekst komt uit de vertaalde tekst voor het liedje La Mer van Nine Inch Nails.'
	},
	8 : {
		'path' : 'healthybite.png',
		'name' : 'Healthy Bite',
		'date' : '13-01-2026',
		'description' : 'Gemaakt tijdens de tweede periode van mijn eerste leerjaar, we moesten de brand bedenken voor een fictief bedrijf.'
	},
	9 : {
		'path' : 'oekraiensekrant.png',
		'name' : 'De Oekraïnse Krant',
		'date' : '24-03-2026',
		'description' : 'Een fictieve krant die over Oekraïne gaat, een van een paar werken van mij die wel over Oekraïne gaan!'
	},
	10 : {
		'path' : 'shadow.png',
		'name' : 'The Shadow of Tomorrow',
		'date' : '14-01-2026',
		'description' : 'Een wereld waar niemand vrijheid heeft om te spreken, toch is er een hoop, maak niet uit hoe klein het is, dit is de cover voor zon boek..'
	},
	11 : {
		'path' : 'stadsklanken.png',
		'name' : 'Stadsklanken',
		'date' : '19-03-2026',
		'description' : 'Voor een echt bedrijf moesten we de brand maken, daarvoor waren we in teams verdeeld, ik was vooral voor de logo verantwoordelijk, met wat hulp van mijn teamleden.'
	}
};

// Variables
let currentWork = 0;
let maximumWorks = 11;

let leftImage = document.getElementById("left-image");
let centerImage = document.getElementById("center-image");
let rightImage = document.getElementById("right-image");

let workTitle = document.getElementById("work-title");
let workDate = document.getElementById("work-date");
let workDescription = document.getElementById("work-description");

// Functions
function NewImages()
{
	
	let left;
	let center;
	let right;
	
	// Setting the center value first for the next operations
	if (currentWork > maximumWorks)
	{
		currentWork = 0;
	} else if (currentWork < 0)
	{
		currentWork = maximumWorks;
	}
	center = currentWork;
	
	// Set the left and right images, and checking whether they're not reaching impossible values
	if (currentWork - 1 < 0) // Left
	{
		left = maximumWorks;
	} else
	{
		left = currentWork - 1;
	}
	
	if (currentWork + 1 > maximumWorks) // Right
	{
		right = 0;
	} else
	{
		right = currentWork + 1;
	}
	
	// Changing images
	leftImage.src = "../images/library/" + workLibrary[left].path;
	centerImage.src = "../images/library/" + workLibrary[center].path;
	rightImage.src = "../images/library/" + workLibrary[right].path;
	
	// Setting the text
	workTitle.innerHTML = workLibrary[center].name;
	workDate.innerHTML = workLibrary[center].date;
	workDescription.innerHTML = workLibrary[center].description;
}

function ChangeImage(direction)
{
	if (direction === "left") { currentWork -= 1 }
	if (direction === "right") { currentWork += 1 }
	
	NewImages();
}

// Initialize the images the first time the page appears
NewImages();