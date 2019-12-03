<<<<<<< HEAD
//Variablen
var benutzer = "Unbekannt";
var zimmer = "nicht definiert";

var istBelegtmonvor = false;
var istBelegtmonnach = false;
var istBelegtdievor = false;
var istBelegtdienach = false;
var istBelegtmittvor = false;
var istBelegtmittnach = false;
var istBelegtdonvor = false;
var istBelegtdonnach = false;
var istBelegtfreivor = false;
var istBelegtfreinach = false;

//Holt sich das heutige Datum
var heute = new Date();
tag = heute.getDate();
monat = heute.getMonth();
jahr = heute.getFullYear();
var wochentag = heute.getDay();

//holt sich Montag
var mon = heute.getDate() - heute.getDay() + 1;
heute.setDate(mon);
tagAnfang = heute.getDate();
monatAnfang = heute.getMonth();
jahrAnfang = heute.getFullYear();

//Setzt den Tag auf Freitag
var frei = heute.getDate() + 4;
heute.setDate(frei);
tagEnde = heute.getDate();
monatEnde = heute.getMonth();
jahrEnde = heute.getFullYear();

//Alle Tage als Date
var montag = new Date();
montag.setDate(mon);
var dienstag = new Date();
die = mon + 1;
dienstag.setDate(die);
var mittwoch = new Date();
mitt = die + 1;
mittwoch.setDate(mitt);
var donnerstag = new Date();
don = mitt + 1;
donnerstag.setDate(don);
var freitag = new Date(); 
freitag.setDate(frei);

//Monatsnamen und Wochentagnamen definieren
var monatsnamen = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
var wochentagnamen = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];




//Wochenrückgabe
var wochenAnfang = tagAnfang + "." + monatsnamen[monatAnfang] + " " + jahrAnfang;
var wochenEnde = tagEnde + "." + monatsnamen[monatEnde] + " " + jahrEnde;
woche = wochenAnfang + " - " + wochenEnde;

document.getElementById("week").innerHTML = woche;






//Aktualisiert den Kalender
function aktualisieren() {
    belegungAktualisieren();
    window.setInterval(belegungAktualisieren(), 1000);
}

//Raum holen
function raumHolen() {
    zimmer = getRoom();
}

//Boolean zur Prüfung ob etwas belegt ist und ändern der Anzeigen
function belegungAnzeigen() {
    //Montagvormittag
    if (istBelegtmonvor) {
        document.getElementById("monvor").style.background = "#ff0000";
        document.getElementById("monvor").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("monvor").style.background = "#00ff21";
        document.getElementById("monvor").innerHTML = "Frei";
    }
    //Montagnachmittag
    if (istBelegtmonnach) {
        document.getElementById("monnach").style.background = "#ff0000";
        document.getElementById("monnach").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("monnach").style.background = "#00ff21";
        document.getElementById("monnach").innerHTML = "Frei";
    }
    //Dienstagvormittag
    if (istBelegtdievor) {
        document.getElementById("dievor").style.background = "#ff0000";
        document.getElementById("dievor").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("dievor").style.background = "#00ff21";
        document.getElementById("dievor").innerHTML = "Frei";
    }
    //Dienstagnachmittag
    if (istBelegtdienach) {
        document.getElementById("dienach").style.background = "#ff0000";
        document.getElementById("dienach").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("dienach").style.background = "#00ff21";
        document.getElementById("dienach").innerHTML = "Frei";
    }
    //Mittwochvormittag
    if (istBelegtmittvor) {
        document.getElementById("mittvor").style.background = "#ff0000";
        document.getElementById("mittvor").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("mittvor").style.background = "#00ff21";
        document.getElementById("mittvor").innerHTML = "Frei";
    }
    //Mittwochnachmittag
    if (istBelegtmittnach) {
        document.getElementById("mittnach").style.background = "#ff0000";
        document.getElementById("mittnach").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("mittnach").style.background = "#00ff21";
        document.getElementById("mittnach").innerHTML = "Frei";
    }
    //Donnerstagvormittag
    if (istBelegtdonvor) {
        document.getElementById("donvor").style.background = "#ff0000";
        document.getElementById("donvor").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("donvor").style.background = "#00ff21";
        document.getElementById("donvor").innerHTML = "Frei";
    }
    //Donnerstagnachmittag
    if (istBelegtdonnach) {
        document.getElementById("donnach").style.background = "#ff0000";
        document.getElementById("donnach").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("donnach").style.background = "#00ff21";
        document.getElementById("donnach").innerHTML = "Frei";
    }
    //Freitagvormittag
    if (istBelegtfreivor) {
        document.getElementById("freivor").style.background = "#ff0000";
        document.getElementById("freivor").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("freivor").style.background = "#00ff21";
        document.getElementById("freivor").innerHTML = "Frei";
    }
    //Freitagnachmittag
    if (istBelegtfreinach) {
        document.getElementById("freinach").style.background = "#ff0000";
        document.getElementById("freinach").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("freinach").style.background = "#00ff21";
        document.getElementById("freinach").innerHTML = "Frei";
    }
}



