let interf = document.getElementById("text");

document.getElementById("un").addEventListener("click", function () {
    interf.innerText = interf.innerHTML + 1;
});

document.getElementById("deux").addEventListener("click", function () {
    interf.innerText = interf.innerHTML + 2;
});

document.getElementById("trois").addEventListener("click", function () {
    interf.innerText = interf.innerHTML + 3;
});

document.getElementById("quatre").addEventListener("click", function () {
    interf.innerText = interf.innerHTML + 4;
});

document.getElementById("cinq").addEventListener("click", function () {
    interf.innerText = interf.innerHTML + 5;
});

document.getElementById("six").addEventListener("click", function () {
    interf.innerText = interf.innerHTML + 6;
});

document.getElementById("sept").addEventListener("click", function () {
    interf.innerText = interf.innerHTML + 7;
});

document.getElementById("huit").addEventListener("click", function () {
    interf.innerText = interf.innerHTML + 8;
});

document.getElementById("neuf").addEventListener("click", function () {
    interf.innerText = interf.innerHTML + 9;
});

document.getElementById("zero").addEventListener("click", function () {
    interf.innerText = interf.innerHTML + 0;
});

document.getElementById("plus").addEventListener("click", function () {
    interf.innerText = interf.innerHTML + "+";
});

document.getElementById("moins").addEventListener("click", function () {
    interf.innerText = interf.innerHTML + "-";
});

document.getElementById("diviser").addEventListener("click", function () {
    interf.innerText = interf.innerHTML + "/";
});

document.getElementById("fois").addEventListener("click", function () {
    interf.innerText = interf.innerHTML + "*";
});

document.getElementById("parentheseO").addEventListener("click", function () {
    interf.innerText = interf.innerHTML + "(";
});

document.getElementById("parentheseC").addEventListener("click", function () {
    interf.innerText = interf.innerHTML + ")";
});

document.getElementById("modulo").addEventListener("click", function () {
    interf.innerText = interf.innerHTML + "&";
});

document.getElementById("virgule").addEventListener("click", function () {
    interf.innerText = interf.innerHTML + ".";
});

document.getElementById("reset").addEventListener("click", function () {
    interf.innerText = " ";
});

document.getElementById("sup").addEventListener("click", function () {
    interf.innerText = interf.innerHTML.slice(0, interf.innerHTML.length - 1);
});

document.getElementById("egale").addEventListener("click", function () {
        interf.innerHTML = eval(interf.innerHTML);
});

document.getElementById("copier").addEventListener("click", function () {
    let copie = document.createElement("textarea");
    copie.select();
    document.execCommand("copy")
});