const numbers = [3,2, -120];

// numbers.sort(function compareNumberAsc(first, second) {
//     return first - second;
// });

// console.log(numbers);


function compareNumberAsc(first, second) {
    return first - second;
};

numbers.sort(compareNumberAsc);


console.log(numbers);