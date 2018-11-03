console.log(data);
// YOUR CODE HERE
let trace1 = {
    x: data.year,
    y: data.long_jump,
    name: "Long Jump",
    type: "Scatter",
    mode: "markers"
};

let trace2 = {
    x: data.year,
    y: data.high_jump,
    name: "High Jump",
    type: "Scatter",
    mode: "markers"
};

let trace3 = {
    x: data.year,
    y: data.discus_throw,
    name: "Throw",
    type: "Scatter",
    mode: "markers"
};

let layout = {
    title: "Olympics trends over the years",
    xaxis: {title: "Year"}, 
    yaxis: {title: "Olympics Event"}
};


let plotData = [trace1, trace2, trace3];

Plotly.newPlot("plot", plotData, layout);