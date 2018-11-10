// Dataset we will be using to set the height of our rectangles.
const booksReadThisYear = [17, 23, 20, 34];

// Setting the dimensions for the SVG container
const svgHeight = 600;
const svgWidth = 400;


let svg = d3.select("#svg-area")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

let svgGroup = svg.append("g")
    .attr("transform", "translate(50, 100)");

svgGroup.selectAll("rect")
    .data(booksReadThisYear)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("width", 50)
    .attr("height", function(data) {
        return data * 10;
    })
    .attr("x", function(data, index) {
        return index * 60;
    })
    .attr("y", function(data) {
        return svgHeight - data *10;
    });