function init() {
  var data = [{
    values: [19, 26, 55, 88],
    labels: ["Spotify", "Soundcloud", "Pandora", "Itunes"],
    type: "pie"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.plot("pie", data, layout);
}

function updatePlotly(data) {
  // let piePlot = document.getElementById("pie");
  Plotly.restyle("pie", "values", [data]);
}


function getData(dataset) {
  let data = [];

  switch(dataset) {
      case "United States": 
          data = [1, 2, 3, 39];
          break;
      case "UK": 
          data = [10, 20, 30, 37];
          break;
      case "Canada": 
          data = [100, 200, 300, 23];
          break;
      default: 
          data = [19, 26, 55, 88];
          break;   
  };
  updatePlotly(data);
}

init();
