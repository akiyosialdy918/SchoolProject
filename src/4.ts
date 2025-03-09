function getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
}

const numbers = Array(10).fill(null).map(() => getRandomNumber(10));
console.log(numbers);
