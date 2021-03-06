// Define SVG area dimensions
const svgWidth = 960;
const svgHeight = 660;

// Define the chart's margins as an object
const chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
const chartWidth = svgWidth - chartMargin.left - chartMargin.right;
const chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
const svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
const chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from hours-of-tv-watched.csv
d3.csv("hours-of-tv-watched.csv", function(error, tvData) {

  // Log an error if one exists
  if (error) return console.warn(error);

  // Print the tvData
  console.log(tvData);

  // Cast the hours value to a number for each piece of tvData
  tvData.forEach(function(data) {
    data.hours = +data.hours;
  });

  const barSpacing = 10; // desired space between each bar
  const scaleY = 10; // 10x scale on rect height

 // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
  const barWidth = (chartWidth - (barSpacing * (tvData.length - 1))) / tvData.length;

   // @TODO
  chartGroup.selectAll(".bar")
  .data(tvData)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", function(data) {
    return barWidth;
  })
  .attr("height", function(data) {
    return data.hours * scaleY;
  })
  .attr("x", function(data, index) {
  return index * (barWidth + barSpacing);
  })
  .attr("y", function(data) {
  return chartHeight - data.hours * scaleY;
  });
});
