console.log(data);
// YOUR CODE HERE
// let greekName = data.map(god => god.greekName);
// console.log("greekName: ", greekName);

// let greekSearchResults = data.map(god => god.greekSearchResults);
// console.log("greekSearchResult: ", greekSearchResults);

// let romanName = data.map(god => god.romanName);
// console.log("romanName: ", romanName);

// let romanSearchResults = data.map(god => god.romanSearchResults);
// console.log("romanSearchResults: ", romanSearchResults);


let trace1 = {
    x: data.map(function(obj){
        return obj.pair;
    }),
    y: data.map(obj => obj.greekSearchResults), 
    text: data.map(obj => obj.greekName),
    name: "Greek",
    type: "bar"
};

let trace2 = {
    x: data.map(function(obj){
        return obj.pair;
    }),
    y: data.map(obj => obj.romanSearchResults), 
    text: data.map(obj => obj.romanName),
    name: "Roman",
    type: "bar"
};
 
let layout = {
    title: "Greek vs Roman gods search results",
    barmode:"group"
};


let plotData = [trace1, trace2];

Plotly.newPlot("plot", plotData, layout);