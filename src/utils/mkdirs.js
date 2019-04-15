/** 
 * @file mkdirs.js
 * @author zmh3788
 * @description setPath
*/

const fs = require('fs');

function mkdirs(path) {
    if (path) {
        var pathArray = path.split('/');
        fs.exists(path, function (exists) {
            if (!exists) {
                mkdir(0, pathArray);
            }
        });
    }
}

function mkdir(pos, pathArray) {
    var len = pathArray.length;
    if (pos >= len || pos > 10) {
        return;
    }
    var currentDir = '';
    for (let i = 0; i <= pos; i++) {
        if (i !== 0) {
            currentDir += '/';
        }
        currentDir += pathArray[i];
    }

    fs.exists(currentDir, function (exists) {
        if (!exists) {
            fs.mkdir(currentDir, function (err) {
                mkdir(pos + 1, pathArray);
            });
        }
        else {
            mkdir(pos + 1, pathArray);
        }
    });
}


module.exports = mkdirs;