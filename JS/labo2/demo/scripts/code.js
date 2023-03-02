const setup = () => {
    tree();
}

const tree = () => {

    let hoogte = 6;
    let ster = "";
    for (let i=0; i < hoogte; i++){
        if(i%2)
            ster += "*";
         else
            ster += "+";

        console.log(ster);
    }
}
// in parameter functie oproepen zonder haakjes
window.addEventListener("load", setup);