//fügt einen Benutzer mit der ausgewählten Zeit in den Plan
function belegen(neuUser, zeit) {
    benutzer = neuUser;
    if ((zeit == "montagvor")) {
        istBelegtmonvor = true;
    }
    if ((zeit == "montagnach")) {
        istBelegtmonnach = true;
    }
    if ((zeit == "dienstagvor")) {
        istBelegtdievor = true;
    }
    if ((zeit == "dienstagnach")) {
        istBelegtdienach = true;
    }
    if ((zeit == "mittwochvor")) {
        istBelegtmittvor = true;
    }
    if ((zeit == "mittwochnach")) {
        istBelegtmittnach = true;
    }
    if ((zeit == "donnerstagvor")) {
        istBelegtdonvor = true;
    }
    if ((zeit == "donnerstagnach")) {
        istBelegtdonnach = true;
    }
    if ((zeit == "freitagvor")) {
        istBelegtfreivor = true;
    }
    if ((zeit == "freitagnach")) {
        istBelegtfreinach = true;
    }

    belegungAnzeigen();
}

function freiMachen(zeit) {
    if ((zeit == "montagvor")) {
        istBelegtmonvor = false;
    }
    if ((zeit == "montagnach")) {
        istBelegtmonnach = false;
    }
    if ((zeit == "dienstagvor")) {
        istBelegtdievor = false;
    }
    if ((zeit == "dienstagnach")) {
        istBelegtdienach = false;
    }
    if ((zeit == "mittwochvor")) {
        istBelegtmittvor = false;
    }
    if ((zeit == "mittwochnach")) {
        istBelegtmittnach = false;
    }
    if ((zeit == "donnerstagvor")) {
        istBelegtdonvor = false;
    }
    if ((zeit == "donnerstagnach")) {
        istBelegtdonnach = false;
    }
    if ((zeit == "freitagvor")) {
        istBelegtfreivor = false;
    }
    if ((zeit == "freitagnach")) {
        istBelegtfreinach = false;
    }

    belegungAnzeigen();
}




