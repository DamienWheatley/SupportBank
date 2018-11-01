const readline = require('readline-sync');
const moment = require('moment');
const fs = require('fs');
const parse = require('csv-parse/lib/sync');
const assert = require('assert');

const csvFilePath='Transactions2014.csv';

let fileRead = fs.readFileSync(csvFilePath, {encoding:'utf-8'});

const transactions = parse(fileRead, {
  columns: true,
  skip_empty_lines: true
})

// class Account {
//     constructor (name)
// }

// console.log(transactions);

let accounts = []

let i;
  
for (i = 0; i <= transactions.length - 1; i++){
  if (!accounts.includes(transactions[i].From)){
      accounts.push(transactions[i].From)
  }
  if (!accounts.includes(transactions[i].To)){
      accounts.push(transactions[i].To)
  }
}

console.log(accounts)