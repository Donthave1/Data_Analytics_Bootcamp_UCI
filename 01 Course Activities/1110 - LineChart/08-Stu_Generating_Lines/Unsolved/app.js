const svgWidth = 1000;
const svgHeight = 500;

// create an SVG element
const svg = d3.select("#svg-area")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Load csv data
d3.csv("NCHS_life_expectancy_at_birth.csv", function(error, lifeData) {

  if (error) return console.warn(error);

  console.log(lifeData);

  // cast the data from the csv as numbers
  lifeData.forEach(function(data) {
    data.year = +data.year;
    data.lifeExpectancy = +data.lifeExpectancy;
  });

  // Create a scale for your independent (x) coordinates
  let xScale = d3.scaleLinear()
  .domain(d3.extent(lifeData.map(data => data.year)))
  .range([0, svgWidth]);

  // Create a scale for your dependent (y) coordinates
  let yScale = d3.scaleLinear()
  .domain([0, d3.max(lifeData.map(data => data.lifeExpectancy))])
  .range([svgHeight, 0]);

  // create a line generator function and store as a variable
  // use the scale functions for x and y data
  let createLine = d3.line()
  .x(data => xScale(data.year))
  .y(data => yScale(data.lifeExpectancy));

  // Append a path element to the svg, make sure to set the stroke, stroke-width, and fill attributes.
  svg.append("path")
    .attr("d", createLine(lifeData))
    .attr("fill", "none")
    .attr("stroke", "purple")
    .attr("stroke-width", 3);

});
