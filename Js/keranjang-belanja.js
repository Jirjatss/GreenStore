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
   ${sayur.harga}(1)
  </div>
  <div class="col-2 rincianbarang kuantitas" style="text-align: center;">
  <button class="btn btn-link px-2" id="minus"
  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
  <i class="bi bi-dash"></i>
  </button>

  <input id="numberPlace" min="1" name="quantity" value="1" type="number" />

  <button class="btn btn-link px-2" id="plus"
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
  let plusbutton = document.getElementById("plus");
  let minusbutton = document.getElementById("minus");
  let quantity = parseInt(document.getElementById("numberPlace").value);
  // let isi = document.getElementById("value");

  plusbutton.addEventListener("click", function (event) {
    event.preventDefault();
    let i = 1;
    let harga = document.getElementById("value");
    let set = sayur.harga * (quantity + 1);
    harga.innerHTML = `${set} (${quantity + 1})`;

    //   alert("sajad");
  });
  minusbutton.addEventListener("click", function (event) {
    event.preventDefault();

    let i = 1;
    let harga = document.getElementById("value");
    let set = sayur.harga * quantity;
    harga.innerHTML = `${set} (${quantity})`;
  });
  // let hapusButton = document.getElementById("hapusitem");
  // hapusButton.onclick = function (e) {
  //   alert("Sudah Terhapus");
  // };
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
  <div class="col-2 rincianbarang kata jenis" style="text-align: center;">
  ${buah.harga}
  </div>
  <div class="col-2 rincianbarang kuantitas" style="text-align: center;">
    <button class="btn btn-link px-2" id="minus"
    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
    <i class="bi bi-dash"></i>
    </button>

    <input id="numberPlace" min="1" name="quantity" value="1" type="number" />

    <button class="btn btn-link px-2" id="plus">
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
