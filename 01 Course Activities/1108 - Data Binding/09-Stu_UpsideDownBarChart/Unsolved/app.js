// Dataset we will be using to set the height of our rectangles
const booksReadThisYear = [17, 23, 20, 34];

// Append an SVG wrapper to the page and set a variable equal to a reference to it
const svgHeight = 600;
const svgWidth = 400;

let svg = d3.select("#svg-area")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// Vertical Bar Chart
// svg.selectAll("rect")
//     .data(booksReadThisYear)
//     .enter()
//     .append("rect")
//     .classed("bar", true)
//     .attr("width", 50)
//     .attr("height", function(data) {
//         return data * 10;
//     })
//     .attr("x", function(data, index) {
//         return index * 60;
//     });

// BONUS
// Horizontal Bar Chart
// svg.selectAll("rect")
//     .data(booksReadThisYear)
//     .enter()
//     .append("rect")
//     .classed("bar", true)
//     .attr("width", 50)
//     .attr("height", function(data) {
//         return data * 10;
//     })
//     .attr("x", function(data, index) {
//         return index * 60;
//     })
//     .attr("y", function(data) {
//         return svgHeight - data *10;
//     });

svg.selectAll("rect")
    .data(booksReadThisYear)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("width", function(data){
        return data * 10;
    })
    .attr("height", 50)
    .attr("x", 0)
    .attr("y", function(data, index) {
        return index * 60;
    });

// BONUS 2
// Alter your Vertical bar chart code to go from bottom  up.
