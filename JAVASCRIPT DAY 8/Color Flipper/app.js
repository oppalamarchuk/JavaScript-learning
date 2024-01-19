const colors = ["green", "red", "rgba(133,122,200)", "#f15025",];
const btnHero = document.querySelector('.btn-hero')
const body = document.querySelector('main')
const text = document.querySelector('.color')

btnHero.addEventListener('click',()=>{
    let pickedColor =getRandomColor()
//  let pickedColor =getRandomColorFromArray(colors)
    putBgc(pickedColor)
    displayColor(pickedColor)}
)

function getRandomColor(){
    let values=[]
    for (let i = 0; i < 3; i++)
        values[i]= Math.floor(Math.random()*255)
    let opacity=(Math.round(Math.random() * 100)/100 || 0.1)

    return `rgba(${values[0]},${values[1]},${values[2]},${opacity})`
}
function getRandomColorFromArray(arrayOfColors){

    let index= Math.floor(Math.random()*arrayOfColors.length)
    return arrayOfColors[index]
}
function putBgc(color) {
    body.style.backgroundColor = color;
}
function displayColor(color) {
    text.textContent = color
}