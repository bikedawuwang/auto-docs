#!/usr/bin/env node

process.title = 'auto-docs';

require('commander')
.version(require('../package').version)
.usage('<command> [options]')
.command('init', 'init -- create file from a template (short-cut alias: "i")')
.command('create', 'create -- create a file directory (short-cut alias: "c")')
.command('run', 'run  -- create documents to different directories (short-cut alias: "r")')
.parse(process.argv);

require('./auto-docs');