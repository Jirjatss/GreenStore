let rincianpemesanan = document.getElementById("pemesanan");
let pembayaran = JSON.parse(localStorage.getItem("dataBayar"));

pembayaran.forEach((pesan) => {
  rincianpemesanan.innerHTML += `
  <div class="row rincianpemesanan">
  <div class="col-4 col-sm-4 gambar" style="text-align: center;">
  <header class="masthead">
  <div class="container-fluid halaman">
    <div style="background-color: rgba(0, 0, 0, 0.5); border-radius: 10px;">
      <div class="masthead-subheading">Green Store</div>
      <div style="z-index: 1" class="masthead-heading">Beli Semaunya, Bayar Seadanya</div>
    </div>
  </div>
</header>
  </div>
  <div class="col-4 col-sm-4 rinciankata" style="text-align: center;">
  <span>Nama: ${pesan.nama}</span><br>
  <span>Tanggal: ${pesan.tanggal}</span><br>
  <span>No Hp: ${pesan.noHp}</span><br>
  <span>Jumlah Barang: ${pesan.jumlah}</span><br>
  <span>Total Harga: ${pesan.harga},00</span>
  </div>
  <div class="col-4 col-sm-4 rincianstatus" style="text-align: center;">
  <button class="btn btn-success btn-xl text-uppercase"  type="button" onclick="location.href='index.html'" >
  Berhasil</button>
  </div>
</div>`;
});