//holt sich die Daten aus der Datenbank und fügt sie ein 
function belegungAbfragen(datum, istnachmittag, raum) {
    user = getBookedBy(datum, istnachmittag, raum);
    today = datum;
    weekday = today.getDay();

    if (user != null) {
        if ((weekday == 1)) {
            if ((istnachmittag == false)) {
                belegen(user, "montagvor");
            }
            if ((istnachmittag == true)) {
                belegen(user, "montagnach");
            }

        }
        if ((weekday == 2)) {
            if ((istnachmittag == false)) {
                belegen(user, "dienstagvor");
            }
            if ((istnachmittag == true)) {
                belegen(user, "dienstagnach");
            }

        }
        if ((weekday == 3)) {
            if ((istnachmittag == false)) {
                belegen(user, "mittwochvor");
            }
            if ((istnachmittag == true)) {
                belegen(user, "mittwochnach");
            }

        }
        if ((weekday == 4)) {
            if ((istnachmittag == false)) {
                belegen(user, "donnerstagvor");
            }
            if ((istnachmittag == true)) {
                belegen(user, "donnerstagnach");
            }

        }
        if ((weekday == 5)) {
            if ((istnachmittag == false)) {
                belegen(user, "freitagvor");
            }
            if ((istnachmittag == true)) {
                belegen(user, "freitagnach");
            }

        }


    } else {
        if (user == null) {
            if ((weekday == 1)) {
                if ((istnachmittag == false)) {
                    freiMachen("montagvor");
                }
                if ((istnachmittag == true)) {
                    freiMachen("montagnach");
                }

            }
            if ((weekday == 2)) {
                if ((istnachmittag == false)) {
                    freiMachen("dienstagvor");
                }
                if ((istnachmittag == true)) {
                    freiMachen("dienstagnach");
                }

            }
            if ((weekday == 3)) {
                if ((istnachmittag == false)) {
                    freiMachen("mittwochvor");
                }
                if ((istnachmittag == true)) {
                    freiMachen("mittwochnach");
                }

            }
            if ((weekday == 4)) {
                if ((istnachmittag == false)) {
                    freiMachen("donnerstagvor");
                }
                if ((istnachmittag == true)) {
                    freiMachen("donnerstagnach");
                }

            }
            if ((weekday == 5)) {
                if ((istnachmittag == false)) {
                    freiMachen("freitagvor");
                }
                if ((istnachmittag == true)) {
                    freiMachen("freitagnach");
                }

            }
        }
    }

}

function belegungAktualisieren() {
    raumHolen();
    belegungAbfragen(montag, false, zimmer);
    belegungAbfragen(montag, true, zimmer);
    belegungAbfragen(dienstag, false, zimmer);
    belegungAbfragen(dienstag, true, zimmer);
    belegungAbfragen(mittwoch, false, zimmer);
    belegungAbfragen(mittwoch, true, zimmer);
    belegungAbfragen(donnerstag, false, zimmer);
    belegungAbfragen(donnerstag, true,zimmer);
    belegungAbfragen(freitag, false, zimmer);
    belegungAbfragen(freitag, true, zimmer);
}





=======
//Variablen
var benutzer = "Unbekannt";
var zimmer = "nicht definiert";

var istBelegtmonvor = false;
var istBelegtmonnach = false;
var istBelegtdievor = false;
var istBelegtdienach = false;
var istBelegtmittvor = false;
var istBelegtmittnach = false;
var istBelegtdonvor = false;
var istBelegtdonnach = false;
var istBelegtfreivor = false;
var istBelegtfreinach = false;

//Holt sich das heutige Datum
var heute = new Date();
tag = heute.getDate();
monat = heute.getMonth();
jahr = heute.getFullYear();
var wochentag = heute.getDay();

//holt sich Montag
var mon = heute.getDate() - heute.getDay() + 1;
heute.setDate(mon);
tagAnfang = heute.getDate();
monatAnfang = heute.getMonth();
jahrAnfang = heute.getFullYear();

//Setzt den Tag auf Freitag
var frei = heute.getDate() + 4;
heute.setDate(frei);
tagEnde = heute.getDate();
monatEnde = heute.getMonth();
jahrEnde = heute.getFullYear();

//Alle Tage als Date
var montag = new Date();
montag.setDate(mon);
var dienstag = new Date();
die = mon + 1;
dienstag.setDate(die);
var mittwoch = new Date();
mitt = die + 1;
mittwoch.setDate(mitt);
var donnerstag = new Date();
don = mitt + 1;
donnerstag.setDate(don);
var freitag = new Date(); 
freitag.setDate(frei);

//Monatsnamen und Wochentagnamen definieren
var monatsnamen = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
var wochentagnamen = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];




//Wochenrückgabe
var wochenAnfang = tagAnfang + "." + monatsnamen[monatAnfang] + " " + jahrAnfang;
var wochenEnde = tagEnde + "." + monatsnamen[monatEnde] + " " + jahrEnde;
woche = wochenAnfang + " - " + wochenEnde;

document.getElementById("week").innerHTML = woche;






//Aktualisiert den Kalender
function aktualisieren() {
    belegungAktualisieren();
    window.setInterval(belegungAktualisieren(), 1000);
}

