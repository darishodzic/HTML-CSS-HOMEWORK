function stockList(
	listOfArt,
	listOfCat
) {
	listOfArt.sort();
	res = "";
	for (
		let i = 0;
		i < listOfCat.length;
		i++
	) {
		sum = 0;
		for (
			var j = 0;
			j < listOfArt.length;
			j++
		) {
			if (
				listOfArt[j][0] === listOfCat[i]
			) {
				num = parseInt(
					listOfArt[j].split(" ")[1]
				);
				sum += num;
			}
		}
		res += `(${listOfCat[i]} : ${sum})`;
		res += " - ";
	}

	res = res.slice(0, -3);
	return res;
}

console.log(
	stockList(
		[
			"CBART 20",
			"CDXEF 50",
			"BKWRK 25",
			"BTSQZ 89",
			"DRTYM 60",
		],
		["A", "B", "C", "W"]
	)
);
