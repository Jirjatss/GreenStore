let rincianpemesanan = document.getElementById("pemesanan");
let pembayaran = JSON.parse(localStorage.getItem("dataBayar"));

pembayaran.forEach((pesan) => {
  rincianpemesanan.innerHTML += `
  <div class="row rincianpemesanan">
  <div class="col-4 col-sm-4" style="text-align: center;">
    <span>Nama: ${pesan.nama}</span><br>
    <span>Tanggal: ${pesan.tanggal}</span><br>
    <span>No Hp: ${pesan.noHp}</span>

  </div>
  <div class="col-4 col-sm-4 rinciankata" style="text-align: center;">
  <span>Jumlah Barang: ${pesan.jumlah}</span><br>
  <span>Total Harga: ${pesan.harga},00</span><br>
  </div>
  <div class="col-4 col-sm-4 rincianstatus" style="text-align: center;">
      <span>Menunggu Pembayaran</span>
  </div>
</div>`;
});
