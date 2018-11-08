/* data route */
let url = "/data";

function buildPlot() {
    d3.json(url).then(function(data) {
        console.log(data);

        let trace = {
            type: "scatter",
            mode: "lines",
            name: "Bigfoot Sightins",
            x: data.map(
                function(obj) {
                    return obj.year; 
                }
            ),
            y: data.map(
                function(obj) {
                    return obj.sightings; 
                }
            ),
            line: {
                color:"#17BECF"
            }
        };

        let chartData = [trace];

        let layout = {
            title: "Bigfoot Sightings per Year",
            xaxis: {
                type:"date"
            },
            yaxis: {
                autorange: true,
                type: "linear"
            }
        };
        Plotly.newPlot("plot", chartData, layout)
    });
}

buildPlot();
