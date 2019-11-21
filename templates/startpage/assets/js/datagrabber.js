

function start2() {
    grab();
    window.setInterval("grab()", 1000); //Aktualisiert wert im Absatnd von 10 Sekunden
}

function grab() {

    room = document.getElementById("room");
    room.innerHTML = getRoom();

    stat = getStatus();
    sta = document.getElementById("status");
    sta.innerHTML = stat? "Frei":"Belegt";
    sta.style.color= stat? "green": "red";
}