function randomNumberGen(limit) {
    let numbers = [];
    for (let i = 0; i < limit; i++) {
        numbers.push(Math.floor(Math.random() * 10));
    }
    return numbers;
};

let trace1 = {
    x: [1,2,3,4,5],
    y: randomNumberGen(5), 
    type: "scatter"
};

let trace2 = {
    x: [1,2,3,4,5],
    y: randomNumberGen(5), 
    type: "scatter"
};

let data = [trace1, trace2];

Plotly.newPlot("plot", data);