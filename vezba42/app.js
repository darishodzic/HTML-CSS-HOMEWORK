class Animal {
	constructor(name, num_of_leg) {
		this.name = name;
		this.num_of_leg = num_of_leg;
	}
	greet() {
		console.log(`${this.name} playing`);
	}
	goodbye() {
		console.log(`${this.name} go home`);
	}
}
const animal1 = new Animal("milka", 4);

class Dog extends Animal {
	constructor(
		name,
		num_of_leg,
		color,
		age
	) {
		super(name, num_of_leg);
		this.color = color;
		this.age = age;
	}
	greet() {
		super.greet();
		console.log("wof wof");
	}
	goodbye() {
		super.goodbye();
		console.log("wauuu");
	}
}
const dog1 = new Dog(
	"rex",
	4,
	"grey",
	7
);
console.log(dog1);
dog1.greet();
dog1.goodbye();
