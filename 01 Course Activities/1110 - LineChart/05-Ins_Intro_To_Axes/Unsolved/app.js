// data
const dataArray = [1, 2, 3];
const dataCategories = ["one", "two", "three"];

// svg container
const svgHeight = 400;
const svgWidth = 1000;

// margins
const margin = { top: 50, right: 50, bottom: 50, left: 50 };

// chart area minus margins
const chartHeight = svgHeight - margin.top - margin.bottom;
const chartWidth = svgWidth - margin.left - margin.right;

// create svg container
const svg = d3.select("#svg-area").append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

// shift everything over by the margins
const chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// scale y to chart height
let yScale = d3.scaleLinear()
    .domain([0, d3.max(dataArray)])
    .range([chartHeight, 0]);

// scale x to chart width
let xScale = d3.scaleBand()
    .domain(dataCategories)
    .range([0, chartWidth])
    .padding(0.05);

// create axes
let yAxis = d3.axisLeft(yScale);
let xAxis = d3.axisBottom(xScale);

// set the x axis to the bottom of the chart
chartGroup.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(xAxis);

// set the y axis
chartGroup.append("g")
    .call(yAxis);

// Append Data to chartGroup
chartGroup.selectAll(".bar")
    .data(dataArray)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("x", function(data, index) {
        return xScale(dataCategories[index]);
    })
    .attr("y", function(data) {
        return yScale(data);
    })
    .attr("width", xScale.bandwidth())
    .attr("height", function(data) {
        return chartHeight - yScale(data);
    });