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

          //FIND PERIMETER
          const addTotal = distance1 + distance2 + distance3 + distance4

          //change into kilometres

          const toKilometre =(distance)=> Math.abs(distance/1000);

          document.getElementById("tableDisplay").innerHTML = `
          <tr>
          <th>"a" in Kilometres</th>
          <th>"b" in Kilometres</th>
          <th>"c" in Kilometres</th>
          <th>"d" in Kilometres</th>
          <th class="twinkle">PERIMETER IN KILOMETRES</th>
        </tr>
          <td id="firstSide">${toKilometre(distance1)}kilometre</td>
          <td id="secondSide">${toKilometre(distance2)}kilometre</td>
          <td id="thirdSide">${toKilometre(distance3)}kilometre</td>
          <td id="forthSide">${toKilometre(distance4)}kilometre</td>
          <td id="perimeter">${toKilometre(addTotal)} kilometres</td>`

          //getting area of the area 
          const area = distance1 * distance2
                        //in square metres 
                    document.getElementById("metres").innerHTML = `${area} metre square`
                       //in acres
                    acre = area * 0.000242;
                    document.getElementById("acres").innerHTML = acre;
                         //in hectares
                    hectares = area * 0.0001;
                    document.getElementById("hectares").innerHTML = hectares;
                        //in square kilometres 
                    squareKilometres = area * 0.000001
                    document.getElementById("kilometres").innerHTML = squareKilometres

                    ares = area * 0.01
                    document.getElementById("ares").innerHTML = ares;
                
        }
        getData()
    })
}