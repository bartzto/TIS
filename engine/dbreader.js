//const sqlite3 = require('sqlite3').verbose();
var sqlite = require("better-sqlite3");
var root = "/home/lukas/development/electron/TIS" 
// open database in memor
//var db = new sqlite("example.db");
var db = new sqlite(root+"/database/tis.db");
function test(){
  
  var rows = db.prepare("SELECT date FROM `tis_room`;").get();
  return rows;
}


function getAllUsers(){
  var querry = 'SELECT * FROM `tis_user`;'
  return db.prepare(querry).all();
}

function getBookedBy(date, isafternoon){
  var name = null;
  var querry = 'SELECT '

  return name;
}

function getSatus(date,isafternoon){
  
  return status; // {status: 0; name: "Lukas Holzner"; reserveduntil: "29.11.2019"}
}

console.log(test().date);