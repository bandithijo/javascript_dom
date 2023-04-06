# 02 DOM Tree

## tipe-tipe node

1. Element: tag-tag HTML
2. Attribute: attribute-attribute dari tag HTML (will be deprecated soon, will merger with Element)
3. Text: value dari tag HTML
4. CData Section
5. Entity Reference
6. Entity
7. Processing Instruction
8. Comment
9. Document
10. Document Type
11. Document Fragment
12. Notation

## istilah-istilah pada DOM Tree

1. NodeList, collection node dengan tipe apa saja
2. HTMLCollection, collection node yang khusus tipe Element HTML saja

perbedaan ini yang akan menentukan cara pengelolaannya.

## NodeList vs HTMLCollection

1. keduanya merupakan kumpulan kode
2. struktur datanya mirip dengan array
3. nodeList dapat berisi node apapun, sedangkan HTMLCollection harus berisi element HTML
4. HTMLCollection bersifat live sedangkan nodeList tidak

## struktur hierarki dari DOM Tree

1. root node
   - node yang menjadi sumber dari semua node lain di dalam DOM document
2. parent node
   - node yang berada 1 tingkat di atas node yang lain
   - body adalah parent dari h1, p, div, a
3. child node
   - node yang berada 1 tingkat di bawah node yang lain
   - h1 adalah child dari body
