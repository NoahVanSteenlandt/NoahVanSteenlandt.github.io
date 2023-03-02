const VoegNaamToe = (famielieLeden) => {
    let niewFamilieLid = prompt("Geef de naam van het nieuwe familielid");
    famielieLeden.push(niewFamilieLid);
    console.log(niewFamilieLid);
}

const setup = () => {
    let familieLeden = ["fam1", "fam2", "fam3", "fam4", "fam5"];
    console.log(familieLeden.length);

    for(let i = 0; i < familieLeden.length; i+= 2){
        console.log(familieLeden[i]);
    }

    VoegNaamToe(familieLeden);
    console.log(familieLeden.join());
}


window.addEventListener("load", setup);