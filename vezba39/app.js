import fetch from "node-fetch";

fetch("https://api.quotable.io/random")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(
			"content: ",
			data.content,
			"author: ",
			data.author
		);
	})
	.catch((error) => {
		console.log(error);
	});
