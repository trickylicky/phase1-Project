let card = document.createElement("li");
card.className = "card"
document.querySelector("#results").appendChild(card)

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9aa649390bmsh438d62d7b07cf67p1ebf76jsn1cae3bd5b0a7',
		'X-RapidAPI-Host': 'global-zip-codes-with-lat-and-lng.p.rapidapi.com'
	}
};

fetch('https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode/distance?lat1=13.07&lng1=80.2048&lat2=12.07&lng2=78.2048', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));