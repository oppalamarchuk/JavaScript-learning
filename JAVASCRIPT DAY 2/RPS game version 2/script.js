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
        console.log("Tie");
        score.ties++;
    }
    else if((computerMove === 'Rock'     && playerMove === 'Paper')||
            (computerMove === 'Paper'    && playerMove === 'Scissors')||
            (computerMove === 'Scissors' && playerMove === 'Rock')
    ){
        console.log("You win");
        score.wins++;
    }
    else {
        console.log("You lose");
        score.losses++;
    }
}
function resetScore() {
    score.wins=0;
    score.losses=0;
    score.ties=0;
    showScore();
}
function showScore(){
    console.log(`Wins: ${score.wins}  ||  Losses: ${score.losses}  ||  Ties: ${score.ties}`);
}
let score={
    wins:   0,
    losses: 0,
    ties:   0
};
function playWithComputer(playerMove) {
    let computerMove = pickComputerMove();
    checkWhoIsTheWinner(playerMove,computerMove);
    showScore();
}
// score=localStorage.getItem(JSON.parse(score));
// localStorage.setItem(JSON.stringify(score));