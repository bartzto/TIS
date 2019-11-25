function update() {
    updater();
    window.setInterval("updater()", 1000);
}

function updater() {
    var room = getRoom();

    var jetzt = new Date();

    day = jetzt.getDay();
    date = jetzt.getDate();
    month = jetzt.getMonth() + 1;
    year = jetzt.getFullYear();

    var time_hour = jetzt.getHours();
    var time_minutes = jetzt.getMinutes();

    thetime = date + "." + month + "." + year + " ";
    thetime += (time_hour < 10) ? "0" + time_hour + ":" : time_hour + ":";
    thetime += (time_minutes < 10) ? "0" + time_minutes + ":" : time_minutes + ":";

    ele = document.getElementById("reservedby");
    ele.innerHTML = thetime;
}