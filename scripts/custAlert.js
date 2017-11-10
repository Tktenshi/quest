var contCustAlert = document.getElementsByTagName("body")[0];

function myAlert(message, btn_text, callBack) {
    var html = "<div class='cont-alert'></div>" +
        " <div class='cust-alert'>" +
        " <span>" + message + "</span>" +
        " <button class='btn-send quest_el cust-alert_btn-next' tabindex='1'>" + btn_text + "</button>" +
        "</div>";
    var myDiv = document.createElement('div')
    myDiv.innerHTML = html;
    // contCustAlert.innerHTML = html + contCustAlert.innerHTML;
    contCustAlert.appendChild(myDiv);
    var myBtn = contCustAlert.getElementsByClassName('btn-send quest_el cust-alert_btn-next')[0];
    myBtn.focus();
    myBtn.onclick = function () {
        callBack(myDiv);
    };
}