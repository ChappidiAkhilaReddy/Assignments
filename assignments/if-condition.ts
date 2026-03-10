let customerName: string = "John Doe";
let creditScore: number = 720;
let income: number = 55000.0;
let isEmployed: boolean = true;
let debtToIncomeRatio: number = 35.0;

checkLoanEligibility(customerName,creditScore,income,isEmployed,debtToIncomeRatio);

//function to check person's eligibity for loan
function checkLoanEligibility(customerName:string,creditScore:number,income:number,isEmployed:boolean,debtToIncomeRatio:number) {
    if (creditScore > 750) {
        console.log(`${customerName}, you are eligible for loan`);
    }
    else if (creditScore >= 650 && creditScore <= 750) {
        if (income >= 50000 && isEmployed == true && debtToIncomeRatio < 40.0) {
            console.log(`${customerName}, you are eligible for loan`);
        }
        else{
           console.log(`${customerName}, you are not eligible for loan`); 
        }
    }
    else {
        console.log(`${customerName}, you are not eligible for loan`);
    }
}
