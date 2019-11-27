//const sqlite3 = require('sqlite3').verbose();
var sqlite = require("better-sqlite3");
var root = "/home/lukas/development/electron/TIS" 
// open database in memor
//var db = new sqlite("example.db");
var db = new sqlite(root+"/database/tis.db");

function formatDate (date){
  console.log(date);
  return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
}
function formatName (name){
  return name.vorname + " " +name.nachname;
}


function getAllUsers(){
  var querry = 'SELECT * FROM `tis_user`;'
  return db.prepare(querry).all();
}

function getBookedBy(date, isafternoon){
  var querry = 'SELECT vorname, nachname \
    FROM tis_room, tis_user \
    WHERE tis_user.user = tis_room.user\
    AND tis_room.isafternoon = ' + isafternoon+' \
    AND tis_room.date = "'+ formatDate(date)+'";';
  console.log(querry);
  return formatName(db.prepare(querry).get());
}

function getSatus(date,isafternoon){
  
  return status; // {status: 0; name: "Lukas Holzner"; reserveduntil: "29.11.2019"}
}

console.log(getBookedBy(new Date("2019-11-22"),true));
