document.getElementById("num").           innerHTML =              12345;
document.     getElementById    (     "deci"        ).     innerHTML = 12.345;

document.getElementById("doubleQ").innerHTML = "Hello, World!";
document.getElementById("singleQ").innerHTML = 'Hello, JavaScript!';

let greeting = "Welcome";const pi = 3.14159;var isActive = true;
 
document.getElementById("vlet").innerHTML = greeting;
document.getElementById("vconst").innerHTML = pi;
document.getElementById("vvar").innerHTML = isActive;

let aa = 10 ;//this is for something
const bb = 20 ;
var cc = 30;

document.getElementById("a").innerHTML = aa;
document.getElementById("b").innerHTML = bb;
document.getElementById("c").innerHTML = cc;
/* This is a Multi-line Comment
   It can span multiple lines */
function changeValue() {
    aa = 100;
    cc = 300;
    document.getElementById("a").innerHTML = aa;
    document.getElementById("c").innerHTML = cc;
}
