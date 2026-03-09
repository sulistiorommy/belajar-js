// pada bagian ini kita belajar tentang object declaration
// object declaration sama seperti kita membuat function declaration, dengan mendeklarsikan object sekali, kita bisa menggunakannya berkali-kali, dan mempermudah atau mempersingkat pekerjaan kita.

// ini merupakan contoh object literal
let mhs1 = {
    nama : 'rommy sulistio',
    prodi : 'pikologi',
    npm : 201910515184,
    email : 'rommy.sulistio19@mhs1.ubharajaya.ac.id',
    tahunMasuk : 2019
};
console.log(mhs1);

// jika kita ingin membuat object yang baru, maka kita harus menuliskan ulang dengan struktur yang sama.
let mhs2 = {
    nama : 'Ida Hamidah',
    prodi : 'Teknik Informatika',
    npm : 201608313082,
    email : 'idah22061ti@student.nurulfikri.ac.id',
    tahunMasuk : 2016
};
console.log(mhs2);

// jika kita ingin membuat banyak data mahasiswa kita harus membuat ulang sebanyak yang kita ingin tambahkan 
// denagn ada nya object declaration, penulisan akan jauh lebih mudah, dan dapat kita gunakan berulang kali
// berikut adalah contoh object declaration
function buatObjectMhasiswa (nama, prodi, npm, email, tahunMasuk){
    let mhs = {};
    mhs.nama = nama;
    mhs.prodi = prodi;
    mhs.npm = npm;
    mhs.email = email;
    mhs.tahunMasuk = tahunMasuk;
    return mhs;
};

// jika ingin membuat variabel baru tinggal buat seperti dibawah ini, karena object declaration sudah dibuat.
let mhs3 = buatObjectMhasiswa (
    'ini budi',
    'komunikasi',
    202003414072,
    'inibudi123@mhs.cuyunv.ac.id',
    2020
);
console.log (mhs3);

// contoh jika ingin membuat variabel baru
let mhs4 = buatObjectMhasiswa(
    'temen budi',
    'Teknik industir',
    202104626034,
    'temenbudi@mhs.wpuprogrammer.sc.id',
    2021,
);
console.log (mhs4);

// kemudian ada lagi yang bermana constructor, cara ini yang cendering lebih sering digunakan, seperi di bawah
function Mahasiswa (nama, npm, prodi, email, tauhnMauk){
    // ini tidak perlu lagi membuat variabel let mhs = {};, karena pada constructor sudah sudah dibuatkan otomatis
    this.nama = nama;
    this.prodi = prodi;
    this.npm = npm;
    this.email = email;
    // dan return juga sudah di buatkan otomatis untuk memanggil variabel.
}
// penggunaan object constructor ini dianjurnak karena lebih efektif dalam penggunaannya data yang banyak dibandingkan dengan declaration

let mhs5 = new Mahasiswa(
    'bukan temen budi' ,
    'ekonomi' ,
    202105818093 ,
    'bukantemenbudi000@mhs.terserahunv.ac.id' ,
    2021 ,
);
console.log (mhs5);