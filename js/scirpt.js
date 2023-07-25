const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const mensajeFinal = document.getElementById("mensajeFinal");
const textMnf = document.getElementById("textMnf");
const textIat = document.getElementById("textIat");
const btnCopiar = document.getElementById("btnCopiar");
const panel = document.getElementById("panel");
const btnAlura = document.getElementById("btnAlura");
const btnMorse = document.getElementById("btnMorse");
const btnReverse = document.getElementById("btnReverse");
const span = document.getElementById("selectEncripter");

let reempazar = [["e", "enter"],["o", "ober"],
["i", "imes"],["a", "ai"], ["u", "ufat"]];

function ayudaEncriptado(){
    mensajeFinal.style.backgroundImage = "none";
        textMnf.style.display = "none";
        textIat.style.display = "none";
        btnCopiar.className = "btn-copiar btn";
        panel.className = "panel completo";
}
function reverseString(str) {
    return str.split("").reverse().join("");
}
botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    
    function encriptarAlura(newText){
        for(let i = 0; i < reempazar.length; i++){
            if(newText.includes(reempazar[i][0])){
                newText = newText.replaceAll(reempazar[i][0], reempazar[i][1]);
            }
        }
        return newText;
    }
    function encriptarMorse(newText){
        newText = newText.split('');
        console.log(newText);
        newText.forEach((letra, index) => {
            console.log(letra, index);
            for(let i = 0; i < reempazar.length; i++){
                if(letra == reempazar[i][0]){
                    newText[index] = reempazar[i][1]+" ";
                    break;
                }
            }
        });
        return newText.join('').trim();
    }
    if(texto.trim() != ""){
        if (btnAlura.classList.contains("seleccionado")){
            const textoEncriptado = encriptarAlura(texto);
            mensajeFinal.innerHTML = textoEncriptado;
        }else if(btnMorse.classList.contains("seleccionado")){
            const textoEncriptado = encriptarMorse(texto);
            mensajeFinal.innerHTML = textoEncriptado;
        }else if(btnReverse.classList.contains("seleccionado")){
            mensajeFinal.innerHTML = reverseString(texto); 
        }
        ayudaEncriptado();
    }else{
        alert("No ingresaste texto...");
    }
    });
botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    function desencriptarAlura(newText){
        for(let i = 0; i < reempazar.length; i++){
            if(newText.includes(reempazar[i][1])){
                newText = newText.replaceAll(reempazar[i][1], reempazar[i][0]);
            }
        }
        return newText;
    }
    function desencriptarMorse(newText){
        newText = newText.split(' ');
        newText.forEach((letra, index) => {
            console.log(letra, index);
            for(let i = 0; i < reempazar.length; i++){
                if(letra == reempazar[i][1]){
                    newText[index] = reempazar[i][0];
                    break;
                }
            }
        });
        return newText.join('');
    }
    if(texto.trim() != ""){
        if(btnAlura.classList.contains("seleccionado")){
        const textoEncriptado = desencriptarAlura(texto);
        mensajeFinal.innerHTML = textoEncriptado;
        }else if(btnMorse.classList.contains("seleccionado")){
            const textoEncriptado = desencriptarMorse(texto);
            mensajeFinal.innerHTML = textoEncriptado;
        }else if(btnReverse.classList.contains("seleccionado")){
            mensajeFinal.innerHTML = reverseString(texto);
        }
        ayudaEncriptado();
    }else{
        alert("No ingresaste texto...");
    }
});
btnCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    navigator.clipboard.writeText(texto.value).then(() => {
        alert("Texto copiado al portapapeles con éxito!");
    })
    .catch((error) => {
        console.error("Error al copiar el texto: ", error);
    });
});
btnAlura.addEventListener("click", () => {
    reempazar = [["e", "enter"],["o", "ober"],
    ["i", "imes"],["a", "ai"], ["u", "ufat"]];
    span.innerHTML = "(Aura Encryption)";
    if(!btnAlura.classList.contains("seleccionado")){
        btnAlura.classList.add("seleccionado");
        btnMorse.classList.remove("seleccionado");
        btnReverse.classList.remove("seleccionado");
    }
});
btnMorse.addEventListener("click", () => {
    reempazar = [
    ["a", ".-"],["b","-..."], ["c","-.-."],["d","-.."],["e", "."],["f","..-."],["g","--."],["h","...."],["i", ".."],["j",".---"],["k","-.-"],["l",".-.."],["m","--"],["n","-."],["o", "---"],["p",".--."],["q","--.-"],["r",".-."],["s","..."],["t","-"],["u", "..-"],["v","...-"],["w",".--"],["x","-..-"],["y","-.--"],["z","--.."],[" ","/"]];   
    span.innerHTML = "(Morse Code)";
    if(!btnMorse.classList.contains("seleccionado")){
        btnMorse.classList.add("seleccionado");
        btnAlura.classList.remove("seleccionado");
        btnReverse.classList.remove("seleccionado");
    }
});
btnReverse.addEventListener("click", () => {
    span.innerHTML = "(Reverse)";
    if(!btnReverse.classList.contains("seleccionado")){
        btnReverse.classList.add("seleccionado");
        btnAlura.classList.remove("seleccionado");
        btnMorse.classList.remove("seleccionado");
    }
});