let {PythonShell} = require('python-shell')
var path = require("path")

function getRoom() {
    var room = document.getElementById("room").value

    var options = {
        scriptPath : path.join(__dirname, '../engine/'),
        args : [room]
    }

    let pyshell = new PythonShell('startpage.py', options);

    pyshell.on('message', function(message) {
        swal(message);
    })
    document.getElementById("room").value = room;
}