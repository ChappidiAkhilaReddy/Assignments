let num:number=5;
for(let i:number=1; i<=num;i++){ //row
    let star:string='';
    for(let j:number=1; j<num-i;j++){ //columns for adding space
        star=star+' ';

    }
    for(let k:number=1; k<=i;k++){//columns for adding stars
        star=star+'*';
    }
    console.log(star);
}