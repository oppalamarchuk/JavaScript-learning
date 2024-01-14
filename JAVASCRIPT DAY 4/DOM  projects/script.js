//  DOES NOT WORK
// function changeHTML() {
//     Document.querySelector('.YouTube>button').innerHTML='Subscribed';
// }


//
// function subscription() {
//     const btnElement = document.querySelector(".YouTube>button");
//     if (btnElement.innerHTML==='Subscribe'){
//         btnElement.innerHTML ='Subscribed';
//     }
//     else{
//         btnElement.innerHTML ='Subscribe';
//     }
// }

// innerText better solution here because
//
// in innerHTML :  'Subscribe' and '   Subscribe'
//                     aren`t the same thing
//
//while in innerText they are
function subscription() {
    const btnElement = document.querySelector(".YouTube>button");
    if (btnElement.innerText === 'Subscribe'){
        btnElement.innerText = 'Subscribed';
    }
    else{
        btnElement.innerText = 'Subscribe';
    }
}

// Amazon section
function calculateShipping() {
    alert ('dsads');
}
