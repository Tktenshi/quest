var main = document.getElementById("space");

var custAlert = document.getElementsByClassName("cust-alert")[0];
var contAlert = document.getElementsByClassName("cont-alert")[0];

var arrImg = document.getElementsByClassName("space-img");
var imgCount = 12;
var angle = 360 / imgCount;
var arrSpCont = document.getElementsByClassName("space-container");
var contSize = changeImgContSize(13.6);   //340px
var ke = "ODc1";
var step = 1.28;    //32

function changeImgContSize(size) {
    contSize = size;
    arrSpCont[0].style.width = size * 2 + "rem";
    arrSpCont[1].style.width = size * 2 + "rem";
    arrSpCont[0].style.height = size * 2 + "rem";
    arrSpCont[1].style.height = size * 2 + "rem";
    return size;
}

function positioned(start, oval) {
    start = start || 0;
    var m = 0;
    var act = oval ? 1 : 0;

    for (var l = 0; l < imgCount; l++) {
        arrImg[start + l].style.transform = "rotate(" + l * angle + "deg) translate(" + (contSize + step * m) + "rem) rotate(-" + l * angle + "deg)";
        //arrImg[start + l].style.top = "ФОРМУЛА";
        //arrImg[start + l].style.left = "ФОРМУЛА";
        if (oval) {
            arrImg[start + l].style.setProperty('--img-size', 5.12 + 'rem');   //(512 / 4) + 'px'
            arrImg[start + l].style.top = "35%";
            arrImg[start + l].style.left = "35%";
        }
        else {
            arrImg[start + l].style.top = "39%";
            arrImg[start + l].style.left = "39%";
        }
        m += act;
        if (m === 0 || m === 3) act = -act;
    }
}

positioned();

var inpCont = document.getElementsByClassName("input-container")[0];
inpCont.addEventListener("focus", function () {
    this.classList.add('opacity');
}, true);

inpCont.addEventListener("blur", function () {
    this.classList.remove('opacity');
}, true);

var arrInpPas = document.getElementsByClassName("inp-password");

var btnSend = inpCont.getElementsByClassName("btn-send")[0];
btnSend.onclick = function () {
    if (utoa(arrInpPas[0].value + arrInpPas[1].value + arrInpPas[2].value) !== ke) {
        for (var i = 0; i < arrInpPas.length; i++) {
            arrInpPas[i].classList.add("inp-password--error");
        }
        setTimeout(function () {
            for (var i = 0; i < arrInpPas.length; i++) {
                arrInpPas[i].classList.remove("inp-password--error");
                arrInpPas[i].value = "";
            }
            arrInpPas[0].focus();
        }, 600); //600
    }
    else {

        var btn_text = "Перейти к следующему испытанию";
        var message = "Всё верно! Вы молодцы! Запомните введённую комбинацию";
        myAlert(message, btn_text, function () {
            console.log("Ура!");
            window.location.href = '/libra.html';
        });
        // window.location.href = "/ordeal.html";
    }
};

for (var z = 0; z < arrInpPas.length - 1; z++) {
    (function (z) {
        arrInpPas[z].onkeyup = function () {
            if (this.value.length === 1)
                arrInpPas[z + 1].focus()
        };
    })(z)
}

arrInpPas[arrInpPas.length - 1].onkeyup = function () {
    if (this.value.length === 1)
        btnSend.focus()
};

var contGif = document.getElementsByClassName('container-gif')[0];
contGif.onclick = function (e) {
    var x = e.offsetX === undefined ? e.layerX : e.offsetX;
    var y = e.offsetY === undefined ? e.layerY : e.offsetY;
    // console.log(x + 'x' + y);
    if (x > 74 && x < 122 && y > 207 && y < 240) {
        arrSpCont[1].classList.remove("hide");
        changeImgContSize(9.6);     //240
        positioned(0, true);
        positioned(12, true);
        contGif.onclick = function () {
        };
        turnOnFind();
    }
};

function turnOnFind() {
    var count = 0;

    clickToFind("taurus", 71, 82, 80, 90);
    clickToFind("scorpio", 46, 63, 104, 122);
    clickToFind("aquarius", 38, 44, 17, 23);

    function clickToFind(name, x1, x2, y1, y2) {
        var el1 = document.querySelector(".space-img[src=\"img/space/" + name + "_cat.png\"]");
        var el2 = document.querySelector(".space-img[src=\"img/space/" + name + "_cat2.png\"]");
        el1.onclick = el2.onclick = function (e) {
            var x = e.offsetX === undefined ? e.layerX : e.offsetX;
            var y = e.offsetY === undefined ? e.layerY : e.offsetY;
            // console.log(x + 'x' + y);
            if (x > x1 && x < x2 && y > y1 && y < y2) {
                el1.style.borderRadius = el2.style.borderRadius = "50%";
                el1.style.boxShadow = el2.style.boxShadow = "0px 0px 31px 16px white";
                count++;
                if (count === 3) allFind();
                el1.onclick = el2.onclick = function (e) {
                }
            }
        };
    }

    function allFind() {
        arrSpCont[1].classList.add("hide");
        changeImgContSize(13.6);
        positioned();
    }
} 


// positionAt(el1, "top", document.getElementById(123));
// function positionAt(anchor, position, elem) {
//
//     var anchorCoords = anchor.getBoundingClientRect();
//
//     switch (position) {
//         case "top":
//             elem.style.left = anchorCoords.left + 38 + "px";
//             elem.style.top = anchorCoords.top + 17 + "px";
//             break;
//
//         case "right":
//             elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
//             elem.style.top = anchorCoords.top + "px";
//             break;
//
//         case "bottom":
//             elem.style.left = anchorCoords.left + "px";
//             elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
//             break;
//     }
//
// }