//get a max number
let valid_input = false;
let max_number, number;
let max = document.getElementById("guessline");

while(!valid_input) {
    maxnum = prompt("What should the max number be?");
    max_number = Number(maxnum);

    if (!isNaN(maxnum) && maxnum > 1) {
        valid_input = true;
    }
realnum = (Math.round(maxnum))
ranNum = (Math.floor(Math.random() * realnum)) + 1;
console.log(ranNum) //see the number you are trying to guess using f12
max.innerHTML = "Guess a number between 1 and " + realnum;

}

let numArray = []
//number guess validation
function do_guess() {
    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");

    if (guess == ranNum) {
        if (numArray.includes(guess) === false)numArray.push(guess);
        message.innerHTML = "You got it!! It took you " + numArray.length + " tries! <br> Your guesses were: " + numArray;
    }
    else if(guess > ranNum) {
        message.innerHTML = "Your number is too high. Try a Lower Number!";
        if (numArray.includes(guess) === false)numArray.push(guess)
        else message.innerHTML = "You have already guessed this number!"
    }
    else if(isNaN(guess)) {
        message.innerHTML = "Your guess is not a number. Try again"
    } 
    else if(guess<1) {
        message.innerHTML = "The number can't be less than 1";
    }
    else if(guess < ranNum) {
        message.innerHTML = "Your number is too low. Try a Higher Number!";
        if(numArray.includes(guess) === false)numArray.push(guess)
        else message.innerHTML = "You have already guessed this number!"
    }  
    else{
        message.innerHTML = "That number is not in range, Try Again.";
    }
}
function reloadpage(){
    window.location.reload();
}
