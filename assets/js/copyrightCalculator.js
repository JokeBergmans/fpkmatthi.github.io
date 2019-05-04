function calccopyright() {
    var theDate = new Date();
    return theDate.getFullYear();
}

function init() {
    document.getElementById('copyrightyear').innerHTML = calccopyright();
}

window.onload = init();
