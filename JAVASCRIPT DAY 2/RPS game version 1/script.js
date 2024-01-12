// 1 = Rock || 2 = Paper || 3 = Scissors
// function pickComputerMove(){
//    return Math.floor(Math.random() * 3 + 1) ;
// }
// function check(playerMove) {
//
//     let computerMove = pickComputerMove() ;
//     console.log(computerMove)
//
//     if (computerMove ===playerMove ){
//         console.log("Draw");
//     }
//     else if((computerMove === 1 && playerMove === 2)||
//             (computerMove === 2 && playerMove === 3)||
//             (computerMove === 3 && playerMove === 1)
//     ){
//         console.log("You win");
//     }
//     else {
//         console.log("You lose");
//     }
// }

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
function check(playerMove) {
    let computerMove = pickComputerMove() ;
    console.log(`Computer chosen ${computerMove}`)

    if (computerMove === playerMove ){
        console.log("Tie");
    }
    else if((computerMove === 'Rock'     && playerMove === 'Paper')||
            (computerMove === 'Paper'    && playerMove === 'Scissors')||
            (computerMove === 'Scissors' && playerMove === 'Rock')
    ){
        console.log("You win");
    }
    else {
        console.log("You lose");
    }
}

