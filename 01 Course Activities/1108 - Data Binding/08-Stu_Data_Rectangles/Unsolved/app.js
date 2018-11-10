// Data which we will be using to build our rectangle
const booksReadThisYear = [15];

// Append the SVG wrapper to the page, set its height and width, and create a variable which references it
let svg = d3.select("#svg-area")
    .append("svg")
    .attr("width", "400px")
    .attr("height", "600px");

// Append a rectangle and set its height in relation to the booksReadThisYear value

svg.append("rect")
    .classed("bar", true)
    .data(booksReadThisYear)
    .attr("width", 100)
    .attr("height", function(data) {
        return data * 10;
    })
    .attr("x", 0)
    .attr("y", 0);
