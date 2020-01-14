

function start2() {
    grabStartpage();
    window.setInterval("grabStartpage()", 5000); //Aktualisiert wert im Absatnd von 10 Sekunden
}

function grabStartpage() {
    console.log((new Date).getHours());
    var room = getRoom();
    var isafternoon = (new Date).getHours() > 11 ? 1 : 0;

    stat = getStatus(new Date, isafternoon, room);
    setRoom(room);
    setStatus(stat);
     
}

function setRoom(room) {
    //Ermittelt Raumnummer aus der Config Datei
    roomElem = document.getElementById("room");
    roomElem.innerHTML = room;
}

function setStatus(stat) {
    sta = document.getElementById("status");
    sta2 = document.getElementById("date");
    sta3 = document.getElementById("reservedby");

    if(stat['status'] == 1){
        sta.innerHTML = "Besetzt";
        sta.style.color = "red";
        sta2.innerHTML = "<strong>Bis:</strong> " + formatDate(stat['reserverduntil']);
        sta3.innerHTML = "<strong>Von:</strong> " + stat['name'];
    } else {
        sta = document.getElementById("status");
        sta.innerHTML = "Frei";
        sta.style.color = "green";
        sta2.innerHTML = "";
        sta3.innerHTML = "";
    }

    
    
}

