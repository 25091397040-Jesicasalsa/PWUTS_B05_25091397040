# Sewabarang - Website Penyewaan Barang

Tugas Pemrograman Web Lanjut - Kelompok Penyewaan Barang

## Halaman Status Pesanan

File: `pages/status-pesanan.html`

Halaman ini dimuat ke layout utama memakai Ajax dan berfungsi untuk melacak pesanan pelanggan melalui 10 tahap penyewaan sesuai proposal: Ditahan, Menunggu Keputusan, Disetujui, Menunggu Dibayar, Pembayaran Terkonfirmasi, Siap Diserahkan, Sedang Dipakai, Menunggu Dikembalikan, Pengembalian Terkonfirmasi, dan Selesai.

### Bagian Halaman
1. **Filter dan pencarian**
   Daftar pesanan bisa disaring berdasarkan status (Semua, Sedang Berjalan, Selesai) dan dicari dengan kode pesanan.

2. **Daftar pesanan**
   Menampilkan kode pesanan, nama barang, dan status terakhir. Daftar dibuat otomatis oleh jQuery dari data contoh.

3. **Detail pesanan**
   Saat salah satu pesanan diklik, muncul tanggal sewa, jumlah, total harga, progress bar, dan timeline tahapan (tahap yang sudah lewat diberi tanda centang).

### Fitur Interaktif (JavaScript/jQuery)
- **Simulasi penahanan unit**: pesanan berstatus "Ditahan" menampilkan hitung mundur 15 menit.
- **Simulasi alur pesanan**: tombol "Lanjut ke Tahap Berikutnya" memajukan status satu tahap, dan tombol Reset mengembalikannya ke awal.

### Catatan
Data pesanan masih berupa contoh di JavaScript dan belum terhubung ke database.
