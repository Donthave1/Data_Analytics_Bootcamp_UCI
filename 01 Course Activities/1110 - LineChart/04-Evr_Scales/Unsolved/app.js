const dataArr = [10, 20, 2000];

console.log("Max: ", d3.max(dataArr));

console.log("Min: ", d3.min(dataArr));

// index[0] always Min, index[1] always Max
console.log("Domain of Data: ", d3.extent(dataArr));


let testScores = [50, 90, 95, 75, 85];

let yScale = d3.scaleLinear() // y = mx + b
    .domain([0, 100]) //m
    .range([0, 1000]); //y

console.log(`50 return ${yScale(50)}`); // ? = 50x + b
console.log(`75 return ${yScale(75)}`); // ? = 75x + b
console.log(`100 return ${yScale(100)}`); // ? = 100x + b

let svgHeight = 1000;

let yScaleA = d3.scaleLinear()
    .domain([0, d3.max(testScores)])
    .range([0, svgHeight]);

console.log(`50 return ${yScaleA(50)}`); 
console.log(`75 return ${yScaleA(75)}`); 
console.log(`95 return ${yScaleA(95)}`);  


let yScaleB = d3.scaleLinear()
    .domain(d3.extent(testScores))
    .range([0, svgHeight]);


console.log(`50 return ${yScaleB(50)}`); 
console.log(`75 return ${yScaleB(75)}`); 
console.log(`95 return ${yScaleB(95)}`); 

svgHeight = 600;
let svgWidth = 1000;

testScores = [90, 85, 75, 90];
let students = ["Han", "Sarah", "Matt", "Ruchi"];

let xScale = d3.scaleBand()
    .domain(students)
    .range([0, svgWidth]);

console.log(`Han's x coordinate: ${xScale("Han")}`);
console.log(`Sarah's x coordinate: ${xScale("Sarah")}`);
console.log(`Matt's x coordinate: ${xScale("Matt")}`);
console.log(`Ruchi's x coordinate: ${xScale("Ruchi")}`);

console.log(`Each band is ${xScale.bandwidth()} pixels long`);


let yScaleC = d3.scaleLinear()
    .domain([0, 100])
    .range([0, svgHeight]);

console.log(`The height of Han's bar: ${yScaleC(testScores[0])}`)