const map = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 13
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
}).addTo(map);

const link = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=10000";

d3.json(link, function(response){
    let heatArray = [];
    for(let i = 0, ii = response.length; i < ii; i++){
        const location = response[i].location;

        if (location) {
            heatArray.push([location.coordinates[1], location.coordinates[0]]);
        }
    }

    const heat = L.heatLayer(heatArray, {
        radius: 20,
        blur: 35
    }).addTo(map);
});