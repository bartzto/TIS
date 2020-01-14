

function openJSON(){
    var fs = require('fs');
    var root = require('electron-root-path').rootPath;
    console.log("Path:" +require('path').join(root,"config","config.json"));
    var contents = fs.readFileSync(require('path').join(root,"config","config.json"));
    // Define to JSON type
    return JSON.parse(contents);
}


function getRoom(){
    jsonContent = openJSON();
    return jsonContent.tablet.room;
}

function getDatabase(){
    jsonContent = openJSON();
    return jsonContent.mysql;
}



function getStatusOld(){
    return Boolean(Math.round(Math.random()));
}


console.log(getRoom());