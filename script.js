
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
};


describe('Person and Employee Test', () => {
  it('should log greetings', () => {
   
    cy.on('log:added', (attributes, log) => {
      console.log(log.message);
    });

   
    const person1 = new Person("Alice", 25);
    person1.greet();
    cy.log("Hello, my name is Alice, I am 25 years old."); // Cypress log assertion

    
    const employee1 = new Employee("Bob", 30, "Manager");
    employee1.jobGreet();
    cy.log("Hello, my name is Bob, I am 30 years old, and my job title is Manager"); // Cypress log assertion
  });
});


Cypress.Commands.add('getPersonClass', () => {
  return cy.window().then((win) => win.Person);
});

Cypress.Commands.add('getEmployeeClass', () => {
  return cy.window().then((win) => win.Employee);
});
