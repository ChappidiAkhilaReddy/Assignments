//Print the numbers in diamond-shaped pyramid of numbers.
/*   1 
   1 2 
  1 2 3
 1 2 3 4
1 2 3 4 5
 1 2 3 4
  1 2 3
   1 2
    1 */
    
let num:number=5;

for(let i=1; i<=num;i++){
    let row = " ".repeat(num-i);
 for(let j=1; j<=i;j++){
    row = row+j+" ";   
} 
console.log(row);  
}

for(let i=1; i<=num-1;i++){
    let row = " ".repeat(i);
 for(let j=1; j<=num-i;j++){
    row = row+j+" ";   
} 
console.log(row);  
}