//Raum holen
function raumHolen() {
    zimmer = getRoom();
}

//Boolean zur Prüfung ob etwas belegt ist und ändern der Anzeigen
function belegungAnzeigen() {
    //Montagvormittag
    if (istBelegtmonvor) {
        document.getElementById("monvor").style.background = "#ff0000";
        document.getElementById("monvor").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("monvor").style.background = "#00ff21";
        document.getElementById("monvor").innerHTML = "Frei";
    }
    //Montagnachmittag
    if (istBelegtmonnach) {
        document.getElementById("monnach").style.background = "#ff0000";
        document.getElementById("monnach").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("monnach").style.background = "#00ff21";
        document.getElementById("monnach").innerHTML = "Frei";
    }
    //Dienstagvormittag
    if (istBelegtdievor) {
        document.getElementById("dievor").style.background = "#ff0000";
        document.getElementById("dievor").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("dievor").style.background = "#00ff21";
        document.getElementById("dievor").innerHTML = "Frei";
    }
    //Dienstagnachmittag
    if (istBelegtdienach) {
        document.getElementById("dienach").style.background = "#ff0000";
        document.getElementById("dienach").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("dienach").style.background = "#00ff21";
        document.getElementById("dienach").innerHTML = "Frei";
    }
    //Mittwochvormittag
    if (istBelegtmittvor) {
        document.getElementById("mittvor").style.background = "#ff0000";
        document.getElementById("mittvor").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("mittvor").style.background = "#00ff21";
        document.getElementById("mittvor").innerHTML = "Frei";
    }
    //Mittwochnachmittag
    if (istBelegtmittnach) {
        document.getElementById("mittnach").style.background = "#ff0000";
        document.getElementById("mittnach").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("mittnach").style.background = "#00ff21";
        document.getElementById("mittnach").innerHTML = "Frei";
    }
    //Donnerstagvormittag
    if (istBelegtdonvor) {
        document.getElementById("donvor").style.background = "#ff0000";
        document.getElementById("donvor").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("donvor").style.background = "#00ff21";
        document.getElementById("donvor").innerHTML = "Frei";
    }
    //Donnerstagnachmittag
    if (istBelegtdonnach) {
        document.getElementById("donnach").style.background = "#ff0000";
        document.getElementById("donnach").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("donnach").style.background = "#00ff21";
        document.getElementById("donnach").innerHTML = "Frei";
    }
    //Freitagvormittag
    if (istBelegtfreivor) {
        document.getElementById("freivor").style.background = "#ff0000";
        document.getElementById("freivor").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("freivor").style.background = "#00ff21";
        document.getElementById("freivor").innerHTML = "Frei";
    }
    //Freitagnachmittag
    if (istBelegtfreinach) {
        document.getElementById("freinach").style.background = "#ff0000";
        document.getElementById("freinach").innerHTML = "Besetzt von " + benutzer;
    } else {
        document.getElementById("freinach").style.background = "#00ff21";
        document.getElementById("freinach").innerHTML = "Frei";
    }
}



//fügt einen Benutzer mit der ausgewählten Zeit in den Plan
function belegen(neuUser, zeit) {
    benutzer = neuUser;
    if ((zeit == "montagvor")) {
        istBelegtmonvor = true;
    }
    if ((zeit == "montagnach")) {
        istBelegtmonnach = true;
    }
    if ((zeit == "dienstagvor")) {
        istBelegtdievor = true;
    }
    if ((zeit == "dienstagnach")) {
        istBelegtdienach = true;
    }
    if ((zeit == "mittwochvor")) {
        istBelegtmittvor = true;
    }
    if ((zeit == "mittwochnach")) {
        istBelegtmittnach = true;
    }
    if ((zeit == "donnerstagvor")) {
        istBelegtdonvor = true;
    }
    if ((zeit == "donnerstagnach")) {
        istBelegtdonnach = true;
    }
    if ((zeit == "freitagvor")) {
        istBelegtfreivor = true;
    }
    if ((zeit == "freitagnach")) {
        istBelegtfreinach = true;
    }

    belegungAnzeigen();
}

