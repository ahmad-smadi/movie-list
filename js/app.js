'use strict';

let movieForm = document.getElementById('movieForm');
let formtable = document.getElementById('formTable');

let pic = [
  'action.png',
  'Adventure.png',
  'Animation.png',
  'Comedy.png',
  'Detective.png',
  'Fantasy.png',
  'History.png',
  'Horror.png',
  'Musical.png',
  'Pirate.png',
  'Romantic.png',
  'SCI-FI.png',
  'War.png',
  'Western.png'
]

function Movies (name , image , release){
  this.name = name; 
  this.image = image;
  this.release = release ;
  Movies.allMovies.push(this)
};
Movies.allMovies = [];

Movies.prototype.setLocalStorge = function (){
  localStorage.setItem('Movies', JSON.stringify(Movies.allMovies))
}

Movies.prototype.loadLocalStoreg = function() {
  JSON.parse(localStorage.getItem('Movies')) || [];
}

movieForm.addEventListener('submit', eventHandlur )

function eventHandlur(event){
  event.preventDefault();
  let name,image,release ;
  name = event.target.name.value;
  image = pic.src
  release = event.target.name.value

  let newMovie = new Movies(name, image, release)

  Movies.prototype.setLocalStorge();
  formTable.reset();
  start();
  //console.log(eventHandlur)
}
eventHandlur();
// function imageHundler () {
//   if(image === action){
//     path = ('action.png')
//   }else if (image === Adventure){
//     path = ('Adventure.png')
//   } else if (image === Animation){
//     path = ('Animation.png')
//   } else if (image === Comedy){
//     path = ('Comedy.png')
//   } else if (image === Detective){
//     path = ('Detective.png')
//   } else if (image === Fantasy){
//     path = ('Fantasy.png')
//   } else if (image === History){
//     path = ('History.png')
//   } else if (image === Horror){
//     path = ('Horror.png')
//   } else if (image === Musical){
//     path = ('Musical.png')
//   } else if (image === Pirate){
//     path = ('Pirate.png')
//   } else if (image === Romantic){
//     path = ('Romantic.png')
//   } else if (image === SCI-FI){
//     path = ('SCI-FI.png')
//   }else if (image === War){
//     path = ('War.png')
//   } else if (image === Western){
//     path = ('Western.png')
//   }
// }

function start (){
  let data = Movies.prototype.loadLocalStoreg();
  if(data){
    Movies.allMovies = [];
    for(let i in data){
      new Moviesnew = new Movies(data[i].name. data[i].image, data[i].release)
    }
  }
  creatTable();
}

function clearTable () {
  document.querySelector('thead').innerHTML = '';
  document.querySelector('tbody').innerHTML = '';

}

function creatTableHeader (){
  let thead = document.querySelector('thead');
  let arr = [name,image,release];
  for(let i =0 ; i < arr.length ; i++){
    let th = document.createElement('th');
    th.textContent = arr[i];
    thead.appendChild(th);
  }
}
function creatTable (){
  clearTable();
  creatTableHeader();

  for(let i of Movies.allMovies){
    i.render();
  }
}
function render () {
  let tbody = document.querySelector('tbody')

  let tr = document.createElement('tr');
  tbody.appendChild(tr)

 let td1 = document.createElement('td');
 td1.textContent = this.name; 
 tr.appendChild(td1)

 let td2 = document.createElement('td');
 td2.textContent = this.image; 
 tr.appendChild(td2)

 let td3 = document.createElement('td');
 td3.textContent = this.release; 
 tr.appendChild(td3)
}
