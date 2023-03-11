const setup = () => {
    document.getElementById("imgFoto").addEventListener("mouseover", change);
}


const change = () => {
    document.getElementById("txtText").innerHTML = "School of cats";
    document.getElementById("imgFoto").src = "images/kat.jpg";
    document.getElementById("imgFoto").alt = "kat";
}


window.addEventListener("load", setup);