function freiMachen(zeit) {
    if ((zeit == "montagvor")) {
        istBelegtmonvor = false;
    }
    if ((zeit == "montagnach")) {
        istBelegtmonnach = false;
    }
    if ((zeit == "dienstagvor")) {
        istBelegtdievor = false;
    }
    if ((zeit == "dienstagnach")) {
        istBelegtdienach = false;
    }
    if ((zeit == "mittwochvor")) {
        istBelegtmittvor = false;
    }
    if ((zeit == "mittwochnach")) {
        istBelegtmittnach = false;
    }
    if ((zeit == "donnerstagvor")) {
        istBelegtdonvor = false;
    }
    if ((zeit == "donnerstagnach")) {
        istBelegtdonnach = false;
    }
    if ((zeit == "freitagvor")) {
        istBelegtfreivor = false;
    }
    if ((zeit == "freitagnach")) {
        istBelegtfreinach = false;
    }

    belegungAnzeigen();
}




//holt sich die Daten aus der Datenbank und fügt sie ein 
function belegungAbfragen(datum, istnachmittag, raum) {
    user = getBookedBy(datum, istnachmittag, raum);
    today = datum;
    weekday = today.getDay();

    if (user != null) {
        if ((weekday == 1)) {
            if ((istnachmittag == false)) {
                belegen(user, "montagvor");
            }
            if ((istnachmittag == true)) {
                belegen(user, "montagnach");
            }

        }
        if ((weekday == 2)) {
            if ((istnachmittag == false)) {
                belegen(user, "dienstagvor");
            }
            if ((istnachmittag == true)) {
                belegen(user, "dienstagnach");
            }

        }
        if ((weekday == 3)) {
            if ((istnachmittag == false)) {
                belegen(user, "mittwochvor");
            }
            if ((istnachmittag == true)) {
                belegen(user, "mittwochnach");
            }

        }
        if ((weekday == 4)) {
            if ((istnachmittag == false)) {
                belegen(user, "donnerstagvor");
            }
            if ((istnachmittag == true)) {
                belegen(user, "donnerstagnach");
            }

        }
        if ((weekday == 5)) {
            if ((istnachmittag == false)) {
                belegen(user, "freitagvor");
            }
            if ((istnachmittag == true)) {
                belegen(user, "freitagnach");
            }

        }


    } else {
        if (user == null) {
            if ((weekday == 1)) {
                if ((istnachmittag == false)) {
                    freiMachen("montagvor");
                }
                if ((istnachmittag == true)) {
                    freiMachen("montagnach");
                }

            }
            if ((weekday == 2)) {
                if ((istnachmittag == false)) {
                    freiMachen("dienstagvor");
                }
                if ((istnachmittag == true)) {
                    freiMachen("dienstagnach");
                }

            }
            if ((weekday == 3)) {
                if ((istnachmittag == false)) {
                    freiMachen("mittwochvor");
                }
                if ((istnachmittag == true)) {
                    freiMachen("mittwochnach");
                }

            }
            if ((weekday == 4)) {
                if ((istnachmittag == false)) {
                    freiMachen("donnerstagvor");
                }
                if ((istnachmittag == true)) {
                    freiMachen("donnerstagnach");
                }

            }
            if ((weekday == 5)) {
                if ((istnachmittag == false)) {
                    freiMachen("freitagvor");
                }
                if ((istnachmittag == true)) {
                    freiMachen("freitagnach");
                }

            }
        }
    }

}

function belegungAktualisieren() {
    raumHolen();
    belegungAbfragen(montag, false, zimmer);
    belegungAbfragen(montag, true, zimmer);
    belegungAbfragen(dienstag, false, zimmer);
    belegungAbfragen(dienstag, true, zimmer);
    belegungAbfragen(mittwoch, false, zimmer);
    belegungAbfragen(mittwoch, true, zimmer);
    belegungAbfragen(donnerstag, false, zimmer);
    belegungAbfragen(donnerstag, true,zimmer);
    belegungAbfragen(freitag, false, zimmer);
    belegungAbfragen(freitag, true, zimmer);
}





>>>>>>> b531cbc68723097d345dd20602d1ad1b9524657e
