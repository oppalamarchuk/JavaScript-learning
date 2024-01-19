const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btnHero = document.querySelector('.btn-hero')
const body = document.querySelector('main')
const text = document.querySelector('.color')


btnHero.addEventListener('click',()=>{
    let pickedColor =getRandomColor()
    putBgc(pickedColor)
    displayColor(pickedColor)}
)

// With an array
// function getRandomColor(){
//     let color=[];
//     for (let i = 0; i < 6; i++) {
//         color[i]= hex[Math.floor(Math.random()*hex.length)];
//     }
//     console.log(`#${color.join("")}`)
// }
function getRandomColor(){

    let color='';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*hex.length)];
    }
    return  `#${color}`
}

function putBgc(color) {
    body.style.backgroundColor = color;
}
function displayColor(color) {
    text.textContent = color
}