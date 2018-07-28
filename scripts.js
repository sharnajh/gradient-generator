let pickerA = document.getElementById("color-a"),
pickerB = document.getElementById("color-b")
let colorA = pickerA.value,
colorB = pickerB.value;
let hexTextA = document.getElementById("hexTextA"),
hexTextB = document.getElementById("hexTextB");
let preview = document.getElementById("preview"),
see = document.getElementById("see");

hexTextA.innerHTML = colorA;
hexTextB.innerHTML = colorB;


pickerA.addEventListener("input", function() {
    hexTextA.innerHTML = pickerA.value;
    document.body.style = `background: linear-gradient(to bottom left, ${hexTextA.innerHTML} 0%, ${hexTextB.innerHTML} 100%`;
}, false);

pickerB.addEventListener("input", function() {
    hexTextB.innerHTML = pickerB.value;
    document.body.style = `background: linear-gradient(to bottom left, ${hexTextA.innerHTML} 0%, ${hexTextB.innerHTML} 100%`;
}, false);


