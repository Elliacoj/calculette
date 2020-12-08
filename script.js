let interf = document.getElementById("text");
let buttons = document.getElementsByClassName("all");

for(let button of buttons) {
    button.addEventListener("click", function () {
            text.innerHTML = (button.innerHTML === "=") ? eval(text.innerHTML) : (button.innerHTML === "Reset") ? "" : (button.innerHTML === "Sup") ? interf.innerHTML.slice(0, interf.innerHTML.length - 1) : text.innerHTML+ button.innerHTML;
    });
}

document.getElementById("copier").addEventListener("click", function () {
    let range = document.createRange();
    range.selectNode(interf);
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
})