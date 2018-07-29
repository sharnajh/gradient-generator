let pickerA = document.getElementById("color-a"),
pickerB = document.getElementById("color-b");

const colorA = pickerA.value,
colorB = pickerB.value;

let hexTextA = document.getElementById("hexTextA"),
hexTextB = document.getElementById("hexTextB");

let preview = document.getElementById("preview"),
see = document.getElementById("see");

let direction = document.getElementsByClassName("direction");

let generate = document.getElementById("generate");

hexTextA.innerHTML = colorA;
hexTextB.innerHTML = colorB;

let code

for(let i = 0; i < direction.length; i++ ) {

    direction[i].addEventListener("click", (event) => {
        document.getElementById("direction-input").innerText = `${direction[i].value}`;
        document.body.style = `background: linear-gradient(to ${direction[i].value}, ${hexTextA.innerHTML} 0%, ${hexTextB.innerHTML} 100%)`;
    });

    pickerA.addEventListener("input", (event) => {
        hexTextA.innerHTML = pickerA.value;
        document.body.style = `background: linear-gradient(to bottom left, ${hexTextA.innerHTML} 0%, ${hexTextB.innerHTML} 100%)`;
    }, false);
    
    pickerB.addEventListener("input", (event) => {
        hexTextB.innerHTML = pickerB.value;
        document.body.style = `background: linear-gradient(to bottom left, ${hexTextA.innerHTML} 0%, ${hexTextB.innerHTML} 100%)`;
    }, false);

};

generate.addEventListener("click", (event) => {
    let code = `background: linear-gradient(to ${document.getElementById("direction-input").textContent}, ${hexTextA.innerHTML} 0%, ${hexTextB.innerHTML} 100%)`;
    let codeToCopy = document.createElement('textarea');
    codeToCopy.value = code;
    document.body.appendChild(codeToCopy);
    codeToCopy.select();
    document.execCommand('copy');
    document.body.removeChild(codeToCopy);
})
