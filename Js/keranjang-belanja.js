let keranjangBelanjaSayur = document.getElementById("keranjang-belanjaSayur");
let sayur = JSON.parse(localStorage.getItem("cartsayur"));
sayur.forEach((sayur) => {
  keranjangBelanjaSayur.innerHTML += `
    <div class="row d-flex justify-content-between keranjangbelanja">
    <div class="col-2 rincianbarang kata form-check d-flex justify-content-center" id=${sayur.id}>
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault"></label>
  </div>
  <div class="col-2 rincianbarang gambar" style="text-align: center;">
    <img src=${sayur.photo} alt="" style="width:50%">
  </div>
  <div class="col-2 rincianbarang kata nama" style="text-align: center;">
    ${sayur.name}   
  </div>
  <div class="col-2 rincianbarang kata jenis" style="text-align: center;" id="value">
   Rp. ${sayur.harga} (1)
  </div>
  <div class="col-2 rincianbarang kuantitas" style="text-align: center;">
  <button class="btn btn-link px-2" id="minus"
  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
  <i class="bi bi-dash"></i>
  </button>

  <input id="numberPlace" min="1" name="quantity" value="1" type="number" />

  <button class="btn btn-link px-2" id="plus" value="1"
  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
  <i class="bi bi-plus"></i>
  </button>
</div>
  <div class="col-2 rincianbarang kata" style="text-align: center;">
  <button class="hapusitem" ><span class="material-icons">
  delete
  </span>
  </button>
    </div>
    </div>

    `;
  // Fungsi tambah kuantitas Sayur
  let plusbutton = document.getElementById("plus");
  let minusbutton = document.getElementById("minus");

  let quantity = parseInt(document.getElementById("numberPlace").value);
  quantity++;

  plusbutton.addEventListener("click", function (event) {
    event.preventDefault();

    let harga = document.getElementById("value");

    let set = quantity++ * sayur.harga;
    harga.innerHTML = `Rp. ${set} (${quantity - 1})`;
  });
  // Fungsi kurang kuantitas Sayur
  minusbutton.addEventListener("click", function (event) {
    event.preventDefault();
    quantity--;
    let harga = document.getElementById("value");
    let set = sayur.harga * (quantity - 1);
    harga.innerHTML = `Rp. ${set} (${quantity - 1})`;
  });
});

let keranjangBelanjaBuah = document.getElementById("keranjang-belanjaBuah");
let buah = JSON.parse(localStorage.getItem("cartbuah"));

buah.forEach((buah) => {
  // console.log(buah);
  keranjangBelanjaBuah.innerHTML += `
    <div class="row d-flex justify-content-between keranjangbelanja">
    <div class="col-2 rincianbarang kata form-check d-flex justify-content-center" id=${buah.id}>
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault"></label>
  </div>
  <div class="col-2 rincianbarang gambar" style="text-align: center;">
    <img src=${buah.photo} alt="" style="width:50%">
  </div>
  <div class="col-2 rincianbarang kata nama" style="text-align: center;">
  ${buah.name}
  </div>
  <div class="col-2 rincianbarang kata jenis" style="text-align: center;" id="nilai">
  Rp. ${buah.harga} (1)
  </div>
  <div class="col-2 rincianbarang kuantitas" style="text-align: center;">
  <button class="btn btn-link px-2" id="kurang"
  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
  <i class="bi bi-dash"></i>
  </button>

  <input id="numberBuah" min="1" name="quantity" value="1" type="number" />

  <button class="btn btn-link px-2" id="tambah"
  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
  <i class="bi bi-plus"></i>
  </button>
  </div>
  <div class="col-2 rincianbarang kata" style="text-align: center;">
    <button class="hapusitem" ><span class="material-icons">
      delete
      </span>
      </button>
    </div>
    </div>

    `;
  // Fungsi tambah kuantitas Buah
  let plusbutton1 = document.getElementById("tambah");
  let minusbutton1 = document.getElementById("kurang");

  let quantity1 = parseInt(document.getElementById("numberBuah").value);
  quantity1++;

  plusbutton1.addEventListener("click", function (event) {
    event.preventDefault();

    let harga1 = document.getElementById("nilai");

    let set = quantity1++ * buah.harga;
    harga1.innerHTML = `Rp. ${set} (${quantity1 - 1})`;
  });
  // Fungsi kurang kuantitas buah
  minusbutton1.addEventListener("click", function (event) {
    event.preventDefault();
    quantity1--;
    let harga1 = document.getElementById("nilai");
    let set = buah.harga * (quantity1 - 1);
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

// const filtered = items.filter((item) => item.id !== 1);
// localStorage.setItem("cartsayur", JSON.stringify(filtered));
// reload();
// let harga = document.getElementById("value");
// console.log(harga);
