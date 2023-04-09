# 11 prevent default

prevent default:
adalah sebuah method yang ada di dalam object event.

```javascript
close.addEventListener('click', function(e) {
    e.target.parentElement.style.display = 'none';
})
```

tujuannya:
adalah untuk menghentikan aksi default yang dilakukan oleh sebuah element.

misal, kita menggunakan element a untuk sebuah tombol close.

```html
<div class="card">
    <span class="nama">Rizqi Nur Assyaufi</span>
    <a href="" class="close">×</a>
</div>
```

perilaku default dari element a adalah redirect degan membaca value yang ada pada attribute href.

kita dapat menghentikan perilaku default dari element a tersebut.

yaitu dengan menggunakan method .preventDevault()

```javascript
close.addEventListener('click', function(e) {
    e.target.parentElement.style.display = 'none';
    e.preventDevault();
})
```
