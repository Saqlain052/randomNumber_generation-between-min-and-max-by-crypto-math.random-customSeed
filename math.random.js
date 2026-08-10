
function randomNumber(min,max){

    let randomNumber = Math.floor(Math.random() * (max-min+1)) + min;
    if(randomNumber%2!==0){
        randomNumber++;
    }
    if (randomNumber > max){
        randomNumber-2;
    }
    return randomNumber;

}

console.log(randomNumber(5,10));
