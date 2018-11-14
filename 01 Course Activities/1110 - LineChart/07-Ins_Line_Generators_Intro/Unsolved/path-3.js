// Scaling and Using Accessor Functions

const dataArray = [
  {x: 10, y: 12},
  {x: 20, y: 25},
  {x: 30, y: 16},
  {x: 40, y: 20}
];

let xScale = d3.scaleLinear()
  .domain([0, d3.max(dataArray.map(data => data.x))])
  .range([0, 400]);

let yScale = d3.scaleLinear()
  .domain([0, d3.max(dataArray.map(data => data.y))])
  .range([0, 250]);

let lineGenB = d3.line()
  .x(data => xScale(data.x))
  .y(data => yScale(data.y));

console.log("Drawing Commands: ", lineGenB(dataArray));

let svgB = d3.select("#path-3");

svgB.append("path")
  .attr("fill", "none")
  .attr("stroke", "orange")
  .attr("stroke-width", 3)
  .attr("d", lineGenB(dataArray));