/*Implement pow(x, n), which calculates x raised to the power n (i.e., xn)
Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:
Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25 */


console.log(`power(2.00000, 10) is ${findPower(2.00000, 10)} `);
console.log(`power(2.10000, 3) is ${findPower(2.10000, 3)} `);
console.log(`power(2.00000, -2) is ${findPower(2.00000, -2)} `);
function findPower(x: number, n: number): number {
    if (n === 0) return 1;

    if (n > 0) {
        return x * findPower(x, n - 1);
    }
    else {
        return 1 / findPower(x, -n);;

    }
}