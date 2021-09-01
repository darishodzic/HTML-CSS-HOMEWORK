array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];

res = array2.map(function (el, indx) {
	if (this[indx]) {
		return el + this[indx];
	} else {
		return el;
	}
}, array1);

console.log(res);
