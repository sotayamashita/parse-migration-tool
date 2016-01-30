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

program
  .command('migration <file>')
  .description('Create config file to migrate')
  .option('-s, --service [service]')
  .option('-o, --out-file [out]')
  .action(function(file, options) {
    const d = JSON.parse(fs.readFileSync(file, 'utf8'));
    const p = new Parse(d.applicationId, d.masterKey);
    const r = p.retriveInstallations();
    const a = [];

    if (typeof r.then === 'function') {
      r.then(function(response) {
        const rs = response.data.results;
        for (var i = 0; i < rs.length; i++) {
          a.push([rs[i].deviceType, rs[i].deviceToken]);
        }
        fs.writeFile('output.csv', p.toCSV(a), 'utf8', function(err) {
          console.log('Saved');
        });
      });
    }
  });

program.parse(process.argv);
