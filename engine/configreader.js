function openJSON(){
    var fs = require('fs');
    var root = "C:/Users/Tobias Bartz/Documents/VisualStudioCode/TIS"
    var contents = fs.readFileSync(root+"/config/config.json");
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



function getStatus(){
    return Boolean(Math.round(Math.random()));
}


console.log(getDatabase());