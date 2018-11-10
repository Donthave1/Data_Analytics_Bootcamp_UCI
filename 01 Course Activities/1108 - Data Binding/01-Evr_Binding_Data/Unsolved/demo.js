// Place data into entry spots
// const arr = [50, 55, 53];

// d3.select("ul").selectAll("li").data(arr);
// d3.select("ul").selectAll("li").data();

// d3.select("ul").selectAll("li")
//     .each(function(d, i) {
//         console.log("element", this);
//         console.log("data", d);
//         console.log("index", i);
//     });


// When you have extra data but not enough entry spots
// let arr = [50, 55, 53];

// d3.select("ul").selectAll("li")
//     .data(arr)
//     .text(function(data) {
//         return data;
//     });


// arr = [50, 55, 53, 67, 78, 90];

// d3.select("ul").selectAll("li")
//     .data(arr)
//     .enter()
//     .append("li")
//     .text(function(data) {
//         return data;
//     });


// When you have less data but extra entry spots
let arr = [50, 55];
d3.select("ul").selectAll("li")
    .data(arr)
    .text(function(data) {
        return data;
    })
    .exit()
    .remove();