'use strict';
  
  const galleryItems = [
    { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
    { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
    { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
  ];
 
function getObject () {
let div = document.querySelector('.image-gallery');
div.classList.add('.image-gallery');
let div1 = document.createElement('div');
div1.classList.add("fullview");
div.append(div1);
let imgBig = document.createElement('img');
imgBig.classList.add('big');
imgBig.setAttribute('src', 'img/fullview-1.jpeg');
imgBig.setAttribute('alt', 'alt text 1');
div1.append(imgBig);
let ul = document.createElement('ul');
ul.classList.add('preview');
div.append(ul);
for (let el of galleryItems) {
  let li = document.createElement('li');
  ul.append(li);
  let imgSmall = document.createElement('img');
  imgSmall.setAttribute('src', el.preview);
  imgSmall.setAttribute('alt', el.alt);
  imgSmall.setAttribute('data-fullview', el.fullview);
  imgSmall.classList.add('small');
  li.append(imgSmall);
  }
  ul.addEventListener('click', mouseClick);
}

document.addEventListener("DOMContentLoaded", getObject);

function mouseClick(event) {
  let target = event.target.dataset.fullview;
  console.log(target);
  let img = document.querySelector('.big');
  img.setAttribute('src',  target);
}  

