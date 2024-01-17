let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊","don`t ","smile"]
let appleShelf = document.querySelector(".apple-shelf")
let orangeShelf = document.querySelector(".orange-shelf")
let trash = document.querySelector(".trash")



fruit.forEach((value)=>{
    if (value==='🍎') {
        appleShelf.innerHTML += `${value} `;
    }
    else if (value==='🍊') {
        orangeShelf.innerHTML += `${value} `;
    }
    else{
        trash.innerHTML += `${value} `;
    }
})
