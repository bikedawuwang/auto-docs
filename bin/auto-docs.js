#!/usr/bin/env node

const program = require('commander');
const autoDocs = require('../src/autoDocs');


/**
 * Usage
*/
process.title = 'autodocs2js';

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

program
.command('run')
.description('run  -- create documents to different directories (short-cut alias: "r")')
.alias('r')
.action(function () {
    autoDocs.run();
});

program.parse(process.argv);
