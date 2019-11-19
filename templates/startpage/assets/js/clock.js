function start() {
    time();
    window.setInterval("time()", 1000);
}

function time() {
    var now = new Date();
    day = now.getDate();
    month = now.getMonth() + 1;
    year = now.getFullYear();

    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();

    thetime = day + "." + month + "." + year + " ";
    thetime += (hours < 10) ? "0" + hours + ":" : hours + ":";
    thetime += (minutes < 10) ? "0" + minutes + ":" : minutes + ":";
    thetime += (seconds < 10) ? "0" + seconds : seconds;

    element = document.getElementById("uhr");
    element.innerHTML = thetime;
}