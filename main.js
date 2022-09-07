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
        
        
        async function getData() {
                        //GETTING THE FIRST SIDE IN METRES
            const responce1 = await fetch(`https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode/distance?lat1=${firstPointB.value}&lng1=${firstPointA.value}&lat2=${secondPointB.value}&lng2=${secondPointA.value}`, options)
            const data1 = await responce1.json()
            const distance1 = await data1.distance

                        //GETTING THE SECOND SIDE IN METRES
            const responce2 = await fetch(`https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode/distance?lat1=${firstPointB.value}&lng1=${firstPointA.value}&lat2=${thirdPointB.value}&lng2=${thirdPointA.value}`, options)
            const data2 = await responce2.json()
            const distance2 = await data2.distance

            const responce3 = await fetch(`https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode/distance?lat1=${thirdPointB.value}&lng1=${thirdPointA.value}&lat2=${forthPointB.value}&lng2=${forthPointA.value}`, options)
            const data3 = await responce3.json()
            const distance3 = await data3.distance

            const responce4 = await fetch(`https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode/distance?lat1=${forthPointB.value}&lng1=${forthPointA.value}&lat2=${secondPointB.value}&lng2=${secondPointA.value}`, options)
            const data4 = await responce4.json()
            const distance4 = await data4.distance

            // add to data table
            const createNewRow = document.createElement("tr")
            const createNewColumn =createNewRow.append( document.createElement("td"))
            const tableDisplay = createNewColumn.append(document.getElementById("tableDisplay"))
            
            tableDisplay.innerHTML = `${createNewColumn.innerHTML= distance1}`
          //FIND PERIMETER
          const addTotal = (distance1 + distance2 + distance3 + distance4)/1000

          document.getElementById("perimeter").innerHTML = `${addTotal} kilometres`


        }
        getData()
    })
}



        //     .then(response => response.json())
        //     .then(response => {return distance1 = response.distance})
        //     .then(response => {document.getElementById("firstSide").innerHTML = `${distance1} metres`})
        //     .catch(err => console.error(err));
        

        // //GETTING THE SECOND SIDE
        //     
        //     .then(response => response.json())
        //     .then(response => {return distance2 = response.distance})
        //     .then(response => {document.getElementById("secondSide").innerHTML = `${distance2} metres`})
        //     .catch(err => console.error(err));


        // //GETTING THE THIRD SIDE
        //     
        //     .then(response => response.json())
        //     .then(response => {return distance3 = response.distance})
        //     .then(response => {document.getElementById("thirdSide").innerHTML = `${distance3} metres`})
        //     .catch(err => console.error(err));


        // //GETTING THE FORTH SIDE
        //     
        //     .then(response => response.json())
        //     .then(response => {return distance4 = response.distance})
        //     .then(response => {document.getElementById("forthSide").innerHTML = `${distance4} metres`})
        //     .catch(err => console.error(err));


