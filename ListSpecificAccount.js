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

class AllTransactions {
  constructor (date,NameFrom,NameTo,AmountPaid,Narrative){
    this.date = date;
    this.NameFrom = NameFrom;
    this.NameTo = NameTo;
    this.AmountPaid = AmountPaid;
    this.Narrative = Narrative;
  }
}

let _dates = []; //list dates
let fromNames = []; //list all NamesFrom fields
let toNames = [];
let payment = []; //list AmountPaid and Narrative
let Narratives = [];

for (i = 0; i <= transactions.length - 1; i++) {
  fromNames.push(transactions[i].From);
  toNames.push(transactions[i].To);
  payment.push(transactions[i].Amount);
  _dates.push(transactions[i].Date);
  Narratives.push(transactions[i].Narrative);
}

let AllAccounts = [];

for (i = 0; i <= fromNames.length - 1; i++) {
  tranDate = _dates[i];
  fromName = fromNames[i]; //assigns the selected index to "newName" variable
  toName = toNames[i];
  tranPayment = `£` + payment[i];
  tranNarrative = Narratives[i]; 
  let newAccount = new AllTransactions(tranDate,fromName,toName,tranPayment,tranNarrative); //creates an account object and assigns it to the "newAccount" variable
  AllAccounts.push(newAccount); //pushes the account object (assigned to "newAccount") to the array "newName"
}

function DisplayUser(usersName) {
  
  for (let i = 0; i <AllAccounts.length; i++) {
    if (usersName.includes(AllAccounts[i].NameFrom) || usersName.includes(AllAccounts[i].NameTo) ) {
    console.log(AllAccounts[i].date + ": " + AllAccounts[i].NameFrom +" paid " + AllAccounts[i].NameTo + " " + AllAccounts[i].AmountPaid 
    + " for " + AllAccounts[i].Narrative);
  }
 }
}

exports.ListSpecific = function(showTransactions){
  // console.log("===========================================");
  // console.log("Please enter 'List [your account name]' to view all transactions.");
  // const showTransactions = readline.prompt();
  DisplayUser(showTransactions);
}