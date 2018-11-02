d3.selectAll("button").on("click", function(event) {
  // What will be logged out? What is `this` in this case?
  console.log(this);
  d3.select(this).text("New Button");
});
