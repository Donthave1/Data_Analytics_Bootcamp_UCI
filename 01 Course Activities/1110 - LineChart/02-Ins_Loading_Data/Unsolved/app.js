d3.csv("./hours-of-tv-watched.csv", function(error, tvData) {
    if (error) {
        return console.warn(error);
    }

    console.log(tvData)

    let names = tvData.map(function(data) {
        return data.name;
    });
    console.log(names);

    tvData.forEach(function(data) {
        data.hours = +data.hours;
        console.log("Name: ", data.name);
        console.log("Hours: ", data.hours);
    })
});