// function getDigit(num: number, i: number): number {


//     return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
// }

// console.log(getDigit(4988, 0));

function digitCount(num: number): number {
    if (num === 0) {
        return 1;
    }
    //return Math.floor(Math.log10(Math.abs(num)) + 1);
    return Math.floor(Math.log10(num) + 1);
}

console.log(digitCount(791));
