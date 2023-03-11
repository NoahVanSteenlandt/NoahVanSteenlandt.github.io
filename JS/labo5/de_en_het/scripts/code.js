const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let idx = tekst.indexOf("de");
    while (idx != -1) {
        const voor = tekst.slice(0, idx);
        const na = tekst.slice(idx+2, tekst.length);
        tekst = voor + "het" + na;
        idx = tekst.indexOf("de");
    }

    console.log(tekst);
}

window.addEventListener("load", setup);