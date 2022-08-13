// let cartSayur1 = [];
// const isiLSCartSayur1 = localStorage.getItem("cart-sayur");

// let addToCartSayur1 = (id) => {
//   let objectSayurLocalStorage1 = JSON.parse(localStorage.getItem("cartsayur")); // ngambil dari local storage dengan key cartsayur
//   let foundSayur1 = objectSayurLocalStorage1.find((cartsayur) => {
//     return cartsayur.id === Number(id);
//   });

//   if (isiLSCartSayur1 === null) {
//     cartSayur1.push(foundSayur1);
//     localStorage.setItem("cart-sayur", JSON.stringify(cartSayur1));
//   } else {
//     cartSayur1 = JSON.parse(isiLSCartSayur1);
//     cartSayur1.push(foundSayur1);
//     localStorage.setItem("cart-sayur", JSON.stringify(cartSayur1));
//   }
// };
let array = [];
let array1 = [];
let dataHarga = [];

let keranjangBelanjaSayur = document.getElementById("keranjang-belanjaSayur");
let sayur = JSON.parse(localStorage.getItem("cartsayur"));
sayur.forEach((sayur) => {
  keranjangBelanjaSayur.innerHTML += `
    <div class="row d-flex justify-content-between keranjangbelanja" id="keranjang-${sayur.id}">
    <div class="col-2 rincianbarang kata form-check d-flex justify-content-center" id=${sayur.id}>
    <button  class="buttoncheckout"><span class="material-icons">
    add_circle
    </span>
    </button>
    </div>
  <div class="col-2 rincianbarang gambar" style="text-align: center;">
    <img src=${sayur.photo} alt="" style="width:50%">
  </div>
  <div class="col-2 rincianbarang kata nama" style="text-align: center;">
    ${sayur.name}   
  </div>
  <div class="col-2 rincianbarang kata jenis" style="text-align: center;" id="value-${sayur.id}">
  ${sayur.harga}
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
  let quantity = parseInt(document.getElementById("numberPlace").value);
  quantity++;

  // let plusbutton = document.querySelector(`#plus-${sayur.id}`);

  // let minusbutton = document.querySelector(`#minus-${sayur.id}`);

  // // Fungsi tambah kuantitas Sayur
  // plusbutton.addEventListener("click", (e) => {
  //   e.preventDefault();

  //   let harga = document.querySelector(`#value-${sayur.id}`);
  //   let nilai = `${sayur.harga}`;
  //   // console.log(nilai);
  //   let quantitySayur = parseInt(document.getElementById("numberPlace").value);
  //   quantitySayur++;
  //   let set = quantity++ * nilai;
  //   harga.innerHTML = `Rp. ${set} (${quantitySayur})`;
  // });
  // // Fungsi kurang kuantitas Sayur
  // minusbutton.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   quantity--;
  //   let harga1 = document.getElementById(`value-${sayur.id}`);
  //   let nilai1 = parseInt(`${sayur.harga}`);
  //   let set = nilai1 * (quantity - 1);
  //   harga1.innerHTML = `Rp. ${set} (${quantity - 1})`;
  // });

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

  let hargabarang = parseInt(document.querySelector(`#value-${sayur.id}`).innerHTML);
  var total = 0;
  array.push(hargabarang);
  for (i = 0; i < array.length; i++) {
    total += array[i];
    // console.log(total);
  }
  let cartSayurButtons = document.querySelectorAll(".buttoncheckout");
  cartSayurButtons.forEach(() => {
    let jumlahbarang = document.getElementById("jumlahbarang");
    let totalpembayaran = document.getElementById("totalpembayaran");
    jumlahbarang.innerHTML = quantity++ - 1;
    totalpembayaran.innerHTML = `${total}`;
  });
});

let keranjangBelanjaBuah = document.getElementById("keranjang-belanjaBuah");
let buah = JSON.parse(localStorage.getItem("cartbuah"));

