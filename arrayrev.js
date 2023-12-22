function reverse( a ){
    for (let index = 0; index < a.length/2; index++) {
        var t = a[index];
        a[index]= a[a.length-index-1];
        a[a.length-index-1]= t;
    }
    a.forEach(element => {
        console.log(element);
        
    });
}
var a = prompt("Enter elements").split(",");
reverse(a);