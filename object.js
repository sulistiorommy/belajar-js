// cara membuta object pada javaScript
// obeject merubakan bagian dari tipe data, obje merupakan tipe data yang komplex, pada bagian array kemarin yang telah dipelajari sebagian kecil dari object.
// karena konpexitas object lebih tinggi membuat object memiliki banyak metode yang bisa di gunakan, kita bisa menggunakan data integer, string, boolean, array, function dan lain sebagainya untuk membuat object.

// cara membuat object literal pada javaScript
let obj = {
    nama: 'romi',
    umur: 29,
    pekerjaan: 'programmer',
    alamat: {
        jalan: 'jalan raya',
        kota: 'Bekasi',
        provinsi: 'Jawa Barat'
    },
    hobi: ['membaca', 'menulis', 'bermain game']
};

// cara mengakses object pada javaScript
// untuk mengakses object kita bisa menggunakan dot notation atau bracket notation
console.log(obj.nama); // dot notation
console.log(obj['umur']); // bracket notation
console.log(obj['pekerjaan']); // bracket notation
console.log(obj.alamat['jalan']); // dot notation dalam object
console.log(obj['alamat']['kota']); // bracket notation dalam object
console.log(obj['alamat'].provinsi); // bracket notation dalam object
console.log(obj['hobi'][2]); // mengakses elemen ketiga dari array hobi
console.log(obj.hobi[0]); // mengakses elemen pertama dari array hobi