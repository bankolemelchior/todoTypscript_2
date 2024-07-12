const myArray = ["Alpha", "Bravo", "Charly"];
let A:number = 0;
let num2 = 25;
let B:string = "Alpha";
let C:boolean = true;


let y;
let z = 0;

function logSomthing(arg:any): void {
  console.log(arg);
}

function add(a:number, b:number): number {
  return a + b;
}

const sum = (a:number ,b:number):number => a + b;
console.log(add(A, num2));
sum(A, num2)

logSomthing("HEEESEEEE");


/**
 * 
 * objets
 */
//Interface et type sont pratiquement pareil
type User = { //en vrai c'est pas un objet, on peut se passer des virgule après chaque propriété
  Name: string
  City: string
  Age: number
  intro: Function
}
interface userInterface { //en vrai c'est pas un objet, on peut se passer des virgule après chaque propriété
  Name: string
  City: string
  Age: number
  intro: Function
}

interface Admin {
  isAdmin?: boolean
}



let user1: userInterface = {
  Name: "Charly",
  City: "Paris",
  Age: 15,
  intro: function () {
    console.log("Cet utilisateur habite à ");
    
  }
};

let user2: userInterface = {
  Name: "Charly",
  City: "Paris",
  Age: 15,
  intro: function () {
    console.log("Cet utilisateur habite à ");
    
  }
};

const admin: userInterface & Admin = {//Pour avoir les propriétés de userInterface et Admin. Donc la variable admin prend les propriétés des deux côtés
  Name: "Bravo",
  City: "Nante",
  Age: 25,
  isAdmin:true,
  intro: function () {
    console.log('HElllllo');
    
  }
}



/**
 * 
 * Array
 * 
 */
let array: number[] = [5,5,5,6,3];// un tablea de nombre
let arrayString: string[] = ["typescript", "javaScript"];
//les deux suivants revient aux deux premiers
let arry2: Array<number> = [5,5,5,6,3];
let arrayString2: Array<string> =  ["typescript", "javaScript"];

/**
 * 
 * type générique
 * fonction pouvant prendre plusieurs forme
 */

function returnVal<T>(arg: T): T {
  return arg;
}

const returnVal2 = <T>(arg: T): any => {}

returnVal<number>(1);
// returnVal<string>(5);//l'argument doit être du type qu'on a précisé
returnVal<string>("aze");//l'argument doit être du type qu'on a précisé

returnVal("er");
returnVal(false);








