var i = 1;
var imgCache = [];

for (var k = 0; k < 5; k++) {
    imgCache.push(new Image());
    imgCache[k].src = 'img/galaxy' + k + '.jpg';
}

setInterval(function () {
    main.style.backgroundImage = "url( " + imgCache[i].src + ")";
    // main.style.backgroundImage = "url('img/galaxy" + i + ".jpg')";
    i++;
    if (i === 5) i = 0;
}, 7000);

function utoa(str) {
    return btoa(encodeURIComponent(str));
}