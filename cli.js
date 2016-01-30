#!/usr/bin/env node
'use strict';

const fs = require('fs');
const pkg = require('./package.json');
const program = require('commander');
const Parse = require('./lib/Parse.js').default;

program
  .version(pkg.version);

program
  .command('installation <file>')
  .description('Retrieve the contents of an installation objects')
  .action(function(file, options){
    const d = JSON.parse(fs.readFileSync(file, 'utf8'));
    const p = new Parse(d.applicationId, d.masterKey);
    const r = p.retriveInstallations();

    if (typeof r.then === 'function') {
      r.then(function(response) {
        console.log(response.data.results);
      })
    }
  });

program.parse(process.argv);
