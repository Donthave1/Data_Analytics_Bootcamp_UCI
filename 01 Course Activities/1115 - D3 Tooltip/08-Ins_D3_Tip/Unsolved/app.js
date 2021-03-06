// The code for the chart is wrapped inside a function that
// automatically resizes the chart
function makeResponsive() {

  // if the SVG area isn't empty when the browser loads,
  // remove it and replace it with a resized version of the chart
  const svgArea = d3.select("body").select("svg");

  // clear svg is not empty
  if (!svgArea.empty()) {
    svgArea.remove();
  }

  // SVG wrapper dimensions are determined by the current width and
  // height of the browser window.
  const svgWidth = window.innerWidth;
  const svgHeight = window.innerHeight;

  const margin = {
    top: 50,
    bottom: 50,
    right: 50,
    left: 50
  };

  const height = svgHeight - margin.top - margin.bottom;
  const width = svgWidth - margin.left - margin.right;

  // Append SVG element
  const svg = d3
    .select(".chart")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

  // Append group element
  const chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Read CSV
  d3.csv("norway_medals.csv")
    .then(function(medalData) {

      // create date parser
      const dateParser = d3.timeParse("%d-%b");

      // parse data
      medalData.forEach(function(data) {
        data.date = dateParser(data.date);
        data.medals = +data.medals;
      });

      // create scales
      const xTimeScale = d3.scaleTime()
        .domain(d3.extent(medalData, d => d.date))
        .range([0, width]);

      const yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(medalData, d => d.medals)])
        .range([height, 0]);

      // create axes
      const xAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%d-%b"));
      const yAxis = d3.axisLeft(yLinearScale).ticks(6);

      // append axes
      chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);

      chartGroup.append("g")
        .call(yAxis);

      // line generator
      const line = d3.line()
        .x(d => xTimeScale(d.date))
        .y(d => yLinearScale(d.medals));

      // append line
      chartGroup.append("path")
        .data([medalData])
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", "red");

      // append circles
      const circlesGroup = chartGroup.selectAll("circle")
        .data(medalData)
        .enter()
        .append("circle")
        .attr("cx", d => xTimeScale(d.date))
        .attr("cy", d => yLinearScale(d.medals))
        .attr("r", "10")
        .attr("fill", "gold")
        .attr("stroke-width", "1")
        .attr("stroke", "black");

      // Date formatter to display dates nicely
      const dateFormatter = d3.timeFormat("%d-%b");

      // Step 1: Initialize Tooltip
      let toolTip = d3.tip()
        .attr("class", "tooltip")
        .offset([80, -60])
        .html(function(data) {
          return `<strong>${dateFormatter(data.date)}</strong>
                    <hr> ${data.medals} medal(s) won`;
        });

      // Step 2: Create the tooltip in chartGroup.
      chartGroup.call(toolTip);

      // Step 3: Create "mouseover" event listener to display tooltip
      circlesGroup.on("mouseover", function(data) {
        toolTip.show(data, this);
      })

      // Step 4: Create "mouseout" event listener to hide tooltip
      .on("mouseout", function(data) {
        toolTip.hide(data);
      });
    });
};

// When the browser loads, makeResponsive() is called.
makeResponsive();

// When the browser window is resized, makeResponsive() is called.
d3.select(window).on("resize", makeResponsive);
