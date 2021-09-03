const myPromise = new Promise(
	(resolve, reject) => {
		let randomNr;
		setTimeout(() => {
			randomNr.Math.ceil(
				Math.random() * 10
			);
		}, 2000);

		if (randomNr > 5) {
			resolve(randomNr);
		} else {
			reject(resolve);
		}
	}
);
try {
	const result = await myPromise;
	console.log("value", randomNr);
} catch (error) {
	console.log("error", error);
}
