var n = Number(prompt("Enter a Number"));
let a=n,rev=0;
while(n!=0){
    rev=rev*10+n%10;
    n=parseInt(n/10);
}
console.log(rev);