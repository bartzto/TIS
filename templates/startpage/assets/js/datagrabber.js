

function start2() {
    grab();
    window.setInterval("grab()", 1000); //Aktualisiert wert im Absatnd von 10 Sekunden
}

function grab() {
    stat = getStatus();
    setRoom(getRoom());
    setStatus(stat);

}

function setRoom(room) {
        //Ermittelt Raumnummer aus der Config Datei
        roomElem = document.getElementById("room");
        roomElem.innerHTML = room; 
}

function setStatus(stat) {

    var time;
    var now = new Date();

    day = now.getDay();
    date = now.getDate();
    month = now.getMonth() + 1;
    year = now.getFullYear();

    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();

    real_date = year + "-" + month + "-" + day;
    real_time = (hours < 10) ? "0" + hours : hours;
    real_time += (minutes < 10) ? "0" + minutes : minutes;

    if(real_time == 1200) {
        var time = false;
    } else if(real_time >= 1200) {
        var time = true;
    }

    sta = document.getElementById("status");
    sta.innerHTML = getStatus(new Date(real_date), time, getRoom());
}

