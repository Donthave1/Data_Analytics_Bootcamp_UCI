// Generating a Path with D3 and an Array

const coordinates = [
  [100, 120],
  [200, 250],
  [300, 160],
  [400, 200]
];

let lineGen = d3.line();

console.log("Drawing Commands", lineGen(coordinates));

let svgA = d3.select("#path-2");

svgA.append("path")
  .attr("fill", "none")
  .attr("stroke", "blue")
  .attr("stroke-width", 3)
  .attr("d", lineGen(coordinates));
