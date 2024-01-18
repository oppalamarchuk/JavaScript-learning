const saveBtn = document.querySelector('#save-btn');
const saveTabBtn = document.querySelector('#save-tab-btn');
const savedMessages= document.querySelector('.saved-messages');
const input = document.querySelector('#input-el');
let storage = [];

// localStorage.setItem("urls",JSON.stringify(storage));
// let url=JSON.parse(localStorage.getItem(("urls")));
// if (url){
//     storage=url
// }

saveTabBtn.addEventListener('click', ()=>{
    // don`t now if it works as webstorm shows me an error
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let link =tabs[0].url;
        NoIdeaHowToNameIt(link);
    });

})
saveBtn.addEventListener('click', () => {
     const link = input.value.trim();
    NoIdeaHowToNameIt(link);
});

input.addEventListener('keydown', (event) => {
    const link = input.value.trim();
        if (event.key === 'Enter') {
            NoIdeaHowToNameIt(link);
        }
});

function NoIdeaHowToNameIt(link) {
    if (link) {
        save(link);
        create(link);
        clearValue(input);
    }
}


function clearValue(element) {
    element.value="";
}
function save(value) {
    storage.push(value);
}
function create(link) {
    const liEl = document.createElement('li');
    savedMessages.appendChild(liEl);

    const aEl = document.createElement('a');
    aEl.textContent = link;
    liEl.appendChild(aEl);

    aEl.setAttribute('href',link);
    aEl.setAttribute('target', '_blank');
}

// don`t like it
// saveBtn.addEventListener('click',()=>{
//     const paragh =document.createElement("p")
//     savedMessages.appendChild(paragh)
//     paragh.textContent =input.value;
// })



