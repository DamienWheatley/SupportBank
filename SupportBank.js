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

class Account {
     constructor (name) {
       this.name = name;
     }
}

let accountNames = [] //creates empty array "accounts"

let i; //sets "i" as an empty variable (sets an area of storage for "i")

for (i = 0; i <= transactions.length - 1; i++){ //loops through every index of the array 
  if (!accountNames.includes(transactions[i].From)){ //if "accounts" array does NOT include the "From" field from the "Transactions" array
    accountNames.push(transactions[i].From); //pushes the "From" field from the "Transactions" array to the "Accounts" array
  }
  if (!accountNames.includes(transactions[i].To)){
    accountNames.push(transactions[i].To);
  }
}

let accounts = [];

let newName;
for (i = 0; i <= accountNames.length - 1; i++){
  newName = accountNames[i]; //assigns the selected index to "newName" variable
  let newAccount = new Account(newName); //creates an account object and assigns it to the "newAccount" variable
  accounts.push(newAccount); //pushes the account object (assigned to "newAccount") to the array "newName"
}

console.log(accountNames);
console.log(accounts);