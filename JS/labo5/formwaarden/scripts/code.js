const setup = () => {
    document.getElementById("btnShow").addEventListener("click", show)
}

const show = () => {
    if(document.getElementById("boxRoker").checked){
        console.log("is roker");
    }  else {
        console.log("is geen roker");
    }

    if(document.getElementById("radNederlands").checked){
        console.log("moedertaal is nl");
    } else if(document.getElementById("radFrans").checked){
        console.log("moedertaal is fr");
    } else if(document.getElementById("radEngels").checked){
        console.log("moedertaal is en")
    } else{
        console.log("moedertaal niet gespecifieerd");
    }

    console.log("favoriete buurland: " + document.getElementById("selBuurland").selected)



}


window.addEventListener("load", setup);