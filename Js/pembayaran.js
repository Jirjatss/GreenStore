let datapembayaran = [];

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
              <td class="text-dark" id="jumlahbayar" style="text-align: center;">${harga.jumlah}</td>
            </tr>
            <tr>
              <td><b class=>Total Harga Barang (Rp)</b></td>
              <td class="text-dark" style="text-align: center;">${harga.harga}</td>
            </tr>
            <tr>
              <td><b class=>Biaya Pengiriman</b></td>
              <td class="text-dark" style="text-align: center;">Rp. 40000</td>
            </tr>
            <tr>
              <td class=><b>Total Pembayaran (Rp)</b></td>
              <td class="text-dark" id="hargabayar"style="text-align: center;">${totalsemua} </td>
            </tr>
          </tbody>
        </table>
        
        </div>
      </div>
    </div>
  </div>
  `;
});
let bayarbut = document.getElementById("bayar1");
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
    simpanDataBayar();
    caption.classList.remove("hide");
    bayarButton.classList.add("hide");
  } else {
    alert("Masukan Data yang Valid");
  }
});

let nama1 = document.getElementById("name");
let address1 = document.getElementById("address");
let date1 = document.getElementById("date");
let phone1 = document.getElementById("numberphone");
let jumlahbayar = parseInt(document.getElementById("jumlahbayar").innerHTML);
let hargabayar = parseInt(document.getElementById("hargabayar").innerHTML);

function simpanDataBayar() {
  let DataPembayaran = {
    Key: "0",
    nama: nama1.value,
    tanggal: date1.value,
    alamat: address1,
    noHp: phone1.value,
    // produk: produk.value,
    jumlah: jumlahbayar,
    harga: hargabayar,
  };
  datapembayaran.push(DataPembayaran);
  localStorage.setItem("dataBayar", JSON.stringify(datapembayaran));
}