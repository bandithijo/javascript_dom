// manipulation element

// element.innerHTML
const judul = document.getElementById('judul');
judul.innerHTML = 'Hello, JavaScript!';

const sectionB = document.querySelector('section#b');
sectionB.innerHTML = 'Hello, JavaScript!';

// element.setAttribute
const a = document.querySelector('section#a a');
a.setAttribute('target', '_blank');
a.innerHTML = 'Text link diganti.';
a.setAttribute('href', 'https://instagram.com/random');

// element.classList
const p2 = document.querySelector('.p2');
p2.classList.toggle('biru-muda');
// => true
p2.classList.toggle('biru-muda');
// => false
