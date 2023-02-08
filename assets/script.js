var choices = ['r','p','s'];
var wins = 0;
var losses = 0;
var ties = 0;
var scoresheet = [0, 0, 0]
var userInput;
var compInput;
var outcomes = {
    r: {
        r: "tie",
        p: "loss",
        s: "win"
    },
    p: {
        r: "win",
        p: "tie",
        s: "loss"
    },
    s: {
        r: "loss",
        p: "win",
        s: "tie"
    }
}
// var outcome = outcomes[userInput][compInput];

function getUserInput(){
    userInput = prompt("Please enter r, p, or s");
}

function generateCompInput(){
    compInput = choices[math.floor(math.random() * 3)];
}

function whoWon(){
    if(outcomes[userInput][compInput] === "win"){
        wins++;
        playRPS();
    }
    else if(outcomes[userInput][compInput] === "loss"){
        losses++;
        playRPS();
    }
    else {
        ties++;
    }
}

function displayResults(){
    alert("The computer chose: " + compInput + "Thats a "+ outcomes[userInput][compInput] + "!");
    alert("wins: " + wins + "  Losses: " + losses + "  Ties: " + ties);
}

function playRPS(){
    if(confirm("Would you like to play Rock Paper Scissors?")){
        getUserInput();
        generateCompInput();
        whoWon();
        displayResults();
        playRPS();
    }
    else{
        alert("wins: " + wins + "  Losses: " + losses + "  Ties: " + ties + "     Thanks for Playing!");
    }
}

playRPS();