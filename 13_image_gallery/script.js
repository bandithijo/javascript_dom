const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    // cek apakah yang diclick memiliki class name 'img-thumb'
    if(e.target.className == 'img-thumb') {
        const imgJumbo = document.querySelector('.img-jumbo');
        const imageSource = e.target.getAttribute('src');

        // console.log(imageSource)

        // e.target.parentElement.previousElementSibling.setAttribute('src', `${imageSource}`);
        imgJumbo.setAttribute('src', `${imageSource}`);
        imgJumbo.classList.add('fade');

        // remove class fade after 0.5 detik
        setTimeout(function() {
            imgJumbo.classList.remove('fade');
        }, 500)

        // remove img-thumb if has class active
        const imgThumbs = document.querySelectorAll('.img-thumb');
        imgThumbs.forEach(function(imgThumb) {
            if(imgThumb.classList.contains('active')) {
                imgThumb.classList.remove('active');
            }
        })

        // add class active for clicked image thumb
        e.target.classList.add('active');
    }
})