buah.forEach((buah) => {
  // console.log(buah);
  keranjangBelanjaBuah.innerHTML += `
    <div class="row d-flex justify-content-between keranjangbelanja" id="keranjang-${buah.id}">
    <div class="col-2 rincianbarang kata form-check d-flex justify-content-center" id=${buah.id}>
    <button  class="buttoncheckout1"><span class="material-icons">
    add_circle
    </span>
    </button>
  </div>
  <div class="col-2 rincianbarang gambar" style="text-align: center;">
    <img src=${buah.photo} alt="" style="width:50%">
  </div>
  <div class="col-2 rincianbarang kata nama" style="text-align: center;">
  ${buah.name}
  </div>
  <div class="col-2 rincianbarang kata jenis" style="text-align: center;" id="buah-${buah.id}">
 ${buah.harga}
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
    <button id="hapusitem-${buah.id}" ><span class="material-icons">
      delete
      </span>
      </button>
    </div>
    </div>

    `;
  // Fungsi tambah kuantitas Buah
  // let plusbutton1 = document.getElementById(`tambah-${buah.id}`);
  // let minusbutton1 = document.getElementById(`kurang-${buah.id}`);

  let quantity1 = parseInt(document.getElementById("numberBuah").value);
  quantity1++;

  // plusbutton1.addEventListener("click", function (event) {
  //   event.preventDefault();

  //   let harga = document.getElementById(`buah-${buah.id}`);
  //   let nilai = parseInt(`${buah.harga}`);
  //   // console.log(nilai);

  //   let set = quantity1++ * nilai;
  //   harga.innerHTML = `Rp. ${set} (${quantity1 - 1 - 1})`;
  // });
  // minusbutton1.addEventListener("click", function (event) {
  //   event.preventDefault();
  //   quantity1--;
  //   let harga1 = document.getElementById(`buah-${buah.id}`);
  //   let nilai1 = parseInt(`${buah.harga}`);
  //   let set = nilai1 * (quantity1 - 1);
  //   harga1.innerHTML = `Rp. ${set} (${quantity1 - 1 - 1})`;
  // });
  let hapusButton = document.querySelector(`#hapusitem-${buah.id}`);
  let hapusBuah = document.querySelector(`#keranjang-${buah.id}`);

  hapusButton.onclick = function () {
    alert("Data sudah dihapus");
    hapusBuah.remove();
    const items = JSON.parse(localStorage.getItem("cartbuah"));
    const filtered = items.filter((item) => item.id !== buah.id);
    localStorage.setItem("cartbuah", JSON.stringify(filtered));
    refresh();
  };

  function refresh() {
    window.location.reload();
  }
  let hargabarang1 = parseInt(document.querySelector(`#buah-${buah.id}`).innerHTML);
  // console.log(hargabarang1);
  var total1 = 0;
  array1.push(hargabarang1);
  for (i = 0; i < array1.length; i++) {
    total1 += array1[i];
    // console.log(total1);
  }
  let cartSayurButtons = document.querySelectorAll(".buttoncheckout1");
  cartSayurButtons.forEach(() => {
    let jumlahbarang = document.getElementById("jumlahbarang1");
    let totalpembayaran = document.getElementById("totalpembayaran1");
    jumlahbarang.innerHTML = quantity1++ - 1;
    totalpembayaran.innerHTML = `${total1}`;
  });
});

// const items = JSON.parse(localStorage.getItem("cartsayur"));
// // let hapusSayur = items.find((cartsayur) => {
// //   return cartsayur.id === Number(id);
// // });

// // let hapusSayur = items.find((cartsayur) => {
// //   return cartsayur.id === Number(id);
// // });
let jumlah = document.getElementById("jumlahbarangsemua");
let total = document.getElementById("totalpembayaransemua");

let jumlahSayur = parseInt(document.getElementById("jumlahbarang").innerHTML);
let jumlahBuah = parseInt(document.getElementById("jumlahbarang1").innerHTML);

let totalsayur = parseInt(document.getElementById("totalpembayaran").innerHTML);
let totalbuah = parseInt(document.getElementById("totalpembayaran1").innerHTML);

// console.log(totalbuah);

jumlah.textContent = jumlahSayur + jumlahBuah;
total.textContent = totalsayur + totalbuah;

let tombol = document.getElementById("tombol");
let jumlah1 = parseInt(document.getElementById("jumlahbarangsemua").innerHTML);
let total1 = parseInt(document.getElementById("totalpembayaransemua").innerHTML);

tombol.addEventListener("click", (e) => {
  let TotalHarga = {
    Key: "0",
    harga: total1,
    jumlah: jumlah1,
  };
  dataHarga.push(TotalHarga);
  localStorage.setItem("totalharga", JSON.stringify(dataHarga));
});
