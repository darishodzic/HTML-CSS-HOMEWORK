function sort(niz) {
	oddindx = 0;
	oddArr = [];
	for (let i = 0; i < niz.length; i++) {
		if (niz[i] % 2 !== 0) {
			oddArr.push(niz[i]);
		}
	}
	oddArr.sort(function (a, b) {
		return a - b;
	});
	for (let i = 0; i < niz.length; i++) {
		if (niz[i] % 2 !== 0) {
			niz.splice(i, 1, oddArr[oddindx]);
			oddindx++;
		}
	}
	console.log(niz);

	return niz;
}

sort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
