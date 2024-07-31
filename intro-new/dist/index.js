"use strict";
class Person {
    // Le constructeur est utilisé pour initialiser les propriétés
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Méthode pour afficher les détails de la personne
    display() {
        let element = document.getElementById('container');
        let displayer = document.createElement("div");
        displayer.setAttribute('class', 'displayer');
        displayer.textContent = `Name: ${this.name}, Age: ${this.age}`;
        element === null || element === void 0 ? void 0 : element.appendChild(displayer);
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
// Création d'une instance de la classe Person
const person1 = new Person('Alice', 30);
person1.display(); // Output: Name: Alice, Age: 30
