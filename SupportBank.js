const readline = require('readline-sync');

let CSV = $.get('C:\October Cohort\Training\SupportBank\Transactions2014.csv');

let WhoOwesWho = class {

    constructor(from,to) {

        this.from = from;
        this.to = to;
    }
}

let AmountOwed = class {

    constructor(amount){
        
        this.amount = amount
    }
}

console.log(CSV)