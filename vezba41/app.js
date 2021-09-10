class Cat {
	constructor() {
		this.name;
		this.color;
	}
}

cat1 = new Cat();

cat1.name = "kitty";
cat1.color = "grey";
cat1.mjau = () => {
	console.log("mjauuuuuuuuu");
};

console.log(cat1);
cat1.mjau();
