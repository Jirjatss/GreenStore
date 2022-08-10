window.onload = function () {
  var minusBtn = document.getElementById("minus"),
    plusBtn = document.getElementById("plus"),
    numberPlace = document.getElementById("numberPlace"),
    submitBtn = document.getElementById("submit"),
    number = 0, /// number value
    min = 0, /// min number
    max = 30; /// max nilai

  minusBtn.onclick = function () {
    if (number > min) {
      number = number - 1; /// Minus 1 of the number
      numberPlace.innerText = number; /// Display the value in place of the number
    }
    if (number == min) {
      numberPlace.style.color = "red";
      setTimeout(function () {
        numberPlace.style.color = "black";
      }, 500);
    } else {
      numberPlace.style.color = "black";
    }
  };
  plusBtn.onclick = function () {
    if (number < max) {
      number = number + 1;
      numberPlace.innerText = number; /// Display the value in place of the number
    }
    if (number == max) {
      numberPlace.style.color = "red";
      setTimeout(function () {
        numberPlace.style.color = "black";
      }, 500);
    } else {
      numberPlace.style.color = "black";
    }
  };
  submitBtn.onclick = function () {
    alert("you choice : " + number);
  };
};

let keranjangBelanjaSayur = document.getElementById("keranjang-belanjaSayur");

let sayur = JSON.parse(localStorage.getItem("cart-sayur"));

sayur.forEach((sayur) => {
  // console.log(sayur);
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
  <div class="col-2 rincianbarang kata jenis" style="text-align: center;">
  ${sayur.harga}
  </div>
  <div class="col-2 rincianbarang kuantitas" style="text-align: center;">
    <div id="mainDiv">
      <button id="minus">-</button>
      <span id="numberPlace">1</span>
      <button id="plus">+</button>
  </div>
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

let keranjangBelanjaBuah = document.getElementById("keranjang-belanjaBuah");

let buah = JSON.parse(localStorage.getItem("cart-buah"));

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
    <div id="mainDiv">
      <button id="minus">-</button>
      <span id="numberPlace">1</span>
      <button id="plus">+</button>
  </div>
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
// Hapus Item //

// let array = new buah();
// let foundSayur = objectSayurLocalStorage.find((sayur) => {
//   return sayur.id === Number(id);
// });
// let index = array.indexOf(foundSayur);

// console.log(index);
