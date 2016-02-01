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

    const iosData = [];
    const androidData = [];

    if (typeof r.then === 'function') {
      r.then(function(response) {
        const rs = response.data.results;
        for (var i = 0; i < rs.length; i++) {
          if (rs[i].deviceType === 'ios') {
            iosData.push([rs[i].deviceToken]);
          } else {
            androidData.push([rs[i].deviceToken]);
          }
        }
        if (iosData.length > 0) {
          fs.writeFile('ios.csv', p.toCSV(iosData), 'utf8', function(err) {
            console.log('ios.csv saved');
          });
        } else {
          console.log('It looks you do not have ios device');
        }
        if (androidData.length > 0) {
          fs.writeFile('android.csv', p.toCSV(androidData), 'utf8', function(err) {
            console.log('android saved');
          });
        } else {
          console.log('It looks you do not have android device');
        }
      });
    }
  });

program.parse(process.argv);
