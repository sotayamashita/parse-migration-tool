#!/usr/bin/env node
'use strict';

const fs = require('fs');
const pkg = require('./package.json');
const program = require('commander');
const Parse = require('./lib/Parse.js').default;

program
  .version(pkg.version)

program
  .command('client <file>')
  .description('Get device tokens')
  .action(function(file){
    const d = JSON.parse(fs.readFileSync(file, 'utf8'));
    const p = new Parse(d.applicationId, d.masterKey);
    const c = p.fetchDeviceTokens();

    if (typeof c.then === 'function') {
      c.then(function(response){
        console.log(response.data.results);
      });
    }
  })

program.parse(process.argv);
