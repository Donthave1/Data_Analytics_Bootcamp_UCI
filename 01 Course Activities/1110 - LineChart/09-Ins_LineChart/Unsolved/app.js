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
const svg = d3.select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

const chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

let parseTime = d3.timeParse("%Y");

d3.csv("forcepoints.csv", function(error, forceData){
  if (error) {
    throw error;
  }

  forceData.forEach(function(data){
    data.date = parseTime(data.date);
    data.force = +data.force;
  });

  console.log(forceData);

  let timeScale = d3.scaleTime()
    .domain(d3.extent(forceData.map(data => data.date)))
    .range([0, chartWidth]);

  let yScale = d3.scaleLinear()
    .domain([0, d3.max(forceData.map(data => data.force))])
    .range([chartHeight, 0]);

  let bottomAxis = d3.axisBottom(timeScale);
  let leftAxis = d3.axisLeft(yScale);

  let createLine = d3.line()
    .x(data => timeScale(data.date))
    .y(data => yScale(data.force));

  chartGroup.append("path")
    .attr("d", createLine(forceData))
    .classed("line", true);

  chartGroup.append("g")
    .classed("axis", true)
    .call(leftAxis);

  chartGroup.append("g")
    .classed("axis", true)
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(bottomAxis);
});
