var button = d3.select("#click-me");
var inputField = d3.select("#input-field");

function handleClick() {
    d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy' />")
};

button.on("click", handleClick);

inputField.on("change", function() {
    var newText = d3.event.target.value;
    alert(newText);
});