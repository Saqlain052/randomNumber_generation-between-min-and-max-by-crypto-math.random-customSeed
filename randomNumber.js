function randomGenerator(seed) {

    return function(min, max) {
        seed = (seed * 9 + 11) % 100;
         let random = seed / 100;
         let randomNumber =Math.floor(random * (max - min + 1)) + min;
     if (randomNumber % 2 !== 0) {
            randomNumber++;
        }

    if (randomNumber > max) {
            randomNumber -= 2;
        }

        return randomNumber;
    };
}

let random = randomGenerator(10);

console.log(random(10, 50));
console.log(random(10, 50));
console.log(random(10, 50));
console.log(random(10, 50));
console.log(random(10, 50));