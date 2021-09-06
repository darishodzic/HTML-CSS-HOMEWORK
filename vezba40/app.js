import fetch from "node-fetch";

fetch(
	"https://quotable.io/quotes?page=1?"
)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		data.results.forEach((element) => {
			console.log(
				"content: ",
				element.content,
				"tags: ",
				element.tags
			);
		});
	})
	.catch((error) => {
		console.log(error);
	});
