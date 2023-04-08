// Event Handler

const p2 = document.querySelector('section#a .p2');
const p3 = document.querySelector('section#a .p3');

function ubahBackgroundP2() {
    p2.classList.toggle('biru-muda');
}

function ubahBackgroundP3() {
    p3.classList.toggle('biru-muda');
}

p2.onclick = ubahBackgroundP2;

const p4 = document.querySelector('section#b p');

// Event Listener
p4.addEventListener('click', function() {
    const liLength = document.querySelector('section#b ul').getElementsByTagName('li').length;
    const liBaru = document.createElement('li');
    const liBaruValue = document.createTextNode(`item ${liLength + 1} (baru)`);
    liBaru.appendChild(liBaruValue);
    const ul = document.querySelector('section#b ul');
    ul.appendChild(liBaru);
})

const ul = document.querySelector('section#b ul');

ul.addEventListener('click', function() {
    const liLength = document.querySelector('section#b ul').getElementsByTagName('li').length;
    if(liLength == 0) {
        alert('List sudah kosong');
    } else {
        ul.removeChild(ul.getElementsByTagName('li')[liLength - 1]);
    }
})
