let rincianpembayaran = document.getElementById("pembayaran");
let pembayaran = JSON.parse(localStorage.getItem("totalharga"));
let caption = document.querySelector(".caption");
pembayaran.forEach((harga) => {
  let ongkir = 40000;
  let totalsemua = harga.harga + ongkir;

  rincianpembayaran.innerHTML = `
    <div class="row">
      <div class="col" id="rincianpembayaran">
        <h5 class="text-dark" style="text-align: center;">Rincian Pembayaran</h5>
        <hr>
        <div class="table-responsive">
        <table class="table">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
              <td><b class=>Jumlah Barang</b></td>
              <td class="text-dark" style="text-align: center;">${harga.jumlah}</td>
            </tr>
            <tr>
              <td><b class=>Total Harga Barang</b></td>
              <td class="text-dark" style="text-align: center;">Rp. ${harga.harga}</td>
            </tr>
            <tr>
              <td><b class=>Biaya Pengiriman</b></td>
              <td class="text-dark" style="text-align: center;">Rp. 40000</td>
            </tr>
            <tr>
              <td class=><b>Total Pembayaran</b></td>
              <td class="text-dark" style="text-align: center;">Rp. ${totalsemua} </td>
            </tr>
          </tbody>
        </table>
        
        </div>
      </div>
    </div>
  </div>
  `;
});

let bayarButton = document.getElementById("bayar");
bayarButton.addEventListener("click", (e) => {
  e.preventDefault();
  let nama = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let date = document.getElementById("date").value;
  let phone = document.getElementById("numberphone").value;

  if (nama === "") {
    nama_status = false;
  } else {
    nama_status = true;
  }
  if (date === "" || date === null) {
    date_status = false;
  } else {
    date_status = true;
  }
  if (address === "") {
    address_status = false;
  } else {
    address_status = true;
  }

  if (phone === "") {
    phone_status = false;
  } else {
    phone_status = true;
  }
  if (nama_status === true && address_status === true && date_status === true && phone_status === true) {
    caption.classList.remove("hide");
    bayarButton.innerHTML = ` <button class="btn m-1 w-100 btn-success tombol" onclick="location.href='pemesanan.html'" id="bayar"><i class="fa fa-fw fa-shopping-cart"></i>Masuk ke Pemesanan</button>`;
  } else {
    alert("Masukan Data yang Valid");
  }
});
// function ganti() {
//   let pengganti = document.getElementById("tombol");
//   pengganti.innerHTML +=;
// }

// bayarButton.addEventListener("click", (e) => {
//   e.preventDefault();

// });
