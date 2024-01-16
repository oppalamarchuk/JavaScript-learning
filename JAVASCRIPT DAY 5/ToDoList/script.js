const arr=[];

function addToDo(){
    const toDo =document.querySelector('.text').value;
    const date = document.querySelector(".date").value;
    arr.push({toDo,date});

    let listHTML ='';

    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    //     const html =`<p>
    //                     ${arr[i].toDo} ${arr[i].date}<button onclick="arr[${i}].slice(${i},1)"> delete</button>
    //                 </p>`;
    //     listHTML += html;
    // }

    arr.forEach(function(value,i){
        console.log(arr[i]);
        const html =`<p>
                        ${toDo} ${date}<button onclick="arr[${i}].slice(${i},1)"> delete</button>
                     </p>`;
        // if we want to skip 'washing dishes'
        // if(toDo==='washing dishes')
        //     return;

        listHTML += html;
    });
    let list =document.querySelector('.list');
    list.innerHTML= listHTML;
}
// setTimeout(function () {console.log('timer') },3000 );
// setInterval(function () {console.log('interval') },2000)