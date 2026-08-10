

function randomNumber(min,max){

    let array = new Uint32Array(1);
    crypto.getRandomValues(array);

    let randomNumber = min + (array[0] % (max-min+1));

    if(randomNumber%2!==0){
        randomNumber++;
    }
    if (randomNumber > max){
        randomNumber-2;
    }
    return randomNumber;

}

console.log(randomNumber(5,10));