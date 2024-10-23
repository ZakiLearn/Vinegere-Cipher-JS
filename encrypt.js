const aray = require("./indeksJS/indeks");
function encrypt(kalimat, kunci) {
  let jumlahAray = aray.length;

  // contoh kasus
  let arrayLoopKey = [];
  let arrayKalimatIndx = [];
  let arraykeyIndx = [];
  let bfFinal = [];
  let finall = [];

  // membuat array angka
  // syntaks => (kalimat, array hasil, jumlahAray indeks)
  function supanika(kata, hasil, jumlahArr) {
    jumlah = kata.length;
    for (let a = 0; a < jumlah; a++) {
      for (let i = 0; i < jumlahArr; i++) {
        if (kata[a] === aray[i]) {
          hasil.push(i);
        }
      }
    }
  }

  supanika(kalimat, arrayKalimatIndx, jumlahAray); //uji fungsi

  // looping key
  // syntaks => (kata, key, array hasil)

  function loopKey(plain, key, arrayKosong) {
    panjangPlain = plain.length;
    panjangKey = key.length;
    for (let a = 0; a < panjangPlain; a++) {
      arrayKosong.push(key[a % panjangKey]);
    }
  }

  loopKey(kalimat, kunci, arrayLoopKey); //uji key

  // key => indeks
  // syntaks => (kalimat, array hasil, jumlahAray indeks)
  function key(key, hasilnya, jumlahArr) {
    jumlah = key.length;
    for (let a = 0; a < jumlah; a++) {
      for (let i = 0; i < jumlahArr; i++) {
        if (key[a] === aray[i]) {
          hasilnya.push(i);
        }
      }
    }
  }

  key(arrayLoopKey, arraykeyIndx, jumlahAray); //uji key menjadi indeks

  // array penjumlahan cypher
  // syntaks => (indeks plain, indeks key, hasilnya(bentuk cypher))

  function cypher(arrPlainIndx, arrKeyIndx, arrCypherIndx) {
    for (let a = 0; a < arrPlainIndx.length; a++) {
      arrCypherIndx.push(arrPlainIndx[a] + arrKeyIndx[a]);
    }
  }
  cypher(arrayKalimatIndx, arraykeyIndx, bfFinal); //uji penjumlahan cypher

  // array translate index cypher menjadi huruf cypher
  // syntaks => (indeks hasil penjumlahan cypher, aray final , aray indeks)
  function final(arrCypherIndex, arrHasil, aray) {
    panjang = aray.length;
    for (let a = 0; a < arrCypherIndex.length; a++) {
      arrHasil.push(aray[arrCypherIndex[a] % panjang]);
    }
  }

  final(bfFinal, finall, aray);

  // pengubahan array menjadi kalimat
  return finall.join("");
}
module.exports = encrypt;
