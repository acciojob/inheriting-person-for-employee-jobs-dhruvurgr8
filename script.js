// complete this js code
function Person(name, age) {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	greet(){
		console.log(`Hello, my name is ${this.name}, I am <age> years old.`)
	}
}

function Employee extends Person(name, age, jobTitle) {
	constructor(name,age,jobTitle){
		super(name,age);
		this.jobTitle = jobTitle;
	}
jobGreet(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`)
}
}
const person1 = Person("Alice",25);
person1.greet();
const employee1 = Employee("Bob",30,"Manager");
employee1.jobGreet();


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
