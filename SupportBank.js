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
     constructor (Name, Amount) {
       this.Name = Name;
       this.Amount = Amount;
     }
}

class AllTransactions {
    constructor (date,NameFrom,Action,NameTo,AmountPaid,Narrative){
      this.date = date;
      this.NameFrom = NameFrom;
      this.Action = Action;
      this.NameTo = NameTo;
      this.AmountPaid = AmountPaid;
      this.Narrative = Narrative;
    }
}

let accountNames = []; //creates empty array "accountNames"
let accountBalance = [];

for (i = 0; i <= transactions.length - 1; i++) { //loops through every index of the array 
  if (!accountNames.includes(transactions[i].From)) { //if "accounts" array does NOT include the "From" field from the "Transactions" array
    accountNames.push(transactions[i].From); //pushes the "From" field from the "Transactions" array to the "Accounts" array
  }
  if (!accountNames.includes(transactions[i].To)) {
    accountNames.push(transactions[i].To);
  }
}
////// Loop back through transactions

function calculateBalance(indexNumber) {
  let balance = 0;
  for (i = 0; i <= transactions.length - 1; i++) {
    if(indexNumber > accountNames.length) {
      console.error(`That number is too high, please try a number equal or less than ${accountNames.length}.`);
      break;
      }
    if(transactions[i].From === accountNames[indexNumber]) {
      balance -= parseFloat(transactions[i].Amount);
    }
    if(transactions[i].To === accountNames[indexNumber]) {
      balance += parseFloat(transactions[i].Amount);
    }  
  }
return balance;
}

for (let i = 0; i <= accountNames.length - 1; i++) { 
  accountBalance.push(calculateBalance(i));
}

let accounts = [];

let newName, newBalance;

for (i = 0; i <= accountNames.length - 1; i++) {
  newName = accountNames[i]; //assigns the selected index to "newName" variable
  newBalance = `£` + accountBalance[i].toFixed(2);
  let newAccount = new Account(newName,newBalance); //creates an account object and assigns it to the "newAccount" variable
  accounts.push(newAccount); //pushes the account object (assigned to "newAccount") to the array "newName"
}

console.log("===========================================");
console.log("Please enter 'List All' to view all accounts.")
const ShowAllAccounts = readline.prompt()

if (ShowAllAccounts == 'List All') {
  console.log(accounts);
} else {
  console.log(`Sorry, we didn't quite catch that - please try again and enter 'All'`);
}