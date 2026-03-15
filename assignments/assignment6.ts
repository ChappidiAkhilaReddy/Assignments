let num: number = 678;
let result: boolean = checkPrimeNumber(num);
if (result) {
    console.log(`Given number ${num} is a prime number`)
}
else {
    console.log(`Given number ${num} is a not prime number`)
}

function checkPrimeNumber(num: number): boolean {

    if (num > 1) {
        for (let i = 2; i <= num - 1; i++) {
            if (num % i === 0) {
                return false;
            }
        }
    }
    else return false;
    return true;
}