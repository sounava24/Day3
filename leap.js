var a = Number(prompt("Enter a year"));
if(a%400==0)
    console.log(`${a} is a leap year`);
else if(a%4==0 && a%100!=0)
console.log(`${a} is a leap year`);
else
console.log(`${a} is a not leap year`);