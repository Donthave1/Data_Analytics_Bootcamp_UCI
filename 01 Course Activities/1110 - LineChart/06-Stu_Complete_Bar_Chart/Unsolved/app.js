// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from hours-of-tv-watched.csv
d3.csv("hours-of-tv-watched.csv", function(error, tvData) {
  if (error) {
    throw error;
  }
  // Cast the hours value to a number for each piece of tvData
  tvData.forEach(function(data){
    data.hours = +data.hours;
  });

  // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
  let xScale = d3.scaleBand()
      .domain(tvData.map(data => data.name))
      .range([0, chartWidth])
      .padding(0.1);

  // Create a linear scale for the vertical axis.
  let yScale = d3.scaleLinear()
      .domain([0, d3.max(tvData.map(data => data.hours))])
      .range([chartHeight, 0]);


  // Create two new axes functions passing our scales in as arguments
  let bottomAxis = d3.axisBottom(xScale);
  let leftAxis = d3.axisLeft(yScale);


  // Append two SVG group elements to the chartGroup area,
  // and create the bottom and left axes inside of them
  chartGroup.append("g")
    .call(leftAxis);

  chartGroup.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(bottomAxis);


  // Create one SVG rectangle per piece of tvData
  // Use the linear and band scales to position each rectangle within the chart
  chartGroup.selectAll(".bar")
    .data(tvData)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("x", data => xScale(data.name))
    .attr("y", data => yScale(data.hours))
    .attr("width", xScale.bandwidth())
    .attr("height", data => chartHeight - yScale(data.hours));
});