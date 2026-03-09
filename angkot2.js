let penumpang =[];
let tambahPenumpang = function (namaPenumpang, penumpang){
if (penumpang.length == 0){
    penumpang.push(namaPenumpang);
    return penumpang;
} else {
    for (let i = 0; i < penumpang.length; i++){
        if (penumpang[i] == namaPenumpang){
            console.log(namaPenumpang + ' sudah ada di dalam angkot');
            return penumpang;
        } else if (penumpang[i] == undefined){
            penumpang[i] = namaPenumpang;
            return penumpang;
        } else if (i === penumpang.length - 1){
            penumpang.push(namaPenumpang);
            return penumpang;
        }
    }
}
}

let hapusPenumpang = function (namaPenumpang, penumpang){
    if (penumpang.length == 0){
        console.log('angkot masih kosong'); 
        return penumpang;
    } else {
        for (let i = 0; i < penumpang.length; i++){
            if (penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
                return penumpang;
            } else if (i === penumpang.length - 1){
                console.log(namaPenumpang + ' tidak ada di dalam angkot');
                return penumpang;
            }
        }
    }
}
console.log(penumpang);
tambahPenumpang('aji', penumpang);
tambahPenumpang('budi', penumpang);
tambahPenumpang('carl', penumpang);
tambahPenumpang('dodo', penumpang);
tambahPenumpang('erik', penumpang);
tambahPenumpang('fajar', penumpang);

hapusPenumpang('carl', penumpang);

tambahPenumpang('abcd', penumpang);




// if (penumpang.length === 0){
//     return penumpang.push ({namaPenumpang, status});
// } else {
//     //if (penumpang.length === undefined || typeof penumpang == 'object' ){
//     if (namaPenumpang === namaPenumpang){
//         return tambahPenumpang.unshift (namaPenumpang, status);
//         //console.log(namaPenumpang + ' sudah ada di dalam angkot');
//     };
//     return tambahPenumpang.unshift (namaPenumpang, status);
// } 
// //else {console.log ('gaktau')};
// };
// console.log(penumpang);
// tambahPenumpang ('a', 'penumpang');
// tambahPenumpang ('b', 'penumpang')