a = [1, 2, 3, 4];

Array.prototype.MyFilter = function (
	callback
) {
	let newArray = [];
	this.forEach(
		(element, index, array) => {
			if (
				callback(element, index, array)
			) {
				newArray.push(element);
			}
		}
	);

	return newArray;
};

newa = a.MyFilter((element) => {
	return element === 2;
});
console.log(newa);
