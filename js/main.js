var barangDipilih = null; // dipakai untuk mengirim pilihan barang dari katalog ke form

// Memuat halaman ke dalam #konten memakai Ajax
function muatHalaman(url) {
  $("#konten").html('<p class="loading">Memuat...</p>');
  $("#konten").load(url, function (respon, status) {
    if (status === "error") {
      $("#konten").html('<p class="error">Gagal memuat halaman. Jalankan lewat server (XAMPP), bukan klik dua kali file.</p>');
    }
  });
}

$(function () {
  // Tombol menu untuk tampilan HP
  $("#btnMenu").click(function () { $("#nav").toggleClass("buka"); });

  // Semua link ber-atribut data-page dimuat lewat Ajax (tanpa reload halaman)
  $(document).on("click", "[data-page]", function (e) {
    e.preventDefault();
    var url = $(this).data("page");
    if ($(this).data("barang")) barangDipilih = $(this).data("barang");
    $("#nav a").removeClass("active");
    $('#nav a[data-page="' + url + '"]').addClass("active");
    $("#nav").removeClass("buka");
    muatHalaman(url);
    window.scrollTo(0, 0);
  });

  muatHalaman("pages/beranda.html"); // halaman awal
});
