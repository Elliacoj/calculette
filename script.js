let interf = document.getElementById("text");
let buttons = document.getElementsByTagName("button");

for(let button of buttons) {
    button.addEventListener("click", function (){
        switch(button.innerHTML) {
            case "=":
                text.innerHTML = eval(text.innerHTML);
                break;
            case "Reset":
                text.innerHTML = "";
                break;
            case "Sup":
                interf.innerText = interf.innerHTML.slice(0, interf.innerHTML.length - 1);
                break;
            case "Copier":
                let range = document.createRange();
                range.selectNode(interf);
                window.getSelection().addRange(range);
                document.execCommand("copy");
                window.getSelection().removeAllRanges();
                break;
            default:
                text.innerHTML += button.innerHTML;
        }
    });
}