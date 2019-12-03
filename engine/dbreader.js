//const sqlite3 = require('sqlite3').verbose();
var sqlite = require("better-sqlite3");
var root = "C:/Users/Tobias Bartz/Documents/VisualStudioCode/TIS" 
// open database in memor
//var db = new sqlite("example.db");
var db = new sqlite(root+"/database/tis.db");

function formatDate (date){
  return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
}
function formatName (name){
  return name.vorname + " " +name.nachname;
}


function getAllUsers(){
  var querry = 'SELECT * FROM `tis_user`;'
  return db.prepare(querry).all();
}

function getBookedBy(date, isafternoon,room){
  var querry = 'SELECT vorname, nachname \
    FROM tis_room, tis_user \
    WHERE tis_user.user = tis_room.user\
    AND tis_room.isafternoon = ' + isafternoon +' \
    AND tis_room.roomnr = "' + room+'" \
    AND tis_room.date = "'+ formatDate(date)+'";';
  var name = db.prepare(querry).get();
  name = name != null ? formatName(name) : null;

  return name;
}

function getReserverdUntil(date,isafternoon,room){
  console.log(date)
  if(getBookedBy(date,isafternoon,room) == null){
    date.setDate(date.getDate() - 1); 
    return date;
  } else {
    if(isafternoon){
      date.setDate(date.getDate() + 1);
      return getReserverdUntil(date,false,room)
    }else{
      return getReserverdUntil(date,true,room)
    }
  }
}

function getStatus(date,isafternoon,room){
  var getname = getBookedBy(date,isafternoon,room);
  var status = {status: 0};
  if(getname != null){
    status.name = getname;
    status['status'] = 1;
    status['reserverduntil'] = getReserverdUntil(date,isafternoon,room);
  }
  return status; // {status: 0; name: "Lukas Holzner"; reserveduntil: "29.11.2019"}
}

console.log(getStatus(new Date("2019-11-28"),true, "207b"));
