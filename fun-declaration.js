// function demo()
// {
//     console.log("hello world")
// }
// //console.log(demo);
// demo()

function sum (a , b)
{
    let c = a + b
    return c
    console.log("hello");
}
console.log(sum(10+10,10));
function arth(a,b){
    a =Number(window.prompt("enter the a value"))
    b =Number(window.prompt("enter the b value"))
   let c=a+b
   let d=a-b
   let e=a*b
   let f=a/b
   console.log(c)
   console.log(d)
   console.log(e)
   console.log(f)
}
arth()


function findLargestNumber(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

let num1 = Number(window.prompt("Enter the first number:"));
let num2 = Number(window.prompt("Enter the second number:"));
let num3 = Number(window.prompt("Enter the third number:"));


let largest = findLargestNumber(num1, num2, num3);
alert(`The largest number among ${num1}, ${num2}, and ${num3} is ${largest}.`);
console.log(`The largest number among ${num1}, ${num2}, and ${num3} is ${largest}.`);

let b = 200;
console.log(b);  //200

