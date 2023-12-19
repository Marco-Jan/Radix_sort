const arr: number[] = [2, 23, 453, 12, 45,789, 734];


function getDigit(num: number, i: number): number {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num: number): number {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)) + 1);
}

function mostDigits(numbers: number[]): number {
    let maxDigits = 0;

    numbers.forEach((num) => {
        maxDigits = Math.max(digitCount(num), maxDigits);
    });

    return maxDigits;
}

function radixSort(arr: number[]): number[] {

    const maxDigits = mostDigits(arr); 

    for( let i = 0 ; i < maxDigits; i++){
        let digitBuckets: number [][] = Array.from({length: 10}, () => []);
        for(let j = 0; j < arr.length; j++){
            const digit = getDigit(arr[j], i);
            digitBuckets[digit].push(arr[j]);
        }
        arr = ([] as number []).concat(...digitBuckets);
    }
    return arr;





    // const maxDigits = mostDigits(arr); 

   
    // const buckets: number[][] = [];
    // for (let i = 0; i < 10; i++) {
    //     buckets.push([]);
    // }

    // for (let i = 0; i < maxDigits; i++) {
        
    //     for (const num of arr) {
    //         const digit = getDigit(num, i);
    //         buckets	[digit].push(num);
    //         console.log(buckets,"buckets");
            
    //     }

       
    // }

    // return arr;
}
radixSort(arr);

// console.log(arr);

