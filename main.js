document.addEventListener("DOMContentLoaded",start)
	
function start(event){
    event.preventDefault();

    const firstPointA =	document.getElementById("longitudeA")
    const firstPointB = document.getElementById("latitudeA")

    const secondPointA = document.getElementById("longitudeB")
    const secondPointB = document.getElementById("latitudeB")

    const thirdPointA = document.getElementById("longitudeC");
    const thirdPointB = document.getElementById("latitudeC")

    const forthPointA = document.getElementById("longitudeD")
    const forthPointB = document.getElementById("latitudeD")

    document.getElementById("addA").addEventListener("click",()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9aa649390bmsh438d62d7b07cf67p1ebf76jsn1cae3bd5b0a7',
                'X-RapidAPI-Host': 'global-zip-codes-with-lat-and-lng.p.rapidapi.com'
            }
        };
        //GETTING THE FIRST SIDE
        fetch(`https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode/distance?lat1=${firstPointB.value}&lng1=${firstPointA.value}&lat2=${secondPointB.value}&lng2=${secondPointA.value}`, options)
            .then(response => response.json())
            .then(response => {return distance1 = response.distance})
            .then(response => {document.getElementById("firstSide").innerHTML = `${distance1} metres`})
            .catch(err => console.error(err));
        

        //GETTING THE SECOND SIDE
            fetch(`https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode/distance?lat1=${firstPointB.value}&lng1=${firstPointA.value}&lat2=${thirdPointB.value}&lng2=${thirdPointA.value}`, options)
            .then(response => response.json())
            .then(response => {return distance2 = response.distance})
            .then(response => {document.getElementById("secondSide").innerHTML = `${distance2} metres`})
            .catch(err => console.error(err));


        //GETTING THE THIRD SIDE
            fetch(`https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode/distance?lat1=${thirdPointB.value}&lng1=${thirdPointA.value}&lat2=${forthPointB.value}&lng2=${forthPointA.value}`, options)
            .then(response => response.json())
            .then(response => {return distance3 = response.distance})
            .then(response => {document.getElementById("thirdSide").innerHTML = `${distance3} metres`})
            .catch(err => console.error(err));


        //GETTING THE FORTH SIDE
            fetch(`https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode/distance?lat1=${forthPointB.value}&lng1=${forthPointA.value}&lat2=${secondPointB.value}&lng2=${secondPointA.value}`, options)
            .then(response => response.json())
            .then(response => {return distance4 = response.distance})
            .then(response => {document.getElementById("forthSide").innerHTML = `${distance4} metres`})
            .catch(err => console.error(err));

            console.log(document.getElementById("firstSide").innerHTML);
    })
}




