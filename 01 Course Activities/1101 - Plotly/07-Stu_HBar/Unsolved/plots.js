// @TODO: Complete the following sections

function sortResults(first, second) {
    return second.greekSearchResults - first.greekSearchResults;
}

// Sort the data array using the greekSearchResults value
data.sort(sortResults);

// Slice the first 10 objects for plotting
let topTen = data.slice(0, 10);
console.log(topTen);

topTen.reverse(); 

// Trace1 for the Greek Data
let trace1 = {
    x: topTen.map(function(obj) {return obj.greekSearchResults; }),
    y: topTen.map(function(obj) {return obj.greekName; }),
    text: topTen.map(function(obj) {return obj.greekName; }),
    name: "Greek",
    type: "bar",
    orientation: "h"
};

// set up the data variable
let chartData = [trace1];

// set up the layout variable
let layout = {
    title: "Greek gods search results",
    margin: {l: 100, r: 100, t: 100, b: 100}
}

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", chartData, layout);


// // Ed's way
// console.log(data);
// // Sort the data array using the greekSearchResults value
// let greekSearchResults = data.map(god => god.greekSearchResults);
// // console.log("greekSearchResult: ", greekSearchResults);
// let greekName = data.map(god => god.greekName);
// // console.log("greekName: ", greekName);

// function compareNumberAsc(first, second) {
//     return second - first;
// };

// // Slice the first 10 objects for plotting
// let sortedSearch = greekSearchResults.sort(compareNumberAsc);
// let topTenSearch = sortedSearch.slice(0, 10);

// let sortedName = greekName.sort(compareNumberAsc);
// let topTenName = sortedName.slice(0, 10);

// console.log(topTenName)
// console.log(topTenSearch)

// // Trace1 for the Greek Data
// let trace1 = {
//     x: topTenSearch,
//     y: topTenName, 
//     type: "bar",
//     orientation: "h",
//     transforms: [{
//         type: "sort",
//         target: "y",
//         order: "descending"
//     }]
// };
// // set up the data variable
// let plotData = [trace1];

// // set up the layout variable
// let layout = {
//     title: "Greek Gods search results"
// };

// // Render the plot to the div tag with id "plot"
// Plotly.newPlot("plot", plotData, layout);