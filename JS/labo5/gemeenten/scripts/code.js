const setup = () => {
    let stop = false;
    while(!stop){
        // blijft gemeenten opvragen tot je "stop" invult, vult de gemeenten in in een <select> tag

        let tekst = window.prompt("vul een gemeente in of 'stop' om te stoppen");
        if(tekst === "stop"){
            stop = true;
        } else {
            const opt = document.createElement("Option");
            opt.text = tekst;
            document.getElementById("gemeenten").appendChild(opt);
        }
    }


}
window.addEventListener("load", setup);