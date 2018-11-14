// Answer the following questions after discussing with a partner.

/* 1. What does SVG stand for? How are they used with D3? */
Scalable Vector Graphics
/* 2. What is data binding? */
In computer programming, data binding is a general technique that binds data sources from the provider and consumer together and synchronizes them. 
/* 3. Given the following and an HTML page with no elements currently in the body,
use the enter() pattern to render three <li> elements to the page with text matching
the integers in the array. */

let arr1 = [1, 2, 3];
let ul = d3.select("body").append("ul");
let selection = d3.selectAll("li")
    .data(arr1)
    .enter()
    .append("li")
    .text(function(data) {
        return data;
    });


/* 4. Imagine three <li> elements already exist on the page.  Create code to update the text of those elements while also adding three new elements to match the array below. */
let arr2 = [1, 1, 2, 3, 5, 8];
// let ul = d3.select("ul");
selection
    .data(arr2)
    .enter()
    .append("li")
    .merge(selection)
    .text(function(data) {
        return data;
    });


/* Bonus - Refactor your solution to number 4 above using the ES6 syntax for arrow functions. Then, modify the code to set the text of each
element to "<index in the array>: <item from the array>" */

selection
    .data(arr2)
    .enter()
    .append("li")
    .merge(selection)
    .text(function(data, index) {
        return `${index}: ${data}`;
    });
