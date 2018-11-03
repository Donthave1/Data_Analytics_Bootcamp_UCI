let trace1 = {
    x: ["beer", "wine", "martini", "margarita", "ice tea", "rum & coke", "mai tai", "gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.2, 6.0, 4.6],
    type: "bar"
};

let data = [trace1];

let layout = {
    title: "Bar Chart",
    xaxis: {title: "Drinks"}, 
    yaxis: {title: "% of Drinks ordered"}
};

Plotly.newPlot("plot", data, layout)