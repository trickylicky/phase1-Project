const firstPoint =	[document.getElementById("longitudeA"),document.getElementById("latitudeA")]
const secondPoint =	[document.getElementById("longitudeB"),document.getElementById("latitudeB")]
const thirdPoint =	[document.getElementById("longitudeC"),document.getElementById("latitudeA")]
const forthPoint =	[document.getElementById("longitudeD"),document.getElementById("latitudeA")]




const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9aa649390bmsh438d62d7b07cf67p1ebf76jsn1cae3bd5b0a7',
		'X-RapidAPI-Host': 'global-zip-codes-with-lat-and-lng.p.rapidapi.com'
	}
};
	fetch(`https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode/distance?lat1=${firstPoint[1].value}&lng1=${firstPoint[0].value}&lat2=${secondPoint[1].value}&lng2=${secondPoint[0].value}`, options)
			.then(response => response.json())
			.then(response => {const distance1 = response.distance})
			.then(response=>console.log(response))
			.catch(err => console.error(err));
	fetch(`https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode/distance?lat1=${secondPoint[1].value}&lng1=${secondPoint[0].value}&lat2=${thirdPoint[1].value}&lng2=${thirdPoint[0].value}`, options)
			.then(response => response.json())
			.then(response => {const distance2 = response.distance})
			.then(response=>console.log(response))
			.catch(err => console.error(err));
	fetch(`https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode/distance?lat1=${thirdPoint[1].value}&lng1=${thirdPoint[0].value}&lat2=${forthPoint[1].value}&lng2=${forthPoint[0].value}`, options)
			.then(response => response.json())
			.then(response => {const distance3 = response.distance})
			.then(response=>console.log(response))
			.catch(err => console.error(err));
	fetch(`https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode/distance?lat1=${forthPoint[1].value}&lng1=${forthPoint[0].value}&lat2=${firstPoint[1].value}&lng2=${firstPoint[0].value}`, options)
			.then(response => response.json())
			.then(response => {const distance4 = response.distance})
			.then(response=>console.log(response))
			.catch(err => console.error(err));

document.addEventListener("DOMContentLoaded",start)

function start(event){
	event.preventDefault();

	document.getElementById("addA").addEventListener("click",()=>{
		//get first long and lat and second long and lat
		//get second long and lat and third long and lat
		//get third long and lat and forth long and lat
		//get forth long and lat and first long and lat
	})
}