array = [
	NaN,
	0,
	15,
	false,
	-22,
	"",
	undefined,
	47,
	null,
];
array = array.filter((element) => {
	return !!element;
});

console.log(array);
