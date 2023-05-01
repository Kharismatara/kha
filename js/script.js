function cekStuntin(event) {
  event.preventDefault();
  //mendapatkan nilai input dari form
  // Ambil input nama, umur, tinggi, dan berat badan
  let nama = document.getElementById("nama").value;
  let umur = parseInt(document.getElementById("umur").value);
  let tinggi = parseFloat(document.getElementById("tinggi").value);
  let berat = parseFloat(document.getElementById("bb").value);
  // Ambil jenis kelamin yang dipilih
  var jk = document.getElementById("jk").value;

  //pengecekan bahwa nilaiinput 0 /minus maka alare
  if (umur < 0 || tinggi <= 0 || berat <= 0) {
    alert("Masukan umur berat dan tinng tidak boleh minus");
    return;
    //kenapa  penggunakan tostring kkarena fungsi length hanya dapat digunakan pada objek bertipe string.
    //Kode yang Anda berikan menggunakan fungsi toString() untuk mengkonversi angka menjadi string sehingga dapat memeriksa panjang digit dari angka tersebut.
  } else if (berat.toString().length > 3 || tinggi.toString().length > 3) {
    alert("Masukan umur, berat dan tinngi maksimal 3 digit angka");
    return;
  } else if (umur > 24) {
    alert("masikmal penghitunagn 24 bulan");
    return;
  }
  // pengecekan umur dan  tinggi dan jika laki -laki
  let umurTinggi = "";
  if ((umur = 0 && tinggi >= 46.1 && tinggi <= 55.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 1 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 2 && tinggi >= 54.4 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 3 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 4 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 5 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 1 && tinggi >= 50.8 && tinggi <= 60.6)) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 6 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 7 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 8 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 9 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 10 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 11 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 12 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 13 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 14 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 1 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 15 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 16 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 17 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 18 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 19 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 20 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 21 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 23 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 23 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else if ((umur = 24 && tinggi >= 50.8 && tinggi <= 60.6 && jk == "laki-laki")) {
    umurTinggi = "Normal";
    return;
  } else {
    umurTinggi = "tidak normal";
    return;
  }
}
