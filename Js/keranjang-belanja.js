let array = [];
let array1 = [];
let dataHarga = [];
datakuantitiy = [];
datakuantitiy1 = [];
namanama = [];

let keranjangBelanjaSayur = document.getElementById("keranjang-belanjaSayur");
let sayur = JSON.parse(localStorage.getItem("cartsayur"));

const convert = (arr) => {
  const res = {};
  arr.forEach((obj) => {
    const key = `${obj.id}`;
    if (!res[key]) {
      res[key] = { ...obj, count: 0 };
    }
    res[key].count += 1;
  });
  return Object.values(res);
};

let reduceSayur = convert(sayur);

reduceSayur.forEach((sayur) => {
  keranjangBelanjaSayur.innerHTML += `
    <div class="row d-flex justify-content-between keranjangbelanja" id="keranjang-${sayur.id}">
  <div class="col-2 rincianbarang gambar" style="text-align: center;">
    <img src=${sayur.photo} alt="" style="width:50%">
  </div>
  <div class="col-2 rincianbarang kata nama" style="text-align: center;" id="nama${sayur.id}">
    ${sayur.name}   
  </div>
  <div class="col-2 rincianbarang-${sayur.id}-${sayur.name}  kata jenis" style="text-align: center;" id="value-${sayur.id}">
   Rp. <span class="total-rincianbarang" id="${sayur.id}-${sayur.name}_${sayur.harga}">${sayur.harga * sayur.count}</span>
  </div>
  <div class="col-2 rincianbarang kuantitas" style="text-align: center;">
  <button class="btn btn-link px-2 minusCartSayur" id="minus" name="${sayur.id}-${sayur.name}">
  <i class="bi bi-dash"></i>
  </button>

  <input id="numberPlace" class="jumlah-quantity" min="1" name="${sayur.id}-${sayur.name}" value=${sayur.count} type="number" />

  <button class="btn btn-link px-2 plusCartSayur" name="${sayur.id}-${sayur.name}" id="plus" value="1">
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
  let plusbutton = document.querySelectorAll(`.plusCartSayur`);
  let minusbutton = document.querySelectorAll(".minusCartSayur");
  let totalHargaSayur = document.querySelectorAll(".total-rincianbarang");

  plusbutton.forEach((element) => {
    element.addEventListener("click", function (event) {
      let quantityFind = document.querySelectorAll(`.jumlah-quantity`);
      quantityFind.forEach((quantity) => {
        if (quantity.name === element.name) {
          quantity.value = Number(quantity.value) + 1;
          totalHarga = [];
        }
      });
      totalHargaSayur.forEach((total) => {
        if (total.id.split("_")[0] === element.name) {
          total.textContent = Number(total.textContent) + Number(total.id.split("_")[1]);
        }
      });
    });
  });

  minusbutton.forEach((element) => {
    element.addEventListener("click", function (event) {
      let quantityFind = document.querySelectorAll(`.jumlah-quantity`);
      quantityFind.forEach((quantity) => {
        if (quantity.name === element.name) {
          quantity.value = Number(quantity.value) - 1;
        }
      });

      totalHargaSayur.forEach((total) => {
        if (total.id.split("_")[0] === element.name) {
          total.textContent = Number(total.textContent) - Number(total.id.split("_")[1]);
        }
      });
    });
  });
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
  var totkun = 0;
  var total = 0;

  let gambarproduk = `${sayur.photo}`;
  let quantity = parseInt(document.getElementById("numberPlace").value);
  let hargabarang = parseInt(document.getElementById(`${sayur.id}-${sayur.name}_${sayur.harga}`).innerHTML);

  namanama.push(gambarproduk);
  datakuantitiy.push(quantity);
  array.push(hargabarang);

  for (i = 0; i < array.length; i++) {
    total += array[i];
    // console.log(total);
  }

  for (i = 0; i < datakuantitiy.length; i++) {
    totkun += datakuantitiy[i];
  }
  let jumlahbarang = document.querySelector("#jumlahbarang");
  let totalpembayaran = document.getElementById("totalpembayaran");
  jumlahbarang.innerHTML = totkun;
  totalpembayaran.innerHTML = total;
});

// let quantity = parseInt(document.getElementById("numberBuah").value);
// quantity++;

// cartSayurButtons.forEach(() => {

// });
//hapus element

let keranjangBelanjaBuah = document.getElementById("keranjang-belanjaBuah");
let buah = JSON.parse(localStorage.getItem("cartbuah"));
let reduceBuah = convert(buah);

reduceBuah.forEach((buah) => {
  keranjangBelanjaBuah.innerHTML += `
  <div class="row d-flex justify-content-between keranjangbelanja" id="keranjang-${buah.id}">
  <div class="col-2 rincianbarang gambar" style="text-align: center;">
    <img src=${buah.photo} alt="" style="width:50%">
  </div>
  <div class="col-2 rincianbarang kata nama" style="text-align: center;" id="buah${buah.id}">
  ${buah.name}   
</div>
  <div class="col-2 rincianbarang-${buah.id}-${buah.name}  kata jenis" style="text-align: center;" id="value-${buah.id}">
   Rp. <span class="total-rincianbarang" id="${buah.id}-${buah.name}_${buah.harga}">${buah.harga * buah.count}</span>
  </div>
  <div class="col-2 rincianbarang kuantitas" style="text-align: center;">
  <button class="btn btn-link px-2 minusCartBuah" id="minus" name="${buah.id}-${buah.name}">
  <i class="bi bi-dash"></i>
  </button>

  <input id="numberBuah" class="jumlah-quantity" min="1" name="${buah.id}-${buah.name}" value=${buah.count} type="number" />

  <button class="btn btn-link px-2 plusCartBuah" name="${buah.id}-${buah.name}" id="plus" value="1">
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
  let plusbutton = document.querySelectorAll(`.plusCartBuah`);
  let minusbutton = document.querySelectorAll(".minusCartBuah");
  let totalHargaSayur = document.querySelectorAll(".total-rincianbarang");

  plusbutton.forEach((element) => {
    element.addEventListener("click", function (event) {
      let quantityFind = document.querySelectorAll(`.jumlah-quantity`);
      quantityFind.forEach((quantity) => {
        if (quantity.name === element.name) {
          quantity.value = Number(quantity.value) + 1;
          totalHarga = [];
        }
      });
      totalHargaSayur.forEach((total) => {
        if (total.id.split("_")[0] === element.name) {
          total.textContent = Number(total.textContent) + Number(total.id.split("_")[1]);
        }
      });
    });
  });

  minusbutton.forEach((element) => {
    element.addEventListener("click", function (event) {
      let quantityFind = document.querySelectorAll(`.jumlah-quantity`);
      quantityFind.forEach((quantity) => {
        if (quantity.name === element.name) {
          quantity.value = Number(quantity.value) - 1;
        }
      });

      totalHargaSayur.forEach((total) => {
        if (total.id.split("_")[0] === element.name) {
          total.textContent = Number(total.textContent) - Number(total.id.split("_")[1]);
        }
      });
    });
  });
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
  let namaproduk = document.querySelector(`#buah${buah.id}`).innerHTML;
  var totkun = 0;
  var total = 0;

  let quantity = parseInt(document.getElementById("numberPlace").value);
  // console.log(quantity);
  let hargabarang = parseInt(document.getElementById(`${buah.id}-${buah.name}_${buah.harga}`).innerHTML);

  namanama.push(namaproduk);
  datakuantitiy1.push(quantity);
  array1.push(hargabarang);
  // console.log(array);
  // console.log(hargabarang);
  for (i = 0; i < array1.length; i++) {
    total += array1[i];
    // console.log(total);
  }

  for (i = 0; i < datakuantitiy1.length; i++) {
    totkun += datakuantitiy1[i];
    console.log(totkun);
  }

  let jumlahbarang = document.querySelector("#jumlahbarang1");
  let totalpembayaran = document.getElementById("totalpembayaran1");
  jumlahbarang.innerHTML = totkun;
  totalpembayaran.innerHTML = total;
});

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
