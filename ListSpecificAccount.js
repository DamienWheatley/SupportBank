const readline = require('readline-sync');
const moment = require('moment');
const fs = require('fs');
const parse = require('csv-parse/lib/sync');
const assert = require('assert');

const csvFilePath='Transactions2014.csv';
//Reads csv file

let fileRead = fs.readFileSync(csvFilePath, {encoding:'utf-8'});
/*converts CSV into an array, sorting by columns: "headers" are recognised and the data contained within them is
displayed as one index of the array*/

const transactions = parse(fileRead, {
  columns: true,
  skip_empty_lines: true
})

console.log(transactions)