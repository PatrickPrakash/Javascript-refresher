const happyNumber = (n) => {
    let fastPointer = sumOfSquaresOfDigits(n);
    let slowPointer = n;
    

    while(slowPointer !== fastPointer && fastPointer !== 1)
    {
        slowPointer = sumOfSquaresOfDigits(slowPointer);
        fastPointer = sumOfSquaresOfDigits(sumOfSquaresOfDigits(fastPointer));
        console.log(slowPointer, fastPointer);

    }

    if(fastPointer == 1) return true;
    return false;
}

const sumOfSquaresOfDigits = (n) => {
    let sum = 0;
    let temp = n;
    while(temp > 0)
    {
        let digit = temp % 10;
        sum += digit * digit;
        temp = Math.floor(temp / 10);
    }
    return sum;
}   

console.log(happyNumber(21))