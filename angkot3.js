// latihan membuat objek angkot 3 
// buat dulu struktrunya seperti apa, jadi kita sudah mengetahui apa yang akan kita buat
// membuat objek angkot 3 yang berisi : nama pengemudi, rute angkot, penghasilan, dan penumpang (penumpang naik dan turun).
// peenumpang akan membayar pada saat turun/

// membuat objek angkot
    //


//let angkot = {};
function Angkot (namaPengemudi, rute, penghasilan, penumpang){
    this.namaPengemudi = namaPengemudi;
    this.rute = rute;
    this.penghasilan = penghasilan;
    this.penumpang = penumpang;

    this.penumpangNaik = function (namaPenumpang){
        if (this.penumpang.length  === 0){
                this.penumpang.push (namaPenumpang);
        } else {
            for (let a = 0; a < this.penumpang.length; a++){
                if (this.penumpang[a] == namaPenumpang){
                    console.log (namaPenumpang + ' penumpang sudah ada')
                    return this.penumpang ;
                } else if (this.penumpang[a] == undefined){
                    this.penumpang[a] = namaPenumpang;
                    return this.penumpang;
                } else if (a === this.penumpang.length - 1){
                    this.penumpang.push (namaPenumpang);
                    return this.penumpang;
                }                
            }        
         }
    }

    this.penumpangTurun = function (namaPenumpang){
        for (let i = 0 ; i < this.penumpang.length; i++){
            if (this.penumpang [i] == namaPenumpang){
                console.log ('nama penumpang ' + namaPenumpang + ' sudah turun')
                this.penghasilan += 5000;
                this.penumpang[i] = undefined;
                return;
            } 
                
    }
    console.log ('tidak ada ' + namaPenumpang  +' di dalam angkot !'); 
    
}}

let angkot1 = new Angkot ('bambang', 'jakarta-bogor', 0, []);
console.log (angkot1);

angkot1.penumpangNaik ('bayu');
angkot1.penumpangNaik ('dimas');
angkot1.penumpangNaik ('dika');
angkot1.penumpangTurun ('dimas');
angkot1.penumpangNaik ('dwi');
angkot1.penumpangNaik ('budi');
// // = penghasilan = function penghasilan (a, b){
//         a = penghasilan;
//         a += b;
//         return penghasilan;
//     };
// = penumpang = function penumpang (){
//         if (penumang.length === 0){
//             penumpang.push = penumpang
            
//         }
//     