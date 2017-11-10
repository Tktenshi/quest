var main = document.getElementById("quest");
document.getElementsByClassName("quest_el audio")[0].volume = 0.5;
var an = "JUQwJUJEJUQwJUIwJUQwJUJCJUQwJUI4JUQwJUIyJUQwJUIwJUQxJThG";

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var timerImg;
var img = document.getElementsByClassName("rand-img")[0];
setTimeout(function () {
    img.style.display = "block";
    timerImg = setInterval(function () {
        var l = rand(0, main.clientWidth - 50);
        var t = rand(0, main.clientHeight - 50);
        var p = -rand(0, 11) * 50;
        img.style.left = l + "px";
        img.style.top = t + "px";
        img.style.backgroundPosition = p + "px 0";
    }, 600); //600
}, 8000); //8000

img.onclick = function () {
    clearInterval(timerImg);
    document.querySelector('.hidedImage').click();
};

var inpPas = document.getElementsByClassName("inp-password")[0];

document.getElementsByClassName("btn-send")[0].onclick = function () {
    if (utoa(inpPas.value) !== an) {
        inpPas.classList.add("inp-password--error");
        setTimeout(function () {
            inpPas.classList.remove("inp-password--error");
            inpPas.value = "";
            inpPas.focus();
        }, 600); //600
    }
    else {
        window.location.href = "ordeal.html";
    }
};
