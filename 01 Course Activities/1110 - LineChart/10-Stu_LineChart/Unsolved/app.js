// Define SVG area dimensions
const svgWidth = 960;
const svgHeight = 500;

// Define the chart's margins as an object
const margin = {
  top: 60,
  right: 60,
  bottom: 60,
  left: 60
};

// Define dimensions of the chart area
const chartWidth = svgWidth - margin.left - margin.right;
const chartHeight = svgHeight - margin.top - margin.bottom;

// Select body, append SVG area to it, and set its dimensions
let svg = d3.select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append a group area, then set its margins
let chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Configure a parseTime function which will return a new Date object from a string
let parseTime = d3.timeParse("%B");

// Load data from miles-walked-this-month.csv
d3.csv("miles-walked-this-month.csv", function(error, milesData) {
  // Throw an error if one occurs
  if (error) {
    throw error;
  }

  // Print the milesData
  console.log(milesData);

  // Format the date and cast the miles value to a number
  milesData.forEach(function(data) {
    data.date = parseTime(data.date);
    data.miles = +data.miles;
  });

  // Configure a time scale with a range between 0 and the chartWidth and the domain as the extent of the dates
  let timeScale = d3.scaleTime()
    .domain(d3.extent(milesData.map(data => data.date)))
    .range([0, chartWidth]);

  // Configure a linear scale with a range between the chartHeight and 0 and the domain between 0 and the max of the miles walked
  let yScale = d3.scaleLinear()
    .domain([0, d3.max(milesData.map(data => data.miles))])
    .range([chartHeight, 0]);

  // Create two new functions passing the scales in as arguments
  // These will be used to create the chart's axes
  let bottomAxis = d3.axisBottom(timeScale);
  let leftAxis = d3.axisLeft(yScale);


  // Configure a line function which will plot the x and y coordinates using our scales
  let createLine = d3.line()
    .x(data => timeScale(data.date))
    .y(data => yScale(data.miles));

  // Append an SVG path and plot its points using the line function, give the path a class of line
  chartGroup.append("path")
    .attr("d", createLine(milesData))
    .classed("line", true);

  // Append an SVG group element to the SVG area, create the left axis inside of it, and give it a class of "axis"
  chartGroup.append("g")
    .classed("axis", true)
    .call(leftAxis);

  // Append an SVG group element to the SVG area, create the bottom axis inside of it
  // Translate the bottom axis to the bottom of the page
  // Give it a class of "axis"
  chartGroup.append("g")
    .classed("axis", true)
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(bottomAxis);

});
