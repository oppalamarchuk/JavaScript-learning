// local reviews data
const reviews = [
  {
    id: 0,
    name: 'susan smith  1',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 1,
    name: 'anna johnson 2',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 2,
    name: 'peter jones  3',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 3,
    name: 'bill anderson  4',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];


// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentPersonId = 0;

window.addEventListener('DOMContentLoaded',()=>{
  displayReview(currentPersonId)
})

prevBtn.onclick=()=>{
  if (currentPersonId === 0)
    currentPersonId=  reviews.length-1;
  else
    currentPersonId--

  displayReview(currentPersonId)
}
nextBtn.onclick=()=>{
  if (currentPersonId === reviews.length-1)
    currentPersonId = 0;
  else
    currentPersonId++
  displayReview(currentPersonId)
}

randomBtn.onclick=()=>{
  currentPersonId =getRandomId()
  displayReview(currentPersonId)
}

function getRandomId(){
  return  Math.floor(Math.random()*reviews.length);
}
function displayReview(person){
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}