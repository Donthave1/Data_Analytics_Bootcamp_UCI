function printHello() {
    console.log("Hello World");
}

function addition(a, b) {
    return a + b;
}

printHello();

console.log(addition(3442, 29020202))

function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
        console.log(userList[i]);
    }
}

var friends = ["Peter", "Sarah", "Tiffany", "Cody"];
listLoop(friends);

function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
}

console.log(doubleAddition(29543985093, 12423859015809))


var longDecimal = 1903.38147817358901;
var roundedDecimal = Math.floor(longDecimal);

console.log(roundedDecimal);