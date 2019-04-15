/**
 * @file index.js
 * @author zmh3788
 * @description index.js
*/

const fs = require('fs');
const jsdoc2md = require('jsdoc-to-markdown');
// const path = require('path');
const mkdirs = require('./utils/mkdirs');
/**
 * path = {
 *  'path': {
 *      fileName1,
 *      fileName2
 *  }
 * }
 */

const dataPath = {
    filePath: [
        'docs'
    ],
    fileDocs: [{
        from: 'src/test.js',
        to: 'docs/test.md'
    }]
};

function init() {
    fs.writeFileSync('./autoDocs.json', JSON.stringify(dataPath, null, '\t'));
    console.log('auto-docs complete');
}

function create() {
    fs.readFile('./autoDocs.json', 'utf-8', function (error, result) {
        if (error) {
            console.log('error', error);
        }
        else {
            const obj = JSON.parse(result);
            if (obj) {
                if (obj.filePath) {
                    new Promise((resolve, reject) => {
                        obj.filePath.map(item => {
                            mkdirs(item);
                        });
                        resolve(true);
                    }).then(result => {
                        if (result) {
                            console.log('Directory creation completed！');
                        }
                    });
                }
            }
        }
    });
}

function run() {
    fs.readFile('./autoDocs.json', 'utf-8', function (error, result) {
        if (result) {
            const data = JSON.parse(result);
            if (data.fileDocs) {
                data.fileDocs.map(item => {
                    jsdoc2md.render(
                        {
                            files: item.from
                        }
                    ).then(result => {
                        fs.writeFileSync(item.to, result);
                        console.log(item.from, 'completed！');
                    });
                });
            }

        }
    });
}

const autoDocs = {
    init,
    create,
    run
};

module.exports = autoDocs;