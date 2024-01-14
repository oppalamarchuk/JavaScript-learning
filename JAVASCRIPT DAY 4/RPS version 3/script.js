function pickComputerMove(){
    let computerMove= Math.floor(Math.random() * 3 + 1);

    // 1 = Rock || 2 = Paper || 3 = Scissors
    if(computerMove===1){
        return 'Rock'
    }else if(computerMove===2){
        return 'Paper'
    }
    else{
        return 'Scissors'
    }
}
function checkWhoIsTheWinner(playerMove, computerMove) {
    console.log(`Computer chosen ${computerMove}`)

    if (computerMove === playerMove ){
        score.ties++;
        return "Tie";
    }
    else if((computerMove === 'Rock'     && playerMove === 'Paper')||
        (computerMove === 'Paper'    && playerMove === 'Scissors')||
        (computerMove === 'Scissors' && playerMove === 'Rock')
    ){
        score.wins++;
        return "You win";

    }
    else {
        score.losses++;
        return "You lose";
    }
}
function displayMoves(playerMove,computerMove){
    document.querySelector('.moves').innerHTML = `Your move ${playerMove}  ||  Computers ${computerMove} `
}
function displayWinner(winner){
    document.querySelector('.winner').innerHTML = winner;
}
function displayScore() {
    document.querySelector('.results').innerHTML = `Wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses}`
}

function playWithComputer(playerMove) {
    let computerMove = pickComputerMove();
    displayMoves(playerMove,computerMove);
    displayWinner(checkWhoIsTheWinner(playerMove, computerMove));
    displayScore();

}
function resetScore() {
    score.wins=0;
    score.losses=0;
    score.ties=0;
    displayScore()
}
let score={
    wins:   0,
    losses: 0,
    ties:   0
};