let keranjangBelanjaSayur = document.getElementById("keranjang-belanjaSayur");
let sayur = JSON.parse(localStorage.getItem("cartsayur"));

sayur.forEach((sayur) => {
  keranjangBelanjaSayur.innerHTML += `
    <div class="row d-flex justify-content-between keranjangbelanja" id="keranjang-${sayur.id}">
    <div class="col-2 rincianbarang kata form-check d-flex justify-content-center" id=${sayur.id}>
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" id=label-${sayur.id} for="flexCheckDefault"></label>
  </div>
  <div class="col-2 rincianbarang gambar" style="text-align: center;">
    <img src=${sayur.photo} alt="" style="width:50%">
  </div>
  <div class="col-2 rincianbarang kata nama" style="text-align: center;">
    ${sayur.name}   
  </div>
  <div class="col-2 rincianbarang kata jenis" style="text-align: center;" id="value-${sayur.id}">
   Rp. ${sayur.harga} (1)
  </div>
  <div class="col-2 rincianbarang kuantitas" style="text-align: center;">
  <button class="btn btn-link px-2 minus" id="minus-${sayur.id}"
  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
  <i class="bi bi-dash"></i>
  </button>

  <input id="numberPlace" name="quantity" value="1" type="number" />

  <button class="btn btn-link px-2 plus " id=plus-${sayur.id} value="1"
  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
  <i class="bi bi-plus"></i>
  </button>
</div>
  <div class="col-2 rincianbarang kata" style="text-align: center;">
  <button id="hapusitem-${sayur.id}" ><span class="material-icons">
  delete
  </span>
  </button>
  </div>
  </div>

    `;

  let plusbutton = document.querySelector(`#plus-${sayur.id}`);
  let minusbutton = document.querySelector(`#minus-${sayur.id}`);

  let quantity = parseInt(document.getElementById("numberPlace").value);
  quantity++;
  // Fungsi tambah kuantitas Sayur
  plusbutton.addEventListener("click", (e) => {
    e.preventDefault();

    let harga = document.querySelector(`#value-${sayur.id}`);
    let nilai = parseInt(`${sayur.harga}`);
    // console.log(nilai);

    let set = quantity++ * nilai;
    harga.innerHTML = `Rp. ${set} (${quantity - 1})`;
  });
  // Fungsi kurang kuantitas Sayur
  minusbutton.addEventListener("click", (e) => {
    e.preventDefault();
    quantity--;
    let harga1 = document.getElementById(`value-${sayur.id}`);
    let nilai1 = parseInt(`${sayur.harga}`);
    let set = nilai1 * (quantity - 1);
    harga1.innerHTML = `Rp. ${set} (${quantity - 1})`;
  });

  //hapus element
  let hapusButton = document.querySelector(`#hapusitem-${sayur.id}`);
  let hapusSayur = document.querySelector(`#keranjang-${sayur.id}`);

  hapusButton.onclick = function () {
    alert("Data sudah dihapus");
    hapusSayur.remove();
    const items = JSON.parse(localStorage.getItem("cartsayur"));
    const filtered = items.filter((item) => item.id !== sayur.id);
    localStorage.setItem("cartsayur", JSON.stringify(filtered));
    refresh();
  };

  function refresh() {
    window.location.reload();
  }
  // });
});

let keranjangBelanjaBuah = document.getElementById("keranjang-belanjaBuah");
let buah = JSON.parse(localStorage.getItem("cartbuah"));

buah.forEach((buah) => {
  // console.log(buah);
  keranjangBelanjaBuah.innerHTML += `
    <div class="row d-flex justify-content-between keranjangbelanja">
    <div class="col-2 rincianbarang kata form-check d-flex justify-content-center" id=${buah.id}>
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" id=label-${buah.id}for="flexCheckDefault"></label>
  </div>
  <div class="col-2 rincianbarang gambar" style="text-align: center;">
    <img src=${buah.photo} alt="" style="width:50%">
  </div>
  <div class="col-2 rincianbarang kata nama" style="text-align: center;">
  ${buah.name}
  </div>
  <div class="col-2 rincianbarang kata jenis" style="text-align: center;" id="buah-${buah.id}">
  Rp. ${buah.harga} (1)
  </div>
  <div class="col-2 rincianbarang kuantitas" style="text-align: center;">
  <button class="btn btn-link px-2 kurang" id="kurang-${buah.id}"
  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
  <i class="bi bi-dash"></i>
  </button>

  <input id="numberBuah" name="quantity" value="1" type="number" />

  <button class="btn btn-link px-2 tambah" id="tambah-${buah.id}"
  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
  <i class="bi bi-plus"></i>
  </button>
  </div>
  <div class="col-2 rincianbarang kata" style="text-align: center;">
    <button id="hapusitem" ><span class="material-icons">
      delete
      </span>
      </button>
    </div>
    </div>

    `;
  // Fungsi tambah kuantitas Buah
  let plusbutton1 = document.getElementById(`tambah-${buah.id}`);
  let minusbutton1 = document.getElementById(`kurang-${buah.id}`);

  let quantity1 = parseInt(document.getElementById("numberBuah").value);
  quantity1++;

  plusbutton1.addEventListener("click", function (event) {
    event.preventDefault();

    let harga = document.getElementById(`buah-${buah.id}`);
    let nilai = parseInt(`${buah.harga}`);
    // console.log(nilai);

    let set = quantity1++ * nilai;
    harga.innerHTML = `Rp. ${set} (${quantity1 - 1})`;
  });
  // Fungsi kurang kuantitas buah
  minusbutton1.addEventListener("click", function (event) {
    event.preventDefault();
    quantity1--;
    let harga1 = document.getElementById(`buah-${buah.id}`);
    let nilai1 = parseInt(`${buah.harga}`);
    let set = nilai1 * (quantity1 - 1);
    harga1.innerHTML = `Rp. ${set} (${quantity1 - 1})`;
  });
});

// const items = JSON.parse(localStorage.getItem("cartsayur"));
// // let hapusSayur = items.find((cartsayur) => {
// //   return cartsayur.id === Number(id);
// // });

// // let hapusSayur = items.find((cartsayur) => {
// //   return cartsayur.id === Number(id);
// // });
