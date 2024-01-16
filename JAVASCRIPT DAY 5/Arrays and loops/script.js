const arrowFunction = () => {
    console.log('using namespace std;')
}
const regularFunction = function(){
    console.log('using namespace std;')
}

// arrowFunction === regularFunction
//               true




const oneParam1 = param => {
  console.log(param++)
}
const oneLine = () => console.log(2)

const arr=[1,3214,512,3,2,2];

arr.forEach = (value,i) => console.log(arr[i]);

const btn = document.querySelector('.js-btn');
const eventListen =() =>alert(3);
// btn.addEventListener('click',() =>  {alert(1)})
// btn.addEventListener('click',() =>  {alert(2)})
btn.addEventListener('click',() =>  {eventListen()})
// btn.addEventListener('click',() =>  {alert(4)})
btn.removeEventListener('click',() =>  {eventListen()})















