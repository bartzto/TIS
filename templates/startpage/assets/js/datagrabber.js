function start2() {
    grab();
    window.setInterval("grab()", 10000); //Aktualisiert wert im Absatnd von 10 Sekunden
}

function grab() {
    stat = getStatus();
    setRoom(getRoom());
    setStatus(getRoom());
}

function setRoom(room) {
        //Ermittelt Raumnummer aus der Config Datei
        roomElem = document.getElementById("room");
        roomElem.innerHTML = room; 
}

function setStatus(room) {

    var now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    thetime = (hours < 10) ? "0" + hours + "" : hours + "";
    thetime += (minutes < 10) ? "0" + minutes + "" : minutes + "";

    date = now.getDate();
    month = now.getMonth() + 1;
    year = now.getFullYear();

    thedate = year + "-" + month + "-" + date;

    try {
        var status = db.prepare("SELECT status FROM tis_room WITH " + room + ", " + thedate + ";");

        if(thetime == 1200) {
            if(status == 1) {
                sta = document.getElementById("status");
                sta.innerHTML = "Belegt";
                sta.style.color = "red"
            } else {
                sta = document.getElementById("status");
                sta.innerHTML = "Frei";
                sta.style.color = "green";
            }
        } else if(!(thetime == 1200)) {
            if(status == 0) {
                sta = document.getElementById("status");
                sta.innerHTML = "Belegt";
                sta.style.color = "red"
            } else {
                sta = document.getElementById("status");
                sta.innerHTML = "Frei";
                sta.style.color = "green";
            }
        }

    } catch {
        window.location = "../404/index.html";
    }
    
}