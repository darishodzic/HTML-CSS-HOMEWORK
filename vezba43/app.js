class Person {
	constructor(
		firstname,
		lastname,
		age
	) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.age = age;
	}
	hi() {
		console.log("Hello world");
	}
	myname() {
		console.log(
			`My name is ${this.firstname}`
		);
	}
}

class Teacher extends Person {
	constructor(
		firstname,
		lastname,
		age,
		subject
	) {
		super(firstname, lastname, age);
		this.subject = subject;
	}
	mysubject() {
		console.log(
			`I am teacher of ${this.subject}`
		);
	}
}

class Student extends Person {
	constructor(
		firstname,
		lastname,
		age,
		fax
	) {
		super(firstname, lastname, age);
		this.fax = fax;
	}
	myfax() {
		console.log(
			`I am student of ${this.fax}`
		);
	}
}
