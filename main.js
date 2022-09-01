let card = document.createElement("li");
card.className = "card"
document.querySelector("#results").appendChild(card)

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9aa649390bmsh438d62d7b07cf67p1ebf76jsn1cae3bd5b0a7',
		'X-RapidAPI-Host': 'maptiles.p.rapidapi.com'
	}
};

fetch('https://maptiles.p.rapidapi.com/es/map/v1/3/4/2.png', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));