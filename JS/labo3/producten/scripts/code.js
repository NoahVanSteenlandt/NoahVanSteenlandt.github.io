const setup = () => {
    let numbers = document.getElementsByClassName("numb");
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("change", herbereken);
    }
}

const herbereken = () =>{
    let result = 0.00;

    const nummers = document.getElementsByClassName("numb");
    const prijzen = document.getElementsByClassName("prijs");
    const results = document.getElementsByClassName("result");
    const btwWaarden = document.getElementsByClassName("btw");
    for (let i = 0; i < nummers.length; i++) {
        const kost = parseFloat(prijzen[i].innerHTML);
        const btw = parseFloat(btwWaarden[i].innerHTML);
        const hoeveelheid = nummers[i].value;

        const subtotaal = (kost * hoeveelheid) * (btw / 100 + 1);
        result += subtotaal;
        results[i].innerHTML = subtotaal.toFixed(2).replace('.', ',') + " EURO";
    }
    document.getElementById("totaal").innerHTML = result.toFixed(2).replace('.', ',') + " EURO";
}

window.addEventListener("load", setup);