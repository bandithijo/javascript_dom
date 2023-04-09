// Event Handling
// membuat tombol x dapat menghapus div.card
// const btnClose = document.querySelector('.close');
// btnClose.addEventListener('click', function() {
//     const userConfirmation = confirm('Apakah kamu ingin menghapus card ini?');
//     if (userConfirmation != true) return;
//     const cardProfile = document.querySelector('.card');
//     // cardProfile.style.display = 'none';
//     document.querySelector('.container').removeChild(cardProfile);
// })

// DOM Traversal
const btnsClose = document.querySelectorAll('.close');

btnsClose.forEach(function(close) {
    close.addEventListener('click', function(e) {
        const cardName = e.target.parentElement.querySelector('.nama').innerHTML;
        const userConfirmation = confirm(`Apakah kamu ingin menghapus card ${cardName}?`);
        if(userConfirmation != true) return;
        e.target.parentElement.style.display = 'none';
    })
})
