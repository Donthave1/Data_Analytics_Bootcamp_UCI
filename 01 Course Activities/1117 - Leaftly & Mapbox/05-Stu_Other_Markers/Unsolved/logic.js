// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
const myMap = L.map("map").setView([39.8283, -98.5795], 5);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Create a red circle over Dallas
L.circle([32.86, -96.95], {
  color: "red",
  fillColor: "red",
  fillOpacity: "1",
  radius: 50000
}).addTo(myMap);

// Connect a black line from NYC to Toronto
let line = [
  [40.7128, -74.0059],
  [34.0522, -118.2437]
];
L.polyline(line, {
  color: "black"
}).addTo(myMap)


// Create a purple polygon that covers the area in Atlanta, Savannah, Jacksonville and Montgomery
L.polygon([
  [33.715473, -84.351498],
  [30.284193, -81.662024],
  [30.499243, -86.028672],
  [32.936090, -86.991842]
], {
  color: "purple",
  fillColor: "purple",
  fillOpacity: "0.75"
}).addTo(myMap);