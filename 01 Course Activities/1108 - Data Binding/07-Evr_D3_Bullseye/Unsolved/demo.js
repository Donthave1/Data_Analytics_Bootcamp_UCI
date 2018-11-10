// let svg = d3.select("body").append("svg");

// svg.attr("width", "100px").attr("height", "100px");

// svg.append("circle")
//     .attr("cx", 50)
//     .attr("cy", 25)
//     .attr("r", 25)
//     .attr("stroke", "purple")
//     .attr("stroke-width", 5)
//     .attr("fill", "none");

let svg = d3.select("body").append("svg");

svg.attr("width", "100px").attr("height", "100px");

let circles = svg.selectAll("circle");

let radiusValues = [40, 25, 10];

circles.data(radiusValues)
    .enter()
    .append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", function(data) {
        return data;
    })
    .attr("stroke", "black")
    .attr("stroke-width", "5")
    .attr("fill", "red");