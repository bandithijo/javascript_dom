# 12 event bubbling

secara default, apabila kita memberikan event pada sebuah element, maka event tersebut akan berlaku untuk element-element pembungkusnya.

```
body
 │
 └─ div.container
    │
    └─ div.card
       │
       └─ a.close
          => event pada a.close akan bubbling ke atas
```

```html
<body>

    <div class="container">

        <div class="card">
            <img src="img/bandithijo.jpg" width="96" height="96">
            <span class="nama">Rizqi Nur Assyaufi</span>
            <span class="telp">08123456789</span>
            <a href="" class="close">×</a>
        </div>

    </div>

</body>
```

```javascript
// event close di close symbol
const btnsClose = document.querySelectorAll('.close');
btnsClose.forEach(function(close) {
    close.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    })
})

// event untuk card nya di click
const cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    card.addEventListener('click', function() {
        alert('ok');
    })
})
```

yang terjadi adalah, event pada card terpanggil dulu, lalu event pada button closenya dijalankan.

untuk menghentikan event bubbling, tambahkan stopPropagation()

```javascript
btnsClose.forEach(function(close) {
    close.addEventListener('click', function(e) {
        const cardName = e.target.parentElement.querySelector('.nama').innerHTML;
        const userConfirmation = confirm(`Apakah kamu ingin menghapus card ${cardName}?`);
        if(userConfirmation != true) return;
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
        e.stopPropagation(); // <- tambahkan method stopPropagation()
    })
})
```
