
let transactions:number[]=[50000,-2000,3000,-15000,-200,-300,4000,-3000];

//Print total number of credit and debit transactions completed
let debitCount:number=0;
let creditCount:number=0;
for(let i=0; i<transactions.length;i++){
if(transactions[i]<0){
    debitCount++;
}else{
    creditCount++
}
}
console.log(`Total number of credit transactions are ${creditCount} and debit transactions are ${debitCount}`);

//Print the total amount credited and debited in account
let debitAmount:number=0;
let creditAmount:number=0;
for(let i=0; i<transactions.length;i++){
if(transactions[i]<0){
    debitAmount=debitAmount+(-(transactions[i]));
}else{
    creditAmount=creditAmount+transactions[i];
}
}
console.log(`Total credit amount are ${creditAmount} and debit amount are ${debitAmount}`);

//Print total amount remaining at the end in Bank Account
 let totalBalance:number=creditAmount-debitAmount;
 console.log(`Total Balance is ${totalBalance}`);

 /*If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions*/
let suspiciousTransactionsCount=0;
for(let i=0; i<transactions.length;i++){
    if(transactions[i]>10000){
        console.log(`Suspicious credit transcaction :  ${transactions[i]}`);
        suspiciousTransactionsCount++;
    }
    else if(transactions[i]< -10000){
        console.log(`Suspicious debit transcaction : ${transactions[i]}`);
        suspiciousTransactionsCount++;
    }
}

console.log(`Total suspicious transcaction count ${suspiciousTransactionsCount}`);


 