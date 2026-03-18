// dom selection
// document.getElwmwnById(); (getElementById) dalam penulisan syntax ini didepannya harus ada note routenya defaultnya adalah document. penggunaan ini dibutuhkan variabel untuk membuatnya. contoh:
const judul = document.getElementById('judul');    // jika ingin menggunakan getElementById harus membuat variabel
judul.style.color = ('blue');                      // sebagai css inline untuk mengganti warna
//judul.style.backgroundColor = ('#ccc');          // sebagai css inline untuk mengganti bacground
judul.innerHTML = ('<em>Rommy Sulistio </em>');    // bisa juga menggantikan isi text

// const sectionA = document.querySelector ('section#a');  // tek ini di gunakan untuk section. pada ('section#a') bisa juga diganti ('#a') karena # sebagai tanda section
// sectionA.style.color = ('rgb(233, 0, 0)');            // ini utuk mengganti warna 1 section. namun pada bagian instagram merupakan link defaultnya berwarna biru



// document.getElementsByTagName (); (getElementsByTagName) ini digunakan untuk selueuh elemant yang sama, sama juga note routernya menggunakan document
// pada bagian ini bisa mengmabil seluruh eleman yang sama, namun bentuknya seperti array (tidak bisa menggantikan semua element sekaligus dalam 1 perintah harus menyebutkan indexnya)
const p = document.getElementsByTagName ('p');     // ini juga sama harus membuat variabel
for (let a = 0; a < p.length; a++ ){
    p[a].style.background = ('rgb(53, 138, 171)');
};
// jika ingin mengganti semuanya maka menggunakan looping
// namun jika ingin mengambil 1 saja maka tuliskan juga indexnya seperti contoh:
p[3].style.color = ('yellow'); // maka p pada index ke 4 akan menjadi kuning

// atau bisa juga langsung menuliskan indexnya ditulis bersama DOM atau saat membuat variabel
const deret = document.getElementsByTagName ('h2')[0];
deret.style.backgroundColor = ('rgb(110, 212, 85)');


