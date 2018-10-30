var myString = "I yam what I yam and always will be what I yam";

splitString = myString.split(" ");

console.log(splitString)

var yam = {};

splitString.forEach(function(word) {
    if (word in yam) {
        yam[word] += 1;
    }
    else {
        yam[word] = 1
    }
}
)
console.log(yam)