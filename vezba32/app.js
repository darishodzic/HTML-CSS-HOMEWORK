function whoLike(likes) {
	if (likes.length === 0) {
		return "no one likes this";
	} else if (likes.length === 1) {
		return ` ${likes[0]} likes this`;
	} else if (likes.length === 2) {
		return ` ${likes[0]} and ${likes[1]} likes this`;
	} else if (likes.length === 3) {
		return ` ${likes[0]} and ${likes[1]} and ${likes[2]} likes this`;
	}
	return ` ${likes[0]} and ${
		likes[1]
	} and ${
		likes.length - 2
	} others likes this`;
}
console.log(
	whoLike([
		"Peter",
		"Ana",
		"Peter",
		"Ana",
	])
);
