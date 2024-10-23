let aray = require("./indeksJS/indeks");
function decrypt(cypher, kunci) {
  let jumlahAray = aray.length;

  // contoh kasus
  let arrayLoopKey = [];
  let arraycypherIndx = [];
  let arraykeyIndx = [];
  let bfFinal = [];
  let blmBnr = [];
  let preFix = [];
  let finall = [];

  // membuat array angka
  // syntaks => (cypher, array hasil, jumlahAray indeks)
  function supanika(cypher, hasil, jumlahArr) {
    jumlah = cypher.length;
    for (let a = 0; a < jumlah; a++) {
      for (let i = 0; i < jumlahArr; i++) {
        if (cypher[a] === aray[i]) {
          hasil.push(i);
        }
      }
    }
  }

  supanika(cypher, arraycypherIndx, jumlahAray); //uji fungsi

  // looping key
  // syntaks => (cypher, key, array hasil)

  function loopKey(cypher, key, arrayKosong) {
    panjangcypher = cypher.length;
    panjangKey = key.length;
    for (let a = 0; a < panjangcypher; a++) {
      arrayKosong.push(key[a % panjangKey]);
    }
  }

  loopKey(cypher, kunci, arrayLoopKey); //uji key

  // key => indeks
  // syntaks => (cypher, array hasil, jumlahAray indeks)
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

  function pengurangan(arraycypherIndx, arraykeyIndx, arr) {
    for (let a = 0; a < arraycypherIndx.length; a++) {
      arr.push(arraycypherIndx[a] - arraykeyIndx[a]);
    }
  }
  pengurangan(arraycypherIndx, arraykeyIndx, bfFinal);

  function dibenarkan(blmBnr, preFix) {
    for (let b = 0; b < blmBnr.length; b++) {
      if (blmBnr[b] < 0) {
        preFix.push(blmBnr[b] + aray.length);
      } else {
        preFix.push(blmBnr[b]);
      }
    }
  }
  dibenarkan(bfFinal, preFix);

  function pengonversi(plainIndx, arrEnd, aray) {
    for (let a = 0; a < plainIndx.length; a++) {
      arrEnd.push(aray[plainIndx[a]]);
    }
  }
  pengonversi(preFix, finall, aray);
  return finall.join("");
}

module.exports = decrypt;
