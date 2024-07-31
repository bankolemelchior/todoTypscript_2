class Person {
  name: string;
  age: number;

  // Le constructeur est utilisé pour initialiser les propriétés
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Méthode pour afficher les détails de la personne
  display(): void {
    let element: HTMLElement | null = document.getElementById('container')
    let displayer = document.createElement("div");
    displayer.setAttribute('class', 'displayer')
    displayer.textContent = `Name: ${this.name}, Age: ${this.age}`;
    element?.appendChild(displayer);
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Création d'une instance de la classe Person
const person1 = new Person('Alice', 30);
person1.display(); // Output: Name: Alice, Age: 30