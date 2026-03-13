// seelum materi selanjutnya, kita mengulang terlebih dahulu materi sebelumnya
// membuat function declaration 
// function membuatObject (nama, tipeData, isi){
//     let obj = {};
//     obj.nama = nama;
//     obj.tipeData = tipeData;
//     obj.isi = isi;
//     return obj;
// };

// let obj1 = membuatObject ('rommy', 'string', 'tulisan');

// console.log (obj1);


// // kemudain latiahan membuat object constructtion
// function DataBaru (namaBarang, hargaBarang, garansi){
//     this.namaBarang = namaBarang;
//     this.hargaBarang = hargaBarang;
//     this.garansi = garansi;
// };

// let databaru1 = new DataBaru('kipas Angin', 500000, '3 tahun' );
// console.log(databaru1);


// sekarng masuk pada bagian this.
// this merupakan window, maka dari itu pengguaan this sama seperti 
// properti merupakan variabel didalam objek, sedangkan method adalah function di dalam objek
// contoh this dalam scope golbal
var a = 10 ;
console.log (this.a);
// maka akan menampilkan 10

// jika menggunakan let atau const 
const b = 12 ;
console.log (this.b);
let c = 3;
console.log (this.c);
// pada bagain const dan let, jika menggunakan this maka hasinya = undefined, karana keduanya merupakan scope lokal berbeda dengan var.

// sedangkan penggunaan this pada function merupakan pengembalian objekct global, berikit contohnya.
function halo () {
    console.log (this);
    let b = 'halo';
    console.log (b);
    return;
}
halo ();
console.log (this.b);
// maka akan window ini merupakan === this, dan pada bagian bawah menampilkan helo
// dari contoh di sama sperti kita menjalan kan perintah ini discope global : console.log (this);

// namum akan berbeda jika berada di dalam object literal
let obj = {};
obj.alo = function () {
    console.log (this);
    console.log ('halo');
}
obj.alo ();
console.log (obj);
// maka akan menampilkan {halo:f} dan halo


// sekarang pada object constructor
function Coba () {
    console.log (this);
    console.log ('coba');
}
new Coba(); 
// hasil dari console.log menampilkan 
// Coba {}, thisnya menampilkan New Coba() yang baru dipanggil atau dibuat, dan 'coba' dari console.log('coba')
// this disini memanggil objek yang baru dibuat