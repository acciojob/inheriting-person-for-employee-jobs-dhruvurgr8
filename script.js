class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
  }
}

describe('Person and Employee Test', () => {
  it('should log greetings', () => {
   
    cy.on('log:added', (attributes, log) => {
      console.log(log.message);
    });

    cy.getPersonClass().then((PersonClass) => {
      const person1 = new PersonClass("Alice", 25);
      person1.greet();
      cy.log("Hello, my name is Alice, I am 25 years old."); // Cypress log assertion
    });

    cy.getEmployeeClass().then((EmployeeClass) => {
      const employee1 = new EmployeeClass("Bob", 30, "Manager");
      employee1.jobGreet();
      cy.log("Hello, my name is Bob, I am 30 years old, and my job title is Manager"); // Cypress log assertion
    });
  });
});

Cypress.Commands.add('getPersonClass', () => {
  return cy.window().its('Person');
});

Cypress.Commands.add('getEmployeeClass', () => {
  return cy.window().its('Employee');
});
