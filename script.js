let interface = document.getElementById("text");

document.getElementById("un").addEventListener("click", function () {
    interface.innerText = interface.innerHTML + 1;
});

document.getElementById("deux").addEventListener("click", function () {
    interface.innerText = interface.innerHTML + 2;
});

document.getElementById("trois").addEventListener("click", function () {
    interface.innerText = interface.innerHTML + 3;
});

document.getElementById("quatre").addEventListener("click", function () {
    interface.innerText = interface.innerHTML + 4;
});

document.getElementById("cinq").addEventListener("click", function () {
    interface.innerText = interface.innerHTML + 5;
});

document.getElementById("six").addEventListener("click", function () {
    interface.innerText = interface.innerHTML + 6;
});

document.getElementById("sept").addEventListener("click", function () {
    interface.innerText = interface.innerHTML + 7;
});

document.getElementById("huit").addEventListener("click", function () {
    interface.innerText = interface.innerHTML + 8;
});

document.getElementById("neuf").addEventListener("click", function () {
    interface.innerText = interface.innerHTML + 9;
});

document.getElementById("zero").addEventListener("click", function () {
    interface.innerText = interface.innerHTML + 0;
});

document.getElementById("plus").addEventListener("click", function () {
    interface.innerText = interface.innerHTML + "+";
});

document.getElementById("moins").addEventListener("click", function () {
    interface.innerText = interface.innerHTML + "-";
});

document.getElementById("diviser").addEventListener("click", function () {
    interface.innerText = interface.innerHTML + "/";
});

document.getElementById("fois").addEventListener("click", function () {
    interface.innerText = interface.innerHTML + "*";
});

document.getElementById("parentheseO").addEventListener("click", function () {
    interface.innerText = interface.innerHTML + "(";
});

document.getElementById("parentheseC").addEventListener("click", function () {
    interface.innerText = interface.innerHTML + ")";
});

document.getElementById("modulo").addEventListener("click", function () {
    interface.innerText = interface.innerHTML + "&";
});

document.getElementById("virgule").addEventListener("click", function () {
    interface.innerText = interface.innerHTML + ".";
});

document.getElementById("reset").addEventListener("click", function () {
    interface.innerText = " ";
});

document.getElementById("egale").addEventListener("click", function () {
    if(isNaN(eval(interface.innerHTML))) {
        interface.innerHTML = "Il y a une erreur dans le calcul";
    }
    else {
        interface.innerHTML = eval(interface.innerHTML);
    }
});