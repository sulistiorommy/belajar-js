// belajar array
// pada bagian ini array merupakan variabl, dengan type objek, 
// array bisa di isi dengan berbagai type data seperti integer, string, bolean, seperti conto yang berada di bawah :

// var arr = [1, 'dua', true, [4,5,6]];
// console.log (arr);

// menampilkan isi array dengan looping


//belajar penguunan .langth, penggunaanini untuk keseluruhan item yang ada di array
// let daftarNama = ['Rommy', 'Ida', 'abi', 'arka'];

// for (i = 0; i < daftarNama.length; i++){
//     console.log('daftar nama mahasiswa: No. ' + (i + 1) + ' Nama: ' + daftarNama[i]);
// }

// //penggunaan join mengabungkan tampilan 
let daftarNama = ['Rommy', 'Ida', 'abi', 'arka'];

console.log (daftarNama);
// join membuat isinya menjadi 1 tergabung, padabagian (' - ') meruppakan pemisah dari setiap isinya, jika () kosong defatul menjadi ,(koma)
console.log (daftarNama.join (' - '));


// push dan pop
// penggunaan push, untuk menambahkan item pada array, penamnbahan ini pada bagain akhir
daftarNama.push('lika');
console.log (daftarNama.join());

// penggunaan pop, kabalikan dari push, berfungsi menghapus bagian paling belakang
daftarNama.pop();
console.log (daftarNama.join());


// unshift dan shift
// unshift unutk menambahkan item pada bagain awal
daftarNama.unshift ('lika');
console.log (daftarNama.join());        

// shift berguna untuk menghapus bagian depan
daftarNama.shift();
console.log (daftarNama.join());


// splice untuk menambahkan mengurangi dibagain tengah
// spliec(indexAwal, mauDihapusBerapa, elemenBaru 1, elemanBaru2, danElemenseterusnya... )
daftarNama.splice(2, 1, 'lika','ziya', 'reihan');
console.log(daftarNama.join());

// slice mengisris atau memeotong array
// slice memotong atau berfungsi untuk mengambil pada bagian tengah
// slice ini akan membuat variabel baru
// contoh penulisan slice:  var arr = arr1.slice (awla, akhirYangDibuang)
var arr = ['adit', 'budi', 'charlie', 'dika'];
var arr1 = arr.slice(1,2);
console.log (arr1.join());
console.log (arr.join());


// forEach penggunaan ini berfungsi sebagai penyerhana looping dengan array
// namaVariabelArray.forEach (function(e){console.log(e)});
// e = elemen yang berada pada array: let arr = [1,2,3,4,5,6,7]; anggka 1-7 merupakan eleman isi yang dialam array.
// i = index merupakan urutan pada array yang dimulai dari 0 seperti contoh di atas elemen 1 memiliki index 0, elemen 2 = 1, elemen 3 = 2 dan seterusnya.
let angka = [5,8,0,3,7,6,3,0,6,2,8,,5,7];
angka.forEach (function(e, i){
    console.log ('pada bagian ini No.'+ (i+1) + ' memiliki nilai ' + '"'+e+'"')
}); 

// map. sama seperti forEach, kenggulan map bisa melakukan prasi perhitungan utuk dibuatkan variabel baru berdasarkan variabel array sebelumnya.
let angka2 = angka.map (function(e){
    return e * 2; }
);
console.log (angka2.join ());


// sort
// sort untuk mengurutakan elemen dari yang terkecil hingga terbesar.
let arrSort = [2,9,4,2,7,8,3,5,8,2,2,4];
arrSort.sort ();
console.log (arrSort.join ());

// jika terdapat angka puluhan maka pada bagaian sort ditambahkan function
// jika masih menggunakan cara yang sama, maka bilangan pulihan seperti 14 di kira angka 1, 21 dibaca 2, dst
let tesSort2 = [5,7,2,4,7,9,14,7,6,80,3,6,9,21];
tesSort2.sort ();
console.log(tesSort2.join ());

// ini merupanakan function untuk dengan menggunakan parameter sebaagai sampel a,b dari 2 elemen array
tesSort2.sort (function(a,b){
    return a-b;
});
console.log (tesSort2.join());
// dengan demikan jika a (angka pertama) - b (angka ke-2) jika hasilnya negatif atau <= maka posisis sudah bener berurutan dari yang terkecil hingga terbesar, jika hasil positif makan js akan memperbaiki urutannya
// jika inggin di urutkan dari yang ter besar ke yang ter kecil maka tinggal balil menjadi : return b-a;



// filter dinggunakan untuk mencari banyak data / memfilter 
let arrayCariData = [2,1,5,7,9,4,2,6,8,9,4,2,8,11,10,45,15,235,3,];
let arrayCariData2 = arrayCariData.filter(function (x){
    return x >= 6;
})
console.log (arrayCariData2.join ());
// kemudain find hanya untuk mencari 1 elemen saja
//let arrayCariData = [2,1,5,7,68,4,2,6,8,9,4,2,8,11,10,45,15,235,3,];
let arrayDenganFind = arrayCariData.find(function (x){
    return x  >= 6;
});
console.log (arrayDenganFind)
// find hanya mengambil 1 angka pertama yang sesuai saja, kemudaian di jadikan variabel tidak berbrntuk objek atau array

