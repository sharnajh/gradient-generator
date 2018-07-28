let pickerA = document.getElementById("color-a"),
pickerB = document.getElementById("color-b")
let colorA = pickerA.value,
colorB = pickerB.value;
let hexTextA = document.getElementById("hexTextA"),
hexTextB = document.getElementById("hexTextB");

hexTextA.innerHTML = colorA;
hexTextB.innerHTML = colorB;

pickerA.addEventListener("input", function() {
    hexTextA.innerHTML = pickerA.value;
}, false);

pickerB.addEventListener("input", function() {
    hexTextB.innerHTML = pickerB.value;
}, false);

