/**
 * @file auto-docs-generate.js
 * @author zmh3788
 * @deprecated auto-docs-generate
*/

const program = require('commander');
const autoDocs = require('../src/autoDocs');


/**
 * Usage
*/

program
.version(require('../package').version)
.usage('<command> [options]');

program
.command('init')
.description('init -- create file from a template (short-cut alias: "i")')
.alias('i')
.action(function () {
    autoDocs.init();
});

program
.command('create')
.description('create -- create a file directory (short-cut alias: "c")')
.alias('c')
.action(function () {
    autoDocs.create();
});

program.parse(process.argv);
