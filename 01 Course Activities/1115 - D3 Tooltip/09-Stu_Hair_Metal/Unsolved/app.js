const svgWidth = 960;
const svgHeight = 500;

const margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};

const width = svgWidth - margin.left - margin.right;
const height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
const svg = d3.select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

const chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import Data
d3.csv("hairData.csv")
  .then(function(hairData) {

    // Step 1: Parse Data/Cast as numbers
    // ==============================
    hairData.forEach(function(data) {
      data.hair_length = +data.hair_length;
      data.num_hits = +data.num_hits;
    });

    // Step 2: Create scale functions
    // ==============================
    let xScale = d3.scaleLinear()
        .domain([20, d3.max(hairData, d => d.hair_length)])
        .range([0, width]);
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(hairData, d => d.num_hits)])
        .range([height, 0]);

    // Step 3: Create axis functions
    // ==============================
    const bottomAxis = d3.axisBottom(xScale);
    const leftAxis = d3.axisLeft(yScale);

    // Step 4: Append Axes to the chart
    // ==============================
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);

    chartGroup.append("g")
        .call(leftAxis);

    // Step 5: Create Circles
    // ==============================
    let circlesGroup = chartGroup.selectAll("circle")
      .data(hairData)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(d.hair_length))
      .attr("cy", d => yScale(d.num_hits))
      .attr("r", "15")
      .attr("fill", "purple")
      .attr("opacity", "0.5");

    // Step 6: Initialize tool tip
    // ==============================
    let toolTip = d3.tip()
        .attr("class", "tooltip")
        .offset([80, -60])
        .html(function(data) {
          return `${data.rockband}<br />
                  Hair length: ${data.hair_length}<br /> 
                  Hits: ${data.num_hits}`;
        });

    // Step 7: Create tooltip in the chart
    // ==============================
    chartGroup.call(toolTip);

    // Step 8: Create event listeners to display and hide the tooltip
    // ==============================
    circlesGroup.on("click", function(data) {
      toolTip.show(data, this);
    })
    .on("mouseout", function(data) {
      toolTip.hide(data);
    });

    // Create axes labels
    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 40)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Number of Billboard 100 Hits");

    chartGroup.append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
      .attr("class", "axisText")
      .text("Hair Metal Band Hair Length (inches)");
  });
