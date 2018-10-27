va r movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];


//Mean is the average of all values
function mean(arr) {
	var total = 0;
	for (var i=0; i < arr.length; i++) {
		total += arr[i];
	}
	var meanValue = total / arr.length;

	return meanValue;
}

//Variance can be found by subtracting the mean from each number in the data set,
//squaring the result and then
//averaging the square differences

function variance(arr) {
	var meanValue = mean(arr);
	var total = 0;

	for (var i = 0; i < arr.length; i++) {
		total += (arr[i] - meanValue) ** 2;
	}
	var varianceValue = total / arr.length;
	return varianceValue;
}


//Standard deviation is the square root of the variance

function standardDeviation(arr) {
	var varianceValue = variance(arr);
	var standardDeviationValue = Math.sqrt(varianceValue);

	return standardDeviationValue;
}


console.log("Movie Statistical Analysis");
console.log("------------")
console.log(`The mean is : ${mean(movieScore)}`);
console.log(`The variance is : ${variance(movieScore)}`);
console.log(`The standard deviation is : ${standardDeviation(movieScore)}`);