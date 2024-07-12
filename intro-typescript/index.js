"use strict";
const myArray = ["Alpha", "Bravo", "Charly"];
let A = 0;
let num2 = 25;
let B = "Alpha";
let C = true;
let y;
let z = 0;
function logSomthing(arg) {
    console.log(arg);
}
function add(a, b) {
    return a + b;
}
const sum = (a, b) => a + b;
console.log(add(A, num2));
sum(A, num2);
logSomthing("HEEESEEEE");
let user1 = {
    Name: "Charly",
    City: "Paris",
    Age: 15,
    intro: function () {
        console.log("Cet utilisateur habite à ");
    }
};
let user2 = {
    Name: "Charly",
    City: "Paris",
    Age: 15,
    intro: function () {
        console.log("Cet utilisateur habite à ");
    }
};
const admin = {
    Name: "Bravo",
    City: "Nante",
    Age: 25,
    isAdmin: true,
    intro: function () {
        console.log('HElllllo');
    }
};
/**
 *
 * Array
 *
 */
let array = [5, 5, 5, 6, 3]; // un tablea de nombre
let arrayString = ["typescript", "javaScript"];
//les deux suivants revient aux deux premiers
let arry2 = [5, 5, 5, 6, 3];
let arrayString2 = ["typescript", "javaScript"];
/**
 *
 * type générique
 * fonction pouvant prendre plusieurs forme
 */
function returnVal(arg) {
    return arg;
}
const returnVal2 = (arg) => { };
returnVal(1);
// returnVal<string>(5);//l'argument doit être du type qu'on a précisé
returnVal("aze"); //l'argument doit être du type qu'on a précisé
returnVal("er");
returnVal(false);
