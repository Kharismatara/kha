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
  if (umur <= 0 || tinggi <= 0 || berat <= 0) {
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
  // pengecekan
}
