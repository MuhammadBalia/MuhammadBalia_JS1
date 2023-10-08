// if...else
var nilai = 70;

// Contoh pernyataan if...else
if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 70) {
  console.log("Nilai Anda B");
} else if (nilai >= 68) {
  console.log("Nilai Anda C");
} else {
  console.log("Nilai Anda D");
}

// nested if ...
var umur = 17;
var izinOrangTua = true;

if (umur >= 18) {
  if (izinOrangTua) {
    console.log("Anda boleh mengendarai sepeda motor.");
  } else {
    console.log("Anda perlu izin dari orang tua.");
  }
} else {
  console.log("Anda terlalu muda untuk mengendarai sepeda motor.");
}

// Mendefinisikan sebuah variabel untuk menguji
var nilai = 2;

// Menggunakan switch...
switch (nilai) {
  case 1:
    console.log("Nilai adalah 10");
    break;
  case 2:
    console.log("Nilai adalah 20");
    break;
  case 3:
    console.log("Nilai adalah 30");
    break;
  default:
    console.log("Nilai tidak dikenali");
}

for (var i = 23; i <= 30; i++) {
    console.log(i);
  }
  


// Menggunakan while  

var angka = 10;

while (angka <= 15) {
  console.log(angka);
  angka++;
}
// Menggunakan do while

var angka = 16;

do {
  console.log(angka);
  angka++;
} while (angka <= 20);

// Mendefinisikan sebuah fungsi bernama "sapaan"
function sapaan(nama) {
    console.log("Halo, " + nama + "! Selamat datang.");
  }
  
  // Memanggil fungsi "sapaan" dengan argumen
  sapaan("balia");
  sapaan("ivan");
  sapaan("deny");
  sapaan("doni");
  sapaan("diki");