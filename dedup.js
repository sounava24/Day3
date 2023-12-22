var a = prompt("Enter elements").split(",");
var b=[];
for (let i = 0; i < a.length; i++) {
    if(b.includes(a[i])== false)
    b.push(a[i]);
    
}
console.log(b);