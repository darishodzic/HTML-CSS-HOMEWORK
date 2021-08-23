function sort(niz) {
	t = 0;
	for (let i = 0; i < niz.length; i++) {
		if (niz[i] % 2 !== 0) {
			for (
				let j = 0;
				j < niz.length;
				j++
			) {
				if (
					niz[i] !== niz[j] &&
					niz[j] % 2 !== 0 &&
					niz[i] < niz[j]
				) {
					t = niz[i];
					niz[i] = niz[j];
					niz[j] = t;
				}
			}
		}
	}
	return niz;
}

sort([5, 8, 6, 3, 4]);
