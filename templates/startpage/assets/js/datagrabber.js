function start2() {
    grab();
    window.setInterval("grab()", 10000); //Aktualisiert wert im Absatnd von 10 Sekunden
}

function grab() {

    var time_test = 1250;

    var now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    thetime = (hours < 10) ? "0" + hours + "" : hours + "";
    thetime += (minutes < 10) ? "0" + minutes + "" : minutes + "";

    if(thetime == time_test) {
        sta = document.getElementById("status");
        sta.innerHTML = "Belegt"
    }

    room = document.getElementById("room");
    room.innerHTML = getRoom();

    stat = getStatus();
    //sta = document.getElementById("status");
    //sta.innerHTML = stat? "Volkan":"stinkt";
    //sta.style.color= stat? "green": "red";

}

function updater() {
}