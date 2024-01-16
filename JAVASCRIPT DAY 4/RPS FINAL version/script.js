function pickComputerMove(){
    let computerMove= Math.floor(Math.random() * 3 + 1);

    // 1 = Rock || 2 = Paper || 3 = Scissors
    if(computerMove === 1){
        return 'Rock'
    }else if(computerMove === 2){
        return 'Paper'
    }
    else{
        return 'Scissors'
    }
}
function checkWhoIsTheWinner(playerMove, computerMove) {
    if (computerMove === playerMove ){
        score.ties++;
        return "Tie";
    }
    else if((computerMove === 'Rock' && playerMove === 'Paper')||
            (computerMove === 'Paper' && playerMove === 'Scissors')||
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
    document.querySelector('.moves').innerHTML =
        `Your move  
        <img src="./images/${playerMove}-emoji.png" height="50px" alt="playerMove">  
        <img src="./images/${computerMove}-emoji.png" height="50px" alt="computerMove">
        Computer`;
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

const btnRock = document.querySelector('.js-rock')
btnRock.addEventListener('click',()=>{playWithComputer('Rock')})

const btnPaper = document.querySelector('.js-paper')
btnPaper.addEventListener('click',()=>{playWithComputer('Paper')})

const btnScissors = document.querySelector('.js-scissors')
btnScissors.addEventListener('click',()=>{playWithComputer('Scissors')})

document.body.addEventListener('keydown',(event) =>{
    if(event.key ==='r' || event.key ==='R')
        playWithComputer('Rock');
    else if(event.key ==='p' || event.key ==='P')
        playWithComputer('Paper');
    else if(event.key ==='s' || event.key ==='S')
        playWithComputer('Scissors');
});

const btnScore = document.querySelector('.btn-score')
btnScore.addEventListener('click',()=>{resetScore()})
