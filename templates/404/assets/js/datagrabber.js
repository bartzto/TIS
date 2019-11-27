function start2() {
    grab();
    window.setInterval("grab()", 10000); //Aktualisiert wert im Absatnd von 10 Sekunden
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
    sta = document.getElementById("status");
    sta.innerHTML = stat? "Frei":"Belegt";
    sta.style.color= stat? "green": "red";

    var now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    thetime = (hours < 10) ? "0" + hours + "" : hours + "";
    thetime += (minutes < 10) ? "0" + minutes + "" : minutes + "";

    if(thetime == time_test) {
        sta = document.getElementById("status");
        sta.innerHTML = "Belegt"
    }
}