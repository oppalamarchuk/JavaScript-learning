let count = 0;
let result = [];

// Adding EventListener
const btnIncrement=document.querySelector('.increment');
btnIncrement.addEventListener('click',()=>{count++; displayCount(count)})

const btnReset=document.querySelector('.reset');
btnReset.addEventListener('click',()=>{result = [];displayResult(result) ;displayResult('none')})

const btnSave= document.querySelector('.save');
btnSave.addEventListener('click',()=>{
    result.unshift(count);
    count=0;
    displayResult(result)
    displayCount(count)
})

//  Display functions
function displayResult(arr){
    let result = document.querySelector('.result')
    result.innerHTML = arr.join(" | ");
}
function displayCount(count){
    let counter = document.querySelector('.counter')
    counter.innerHTML = count;
}


