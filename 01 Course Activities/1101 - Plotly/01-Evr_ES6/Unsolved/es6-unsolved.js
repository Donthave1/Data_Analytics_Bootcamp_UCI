const myPets = ["dog", "cat", "rabbit", "some endangered species of sea turtle"];

function logger() {
    let x = "hi";
    console.log(x);
};
logger();

console.log({before: myPets});
myPets.pop();
console.log({before: myPets});