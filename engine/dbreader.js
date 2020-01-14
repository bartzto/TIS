//const sqlite3 = require('sqlite3').verbose();
//var root = "C:/Users/Tobias Bartz/Documents/VisualStudioCode/TIS"


function formatDate (date){
  console.log(date);
  var month = (date.getMonth()+1) < 10 ? '0'+(date.getMonth()+1):''+(date.getMonth()+1);
  var day = date.getDate() < 10 ? '0'+date.getDate():''+date.getDate();
  return date.getFullYear()+'-'+month+'-'+day;
}
function formatName (name){
  return name.vorname + " " +name.nachname;
}


function getAllUsers(){
  var root = require('electron-root-path').rootPath;
  var sqlite = require("better-sqlite3");
  var db = new sqlite(require('path').join(root,"database","tis.db"));
  var querry = 'SELECT * FROM `tis_user`;'
  return db.prepare(querry).all();
}

function getBookedBy(date, isafternoon,room){
  var root = require('electron-root-path').rootPath;
  var sqlite = require("better-sqlite3");
  var db = new sqlite(require('path').join(root,"database","tis.db"));
  var querry = 'SELECT vorname, nachname \
    FROM tis_room, tis_user \
    WHERE tis_user.user = tis_room.user\
    AND tis_room.isafternoon = ' + isafternoon +' \
    AND tis_room.roomnr = "' + room+'" \
    AND tis_room.date = "'+ formatDate(date)+'";';
  var name;
  try {
     name = db.prepare(querry).get();
  }
  catch (e) {
    name = null;
  }
  name = name != null ? formatName(name) : null;
  //db.close();

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
      return getReserverdUntil(date,false,room);
    }else{
      return getReserverdUntil(date,true,room);
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
  return status; // {status: 1; name: "Lukas Holzner"; reserveduntil: "29.11.2019"}
}