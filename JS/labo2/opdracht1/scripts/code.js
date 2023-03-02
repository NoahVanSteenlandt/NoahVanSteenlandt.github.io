const setup = () => {
    window.alert("dit is een mededeling.");
    console.log(window.confirm("bent u het zeker?"));
    // bij "ok" returnt er "true", bij "cancel" return er "false".
    console.log(window.prompt("Wat is uw naam?", "onbekend"));
    // bij iets ingevuld, return hij wat je hebt ingevuld, anders returnt hij de default.
}
window.addEventListener("load", setup);