// require('lodash');
var webpackNumbers = require('./webpack-numbers.js');
// require('../../dist/vendors~main.webpack-numbers');
// const webpackNumbers = require('../../dist/webpack-numbers');

console.log(webpackNumbers);

var out = function () {
  process.stdout.write('This is the result for numtoword(1) === ' + webpackNumbers.numtoword(1));
};
out();
