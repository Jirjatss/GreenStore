let containerSayur = document.getElementById("container-sayur");
let ModalcontainerSayur = document.getElementById("list-sayur");
let containerBuah = document.getElementById("container-buah");
let ModalcontainerBuah = document.getElementById("list-buah");
let cartSayur = [];
let cartBuah = [];

let addToCartSayur = (id) => {
  let objectSayurLocalStorage = JSON.parse(localStorage.getItem("sayur")); // ngambil dari local storage dengan key sayur
  let foundSayur = objectSayurLocalStorage.find((sayur) => {
    return sayur.id === Number(id);
  });
  cartSayur.push(foundSayur);
  localStorage.setItem("cartsayur", JSON.stringify(cartSayur));
};
let addToCartBuah = (id) => {
  let objectBuahLocalStorage = JSON.parse(localStorage.getItem("buah")); // ngambil dari local storage dengan key buah
  let foundBuah = objectBuahLocalStorage.find((buah) => {
    return buah.id === Number(id);
  });
  cartBuah.push(foundBuah);
  localStorage.setItem("cartbuah", JSON.stringify(cartBuah));
};

fetch("https://west-broad-gerbil.glitch.me/sayur")
  .then((response) => response.json())
  .then((data) => {
    // menyimpan data ke local storage
    localStorage.setItem("sayur", JSON.stringify(data));

    data.forEach((sayur) => {
      containerSayur.innerHTML += `
    <div class="col-lg-4 col-sm-6 mb-4">
      <div class="Barang-item">
        <a class="Barang-link" data-bs-toggle="modal" href=#sayur-${sayur.id}>
        <div class="Barang-hover">
            <div class="Barang-hover-content"><i class="fas fa-plus fa-3x"></i></div>
          </div>
          <img class="img-fluid" src=${sayur.photo} alt=${sayur.name} />
          </a>
           <div class="Barang-caption">
          <div class="Barang-caption-heading">${sayur.name}</div>
          <div class="Barang-caption-subheading text-muted">${sayur.jenis}</div>
        </div>
      </div>
    </div>
    `;

      ModalcontainerSayur.innerHTML += `
    <div class="Populer-modal modal fade" id=sayur-${sayur.id} tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-bs-dismiss="modal"><b>Tutup</b></div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <!-- Product details-->
                    <h2 class="text-uppercase nama-sayur">${sayur.name}</h2>
                    <p class="item-intro text-muted"></p>
                    <img class="img-fluid d-block mx-auto" src=${sayur.photo} alt=${sayur.name} />
                    <p></p>
                    <ul class="list-inline">
                      <li>
                        <strong>Jenis:</strong>
                        ${sayur.jenis}
                      </li>
                      <li>
                        <strong>Harga:</strong>
                        ${sayur.harga}/Kg
                      </li>
                      <li>
                        <strong>Stok:</strong>
                        ${sayur.stok} Kg
                      </li>
                    </ul>

                    <button class="btn btn-success btn-xl text-uppercase buttonSayur" id=${sayur.id} type="button">
                      <span class="material-icons"> add_shopping_cart </span> <br />
                      Masukan ke Keranjang</button
                    ><br /><br />
                    <button class="btn btn-success btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <span class="material-icons"> local_atm </span> <br />
                      Beli Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    });
    let cartSayurButtons = document.querySelectorAll(".buttonSayur");
    cartSayurButtons.forEach((button) => {
      button.addEventListener("click", (e) => addToCartSayur(button.id));
    });
  });

// AKhir SAyur

// Buah //
// let addToCartBuah = (id) => {
//
// };
fetch("https://west-broad-gerbil.glitch.me/buah")
  .then((response) => response.json())
  .then((data) => {
    // menyimpan data ke local storage
    localStorage.setItem("buah", JSON.stringify(data));

    data.forEach((buah) => {
      containerBuah.innerHTML += `
    <div class="col-lg-4 col-sm-6 mb-4">
    <div class="Barang-item">
      <a class="Barang-link" data-bs-toggle="modal" href=#buah-${buah.id}>
      <div class="Barang-hover">
          <div class="Barang-hover-content"><i class="fas fa-plus fa-3x"></i></div>
        </div>
        <img class="img-fluid" src=${buah.photo} alt=${buah.name} />
        </a>
         <div class="Barang-caption">
        <div class="Barang-caption-heading">${buah.name}</div>
        <div class="Barang-caption-subheading text-muted">${buah.jenis}</div>
      </div>
    </div>
  </div>
    `;

      ModalcontainerBuah.innerHTML += `
    <div class="Populer-modal modal fade" id=buah-${buah.id} tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-bs-dismiss="modal"><b>Tutup</b></div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <!-- Product details-->
                    <h2 class="text-uppercase nama-buah">${buah.name}</h2>
                    <p class="item-intro text-muted"></p>
                    <img class="img-fluid d-block mx-auto" src=${buah.photo} alt=${buah.name} />
                    <p></p>
                    <ul class="list-inline">
                      <li>
                        <strong>Jenis:</strong>
                        ${buah.jenis}
                      </li>
                      <li>
                        <strong>Harga:</strong>
                        ${buah.harga}/Kg
                      </li>
                      <li>
                        <strong>Stok:</strong>
                        ${buah.stok} Kg
                      </li>
                    </ul>

                    <button class="btn btn-success btn-xl text-uppercase buttonBuah" id=${buah.id} type="button">
                      <span class="material-icons"> add_shopping_cart </span> <br />
                      Masukan ke Keranjang</button
                    ><br /><br />
                    <button class="btn btn-success btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <span class="material-icons"> local_atm </span> <br />
                      Beli Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
    });
    let cartBuahButtons = document.querySelectorAll(".buttonBuah");
    cartBuahButtons.forEach((button) => {
      button.addEventListener("click", (e) => addToCartBuah(button.id));
    });
  });
