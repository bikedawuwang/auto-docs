/**
 * @file index.js
 * @author zmh3788
 * @description index.js
*/

const fs = require('fs');
const path = require('path');
const setPath = require('../src/utils/setPath');
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
        'AElf',
        'Wallet/walletInfo'
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

    fs.exists('docs', function (exists) {
        if (!exists) {
            fs.mkdir('docs', function (err) {
                if (err) {
                    console.log('创建文件夹出错！');
                }
                else {
                    console.log('文件夹-创建成功！');
                }
            });
        }
        else {
            console.log('文件夹-已存在！');
        }
    });

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
                            setPath(item);
                        });
                    }).then(result => {
                        console.log('文件夹-创建完成！');
                    })
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