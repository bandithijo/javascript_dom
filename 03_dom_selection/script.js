// DOM Selection

// document.getElementById(); -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Hello, JavaScript!';

// document.getElementsByTagName() -> HTMLCollection
const p = document.getElementsByTagName('p');
for(let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Text ini diubah dari JavaScript.';

// document.querySelector() -> element
const p4 = document.querySelector('section#b p');
p4.style.color = 'green';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';
li2.style.fontWeight = 'bold';

const pN = document.querySelector('p');
pN.innerHTML = 'Text ini diubah lagi dengan querySelector().';

// document.querySelectorAll() -> nodeList
const pNs = document.querySelectorAll('p');
for(let i = 0; i < pNs.length; i++) {
    pNs[i].innerHTML = 'Text ini diubah semua dengan querySelectorAll().';
    pNs[i].style.fontWeight = 'bold';
}


// mengubah node root untuk mempersempit scopenya
const sectionB = document.querySelector('section#b');
const p4m = sectionB.getElementsByTagName('p')[0];
p4m.innerHTML = 'Text ini dirubah dengan mempersempit node root nya.';
