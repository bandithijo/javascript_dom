// manipulation node

// TASK: apend paragraf baru di akhir section #a
// buat element baru, dengan createElement()
const pBaru = document.createElement('p');
// buat value baru, dengan menggunakan createTextNode()
const teksPBaru = document.createTextNode('paragraf baru');
// rangkai (combine) element baru dengan value baru dengan appendChild(), menjadi pBaru
pBaru.appendChild(teksPBaru);
// letakkan pBaru di akhir section #a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru)

// TASK: insert item baru inside unordered list after item 1 on section #b
// buat element
const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('item baru');
liBaru.appendChild(textLiBaru);
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
// simpan dengan insertBefore(elementBaru, location);
ul.insertBefore(liBaru, li2)

// TASK: removeChild()
const link = sectionA.querySelector('a');
sectionA.removeChild(link);

// TASK: replaceChild()
// create element baru & value baru
const h2Baru = document.createElement('h2');
const valueH2 = document.createTextNode('Judul Baru!');
// gabungkan element baru dengan value baru
h2Baru.appendChild(valueH2);
// ambil lokasi
const sectionB = document.querySelector('section#b');
const pSb = sectionB.querySelector('p');
// replace dengan replaceChild(elementBaru, location);
sectionB.replaceChild(h2Baru, pSb);


// coloring new element
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';
