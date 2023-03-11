const setup = () => {
    document.getElementById("btnSend").addEventListener("click", spaceLogger)

}

const spaceLogger = () =>{
    const input = document.getElementById("txtInput").value;
    let log = "";
    for (let i = 0; i < input.length; i++) {
        log += input.charAt(i) + " ";
    }
    console.log(log);
}

window.addEventListener("load", setup);