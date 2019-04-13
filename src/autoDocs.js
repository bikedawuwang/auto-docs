/**
 * @file index.js
 * @author zmh3788
 * @description index.js
*/

const fs = require('fs');
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
        'docs/AElf',
        'docs/Wallet/walletInfo'
    ],
    fileDocs: [{
        path: 'AElf',
        name: 'aelf.js'
    },
    {
        path: 'Wallet',
        name: 'wallet.js'
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
            console.log(obj);
            if (obj) {
                if (obj.filePath) {
                    new Promise((resolve, reject) => {
                        obj.filePath.map(item => {
                            mkdirs(item);
                        });
                        resolve(true);
                    }).then(result => {
                        if (result) {
                            console.log('文件夹-创建完成！');
                        }
                    });
                }
            }
        }
    });
}

const autoDocs = {
    init,
    create
};

module.exports = autoDocs;