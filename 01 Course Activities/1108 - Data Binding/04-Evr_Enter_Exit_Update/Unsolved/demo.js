// let austinTemps = [76, 59, 59, 73, 71];

// let selection = d3.selectAll("#content")
//     .selectAll(".temps")
//     .data(austinTemps);

// selection
//     .enter()
//     .append("div")
//     .classed("temps", true)
//     .merge(selection)
//     .style("height", function(data) {
//         return data + "px"
//     });

let austinTemps = [76];

function update(data) {
    let selection = d3.selectAll("#content")
    .selectAll(".temps")
    .data(data);

    selection
        .enter()
        .append("div")
        .classed("temps", true)
        .merge(selection)
        .style("height", function(data) {
            return data + "px"
        });

    selection.exit().remove();
};

update([100, 103, 105, 110, 100, 98]);
update([80]);