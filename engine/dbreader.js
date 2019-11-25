function dbquerry(quer){
    var mysql = require('mysql');
    var res = "";
    // Add the credentials to access your database
    var connection = mysql.createConnection({
        host     : '10.3.141.1',
        user     : 'admin',
        password : 'admin', // or the original password : 'apaswword'
        database : 'tis_database'
    });

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });


    connection.query(quer, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }

        console.log("Query succesfully executed", rows);
        res = rows;
    });

    // Close the connection
    connection.end(function(){
        // The connection has been closed
    });
    return res;
}

function getAllToday(){
   $querry = 'SELECT status FROM `tis_room` WHERE `date` = CURDATE();';
   //$querry = 'SELECT * FROM tis_room;';
    erg = dbquerry($querry);
    console.log("Ergebnis: ", erg);
}
getAllToday();

