// for (let i = 0; i < 100; i++) {
//     if (i%2==0) {
//         console.log("Broj je :",i);
//     }    
// }

// var var1 = "w3resource"
// var var2 = ""
// for (let i = var1.length - 1; i>=0; i--) {
//     var2 += var1[i]
// }
// console.log(var2);

var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);