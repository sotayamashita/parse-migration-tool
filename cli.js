#!/usr/bin/env node
'use strict';

var fs = require('fs');
var colors = require('colors');
var updateNotifier = require('update-notifier');
var pkg = require('./package.json');
var program = require('commander');
var ParseService = require('./lib/service/ParseService.js').default;

// Checks for available update and notify
updateNotifier({pkg: pkg}).notify();
program.version(pkg.version);

program
  .command('installation <file>')
  .description('Retrieve the contents of an installation objects')
  .action(function(file, options){

    // Read json file
    var data;
    try {
      data = JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (err) {
      console.log('Cannnot read the file'.red);
      process.exit(1);
    }

    // Detect data object has parse key
    if (!data.hasOwnProperty('parse')) {
      console.log('Please add parse credential information'.red);
      process.exit(1);
    }

    // Detect parse keies
    if (!data.parse.applicationId || !data.parse.masterKey) {
      console.log('You must have applicationId and masterKey'.red);
      process.exit(1);
    }

    // Output data
    var parse = new ParseService(data.parse.applicationId, data.parse.masterKey);
    var result = parse.retriveInstallations();
    if (typeof result.then === 'function') {
      result.then(function(response) {
        console.log(response.data.results);
      })
    }
  });

program
  .command('migrate <file>')
  .description('Create files or Send request to import')
  .option('-s, --service [service]')
  .option('-o, --out-file [out]')
  .action(function(file, options) {

    // Read json file
    var data;
    try {
      data = JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (err) {
      console.log('Cannnot read the file'.red);
      process.exit(1);
    }

    // Detect data object has parse key
    if (!data.hasOwnProperty('parse')) {
      console.log('Please add parse credential information'.red);
      process.exit(1);
    }

    // Detect parse keies
    if (!data.parse.applicationId || !data.parse.masterKey) {
      console.log('You must have applicationId and masterKey'.red);
      process.exit(1);
    }

    var parse = new ParseService(data.parse.applicationId, data.parse.masterKey);
    var result = parse.retriveInstallations();

    // Growth Push
    if (options.service === 'growthpush') {
      var iosData = [];
      var androidData = [];
      if (typeof result.then === 'function') {
        result.then(function(response) {
          var rs = response.data.results;
          for (var i = 0; i < rs.length; i++) {
            if (rs[i].deviceType === 'ios') {
              iosData.push([rs[i].deviceToken]);
            } else {
              androidData.push([rs[i].deviceToken]);
            }
          }
          if (iosData.length > 0) {
            fs.writeFile('ios.csv', parse.toCSV(iosData), 'utf8', function(err) {
              console.log('ios.csv saved');
            });
          } else {
            console.log('It looks you do not have ios device');
          }
          if (androidData.length > 0) {
            fs.writeFile('android.csv', parse.toCSV(androidData), 'utf8', function(err) {
              console.log('android saved');
            });
          } else {
            console.log('It looks you do not have android device');
          }
        });
      }
    }
  });

program.parse(process.argv);
