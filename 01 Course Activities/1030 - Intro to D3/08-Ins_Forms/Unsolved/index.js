var submitBtn = d3.select("#submit");

function submitHandler() {
    d3.event.preventDefault();
    var inputField = d3.select("#example-form-input");

    var inputValue = inputField.property("value");
    console.log(inputValue);
    d3.select("h1>span").text(inputValue);
};

submitBtn.on("click", submitHandler)