const setup = () => {
    document.getElementById("btnTrigrams").addEventListener("click", printTrigrams);
}



const printTrigrams = () => {
    let tekst = document.getElementById("txtTrigrams").value

    for (let i = 0; i <= tekst.length - 3; i++) {
        console.log(tekst.slice(i, i+3));
    }
}

window.addEventListener("load", setup);