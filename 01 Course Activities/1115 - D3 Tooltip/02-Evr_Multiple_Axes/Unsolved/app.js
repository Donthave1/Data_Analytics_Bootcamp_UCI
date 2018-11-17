// Step 1: Set up our chart
//= ================================
const svgWidth = 960;
const svgHeight = 500;

const margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

const width = svgWidth - margin.left - margin.right;
const height = svgHeight - margin.top - margin.bottom;

// Step 2: Create an SVG wrapper,
// append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
// =================================
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

const chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Step 3:
// Import data from the donuts.csv file
// =================================
d3.csv("donuts.csv", function(error, donutData) {
  if (error) throw error;

  // Step 4: Parse the data
  // Format the data and convert to numerical and date values
  // =================================
  // Create a function to parse date and time
  const parseTime = d3.timeParse("%d-%b");

  // Format the data
  donutData.forEach(function(data) {
    data.date = parseTime(data.date);
    data.morning = +data.morning;
    data.evening = +data.evening;
  });

  // Step 5: Create Scales
  //= ============================================
  // x scale
  const xTimeScale = d3.scaleTime()
    .domain(d3.extent(donutData, d => d.date))
    .range([0, width]);

  let yLinearScale1 = d3.scaleLinear()
    .domain(d3.extent(donutData, d => d.morning))
    .range([height, 0]);
  let yLinearScale2 = d3.scaleLinear()
    .domain(d3.extent(donutData, d => d.evening))
    .range([height, 0]);


  // Step 6: Create Axes
  // =============================================
  // x axis
  const bottomAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%d-%b"));
  // YOUR CODE HERE
  const leftAxis = d3.axisLeft(yLinearScale1);
  const rightAxis = d3.axisRight(yLinearScale2);



  // Step 7: Append the axes to the chartGroup
  // ==============================================
  // Add bottomAxis
  chartGroup.append("g").attr("transform", `translate(0, ${height})`).call(bottomAxis);
  // YOUR CODE HERE
  chartGroup.append("g")
    .call(leftAxis);

  chartGroup.append("g")
    .attr("transform", `translate(${width}, 0)`)
    .call(rightAxis);


  // Step 8: Set up two line generators and append two SVG paths
  // ==============================================
  // YOUR CODE HERE
  // Line generators for each line
  let createLine1 = d3.line()
  .x(d => xTimeScale(d.date))
  .y(d => yLinearScale1(d.morning));

  // Line generator for evening data
  let createLine2 = d3.line()
    .x(d => xTimeScale(d.date))
    .y(d => yLinearScale2(d.evening));

  // Append a path for line1
  chartGroup.append("path")
    .attr("d", createLine1(donutData))
    .classed("line green", true);

  // Append a path for line2
  chartGroup.append("path")
    .attr("d", createLine2(donutData))
    .classed("line orange", true);


});
