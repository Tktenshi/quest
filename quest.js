var main = document.getElementById("quest");
var i = 1;

// начать повторы с интервалом 2 сек
var timerId = setInterval(function () {
    // debugger
    main.style.backgroundImage = "url('img/galaxy" + i + ".jpg')";
    i++;
    if (i === 5) i = 0;
}, 7000);

// // через 5 сек остановить повторы
// setTimeout(function () {
//     clearInterval(timerId);
// }, 80000);