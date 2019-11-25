function start() {
    time();
    window.setInterval("time()", 1000);
}

//Test
function time() {
    var now = new Date();
    var dayname = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag' ];

    day = now.getDay();
    date = now.getDate();
    month = now.getMonth() + 1;
    year = now.getFullYear();

    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();

    thetime = dayname[day] + ", " + date + "." + month + "." + year + " ";
    thetime += (hours < 10) ? "0" + hours + ":" : hours + ":";
    thetime += (minutes < 10) ? "0" + minutes + ":" : minutes + ":";
    thetime += (seconds < 10) ? "0" + seconds : seconds;

    element = document.getElementById("uhr");
    element.innerHTML = thetime;
}