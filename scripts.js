let pickerA = document.getElementById("color-a"),
pickerB = document.getElementById("color-b")
let colorA = pickerA.value,
colorB = pickerB.value;


document.getElementById("color-a-value").innerHTML = colorA;
document.getElementById("color-b-value").innerHTML = colorB;

pickerA.addEventListener("input", function() {
    document.getElementById("color-a-value").innerHTML = colorA;
    console.log(colorA);
}, false);

pickerB.addEventListener("input", function() {
    document.getElementById("color-b-value").innerHTML = colorB;
    console.log(colorB);
}, false);