let contar = 1;
document.querySelector("#radio1").checked = true;

setInterval ( function () {
    nextImg()
}, 4000)

function nextImg() {
    contar++;
    if (contar>4) {
        contar = 1; 
    }

    document.querySelector("#radio" + contar).checked = true;
}