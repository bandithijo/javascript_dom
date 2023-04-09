// DOM Traversal
// const btnsClose = document.querySelectorAll('.close');
//
// btnsClose.forEach(function(close) {
//     close.addEventListener('click', function(e) {
//         const cardName = e.target.parentElement.querySelector('.nama').innerHTML;
//         const userConfirmation = confirm(`Apakah kamu ingin menghapus card ${cardName}?`);
//         if(userConfirmation != true) return;
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     })
// })
//
// const cards = document.querySelectorAll('.card');
//
// cards.forEach(function(card) {
//     card.addEventListener('click', function() {
//         alert('ok');
//     })
// })

const container = document.querySelector('.container')

container.addEventListener('click', function(e) {
    // console.log(e.target);
    if(e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});
