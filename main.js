let card = document.createElement("li");
card.className = "card"
document.querySelector("#results").appendChild(card)

var map = L.map('map').setView([51.5, -0.1], 12);
L.tileLayer('https://maptiles.p.rapidapi.com/en/map/v1/{z}/{x}/{y}.png?rapidapi-key=YOUR-RAPIDAPI-KEY', {
attribution: 'Tiles &copy: <a href="https://www.maptilesapi.com/">MapTiles API</a>, Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
maxZoom: 19
}).addTo(map);