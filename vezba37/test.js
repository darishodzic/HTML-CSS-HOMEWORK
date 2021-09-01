export function mojaF(text) {
	let a = text.split("");
	let result = {};
	for (let i = 0; i < a.length; i++) {
		if (result.hasOwnProperty(a[i])) {
			result[a[i]] += 1;
		} else {
			result[a[i]] = 1;
		}
	}
	console.log(result);
}
