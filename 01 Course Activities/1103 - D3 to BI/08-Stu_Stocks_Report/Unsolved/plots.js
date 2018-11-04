const apiKey = "y4kEMqRt56f5-TJ-fEK9";

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

function getMonthlyData() {

  const queryUrl = `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2017-10-01&collapse=monthly&api_key=${apiKey}`;
  d3.json(queryUrl).then(function(response) {
    let dates = unpack(response.dataset.data, 0);
    let openPrices = unpack(response.dataset.data, 1);
    let highPrices = unpack(response.dataset.data, 2);
    let lowPrices = unpack(response.dataset.data, 3);
    let closingPrices = unpack(response.dataset.data, 4);
    let volume = unpack(response.dataset.data, 5);
    buildTable(dates, openPrices, highPrices, lowPrices, closingPrices, volume);
  });
}

function buildTable(dates, openPrices, highPrices, lowPrices, closingPrices, volume, limit=12) {
  let table = d3.select("#summary-table");
  let tbody = table.select("tbody");
  let trow;
  for (let i = 0; i < limit; i++) {
    trow = tbody.append("tr");
    trow.append("td").text(dates[i]);
    trow.append("td").text(openPrices[i]);
    trow.append("td").text(highPrices[i]);
    trow.append("td").text(lowPrices[i]);
    trow.append("td").text(closingPrices[i]);
    trow.append("td").text(volume[i]);
  };
};

function buildPlot() {
  const url = `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`;

  d3.json(url).then(function(data) {

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

    getMonthlyData();

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

    let dataArr = [trace1, trace2];

    let layout = {
      title: `${stock} closing prices`,
      xaxis: {
        range: [startDate, endDate],
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      },
      showlegend: false
    };

    Plotly.newPlot("plot", dataArr, layout);

  });
}

buildPlot();

// BONUS - Dynamically add the current date to the report header
let months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

let today = new Date();
let dateStr = `${months[today.getMonth()]} ${today.getFullYear().toString().substr(2, 2)}`;
d3.select("#report-date").text(dateStr);
