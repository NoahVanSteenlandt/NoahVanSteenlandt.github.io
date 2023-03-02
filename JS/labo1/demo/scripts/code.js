
const setup = () => {

    let lblCursus = document.getElementById("lblCursus");
    lblCursus.addEventListener("mouseover", change);
    // eerst type, dan functie

    let btnSent = document.getElementById("btnSend");
    btnSent.addEventListener("click", show);
}

const show = () => {
    let txtName = document.getElementById("txtName");

    if (txtName.value != ""){
        alert("jouw naam is " + txtName.value);

        console.log("jouw naam is "+ txtName.value);

        console.log(`jouw naam is ${txtName.value}`)
        // backstick schrijf je door Alt + 96: `
    }
    else
    {
        alert("gelieve naam in te vullen");
    }
}

const change = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";
}

window.addEventListener("load", setup);

