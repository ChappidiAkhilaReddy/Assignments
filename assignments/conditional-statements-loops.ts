let transactions:number[]=[50000,-2000,3000,-15000,-200,-300,4000,-3000];
let debitCount:number=0;
let creditCount:number=0;
let debitAmount:number=0;
let creditAmount:number=0;
let suspiciousTransactionsCount=0;

for(let i=0; i<transactions.length;i++){
if(transactions[i]<0){
    debitCount++;
    debitAmount=debitAmount+(-(transactions[i]));
    if(transactions[i]< -10000){
                console.log(`Suspicious debit transcaction : ${transactions[i]}`);
        suspiciousTransactionsCount++;
    }
}else{
    creditCount++;
    creditAmount=creditAmount+transactions[i];
    if(transactions[i]>10000){
        console.log(`Suspicious credit transcaction : ${transactions[i]}`);
        suspiciousTransactionsCount++;
    }
}
}
//Print total number of credit and debit transactions completed
console.log(`Total number of credit transactions are ${creditCount} and debit transactions are ${debitCount}`);

//Print the total amount credited and debited in account
console.log(`Total credit amount is ${creditAmount} and debit amount is ${debitAmount}`);

//Print total amount remaining at the end in Bank Account
 let totalBalance:number=creditAmount-debitAmount;
 console.log(`Total Balance is ${totalBalance}`);

 /*If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions*/
console.log(`Total suspicious transaction count ${suspiciousTransactionsCount}`);


 