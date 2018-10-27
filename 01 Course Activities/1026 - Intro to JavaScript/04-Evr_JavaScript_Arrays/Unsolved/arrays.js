var lettersArray = ["a", "b", "c", "d"];

console.log("An array of letters:");
console.log(lettersArray);

console.log("Use indexing to access our array:");
var firstLetter = lettersArray[0];
var secondLetter = lettersArray[1];
console.log(firstLetter);
console.log(secondLetter);

lettersArray.push("e");
lettersArray.push("f");
console.log("Use push() to add an item to an array");
console.log(lettersArray);
console.log("--------------------");

console.log("Use slice( to return selected items of an array:");
var slicedArray1 = lettersArray.slice(1);
var slicedArray2 = lettersArray.slice(0, 3);
var slicedArray3 = lettersArray.slice(1, 3);

console.log(slicedArray1);
console.log(slicedArray2);
console.log(slicedArray3);
console.log("--------------------");

var joinedArray = lettersArray.join(", ");
console.log(joinedArray);

var joinedArray1 = lettersArray.join("***");
console.log(joinedArray1)


var soundofMusic = ("The hills are alive with the sound of music!");

console.log("This is a string:");
console.log(soundofMusic);

console.log("Use indexing to access a string character");
console.log(soundofMusic[0]);
console.log(soundofMusic[5]);

var soundArray = soundofMusic.split(" ");
console.log("Use split() to split a string in to an array of substrings:");
console.log(soundArray);