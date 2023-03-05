function firstLetterName(name) {
    alert("The name " + name + " has the first letter " + name[0] + ".");
}

function divisibleByTwo(number) {
    let evenOrOdd = number % 2;

    if (evenOrOdd == 1){
        return false;
    } else if (evenOrOdd == 0) {
        return true;
    }
}

function largestNum(numbers) {
    if (numbers.length > 0) {
        let largestNum = numbers[0];

        for (let i = 1; i < numbers.length; i++){
            if(largestNum < numbers[i]){
                largestNum = numbers[i];
            }
        }
        return largestNum;
    }
}

firstLetterName('Trent');
console.log('The number 8 is divisible by 2: ' + divisibleByTwo(8));
console.log('The number 9 is divisible by 2: ' + divisibleByTwo(9));
console.log("the largest number of this set (1, 5, 4, 2, 3) is " + largestNum([1, 5, 4, 2, 3]));