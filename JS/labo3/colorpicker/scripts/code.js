const setup = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
	// we moeten zowel op het input als het change event reageren,
	// stackoverflow.com/questions/18544890

}

const update = () => {
	let red = document.getElementById("rgRed").value;
	document.getElementById("lblRed").innerHTML = red;
	//console.log("de waarde van rood is momenteel : "+ red);

	let green = document.getElementById("rgGreen").value;
	document.getElementById("lblGreen").innerHTML = green;
	//console.log("de waarde van groen is momenteel : "+ green);

	let blue = document.getElementById("rgBlue").value;
	document.getElementById("lblBlue").innerHTML = blue;
	//console.log("de waarde van blauw is momenteel : "+ blue);

	let swatch=document.getElementsByClassName("colorDemo")
	swatch[0].style.backgroundColor="rgb("+red+","+green+","+blue+")";
}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);