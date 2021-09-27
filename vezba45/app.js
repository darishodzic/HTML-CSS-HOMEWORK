array = [
	{ id: 0, name: "Ivan" },
	{ id: 1, name: "Suad" },
	{ id: 2, name: "Dzejlna" },
	{ id: 3, name: "Belma" },
];

filteredArray = array
	.filter((el) => el.id % 2 === 0)

	.map((el) => el.name);

console.log(filteredArray);
