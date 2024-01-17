// *||* creates a list
let isListCreated = false;
let btnCreate =document.querySelector('.creator');

btnCreate.addEventListener('click',()=>{
    if (!isListCreated){
        let unorderedList = document.createElement('ul')
        document.body.querySelector('h1').appendChild(unorderedList);
        unorderedList.className = 'team-list';

        let list= ['Golden Girls','Archer','Rick and Morty','The Crown']
        list.forEach((value)=>{
            let lip = document.createElement('li');
            document.body.querySelector('.team-list').appendChild(lip);
            lip.innerHTML = value
        })
        isListCreated=true
    }
})


// *||* Hide and shown list by clicking a button

// let btnCreate =document.querySelector('.creator');
// let ulElem = document.querySelector('.team-list')
// let isShown = true;
//
// btnCreate.addEventListener('click',()=>{
//     if (isShown) {
//         ulElem.style.display = 'none';
//         isShown = false;
//     }
//     else
//         ulElem.style.display='block';
// })
