/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

// Calculate a rolling average for an array
function rollingAverage(arr, windowPeriod = 10) {
  let averages = [];
  const limit = arr.length - windowPeriod;
  for (let i = 0; i < limit; i++) {
    let sum = 0; 
    for (let j = 0; j < windowPeriod; j++) {
      sum += arr[i+j];
    };
    averages.push(sum / windowPeriod);
  };
  return averages;
}

// Submit Button handler
function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input value from the form
  let stock = d3.select("#stockInput").node().value;
  console.log(stock);

  // clear the input value
  d3.select("#stockInput").node().value = "";

  // Build the plot with the new stock
  buildPlot(stock);
}

function buildPlot(stock) {
  const apiKey = "y4kEMqRt56f5-TJ-fEK9";

  const url = `https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`;

  d3.json(url).then(function(data, error) {

    if (error) return console.warn(error);

    // Grab values from the response json object to build the plots
    let name = data.dataset.name;
    let stock = data.dataset.dataset_code;
    let startDate = data.dataset.start_date;
    let endDate = data.dataset.end_date;
    let dates = unpack(data.dataset.data, 0);
    let openingPrices = unpack(data.dataset.data, 1);
    let highPrices = unpack(data.dataset.data, 2);
    let lowPrices = unpack(data.dataset.data, 3);
    let closingPrices = unpack(data.dataset.data, 4);

    // Calculate Rolling averages with a window of 30 days
    let rollingPeriod = 30;
    let rollingAvgClosing = rollingAverage(closingPrices, rollingPeriod);

    let trace1 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: closingPrices,
      line: {
        color: "#17BECF"
      }
    };

    // Candlestick Trace
    let trace2 = {
      type: "candlestick",
      x: dates,
      high: highPrices,
      low: lowPrices,
      open: openingPrices,
      close: closingPrices
    };

    // Rolling Averages Trace
    let trace3 = {
      type: "scatter",
      mode: "lines",
      name: "Rolling",
      x: dates.slice(0, dates.length - rollingPeriod),
      y: rollingAvgClosing
    };

    let dataArr = [trace1, trace2, trace3];

    let layout = {
      title: `${stock} closing prices`,
      xaxis: {
        range: [startDate, endDate],
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      }
    };

    Plotly.newPlot("plot", dataArr, layout);

  });
}

// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);
