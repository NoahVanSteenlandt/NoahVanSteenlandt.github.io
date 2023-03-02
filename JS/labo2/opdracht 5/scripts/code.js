const setup = () => {
    if(confirm("Wil je 'Hello World!' veranderen in 'Welkom!'?")){
        let pElement=document.getElementById("txtOutput");
        pElement.innerHTML="Welkom!";
    }

}
window.addEventListener("load", setup);