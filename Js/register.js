let form = document.getElementById("form").value;
let submit = document.getElementById("submit");
let hasil = document.getElementById("hasil");

submit.addEventListener("click", function (event) {
  event.preventDefault();

  const nama = document.getElementById("nama");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const konfirpassword = document.getElementById("konfirpassword");

  if (email === "") {
    email_status = false;
  } else {
    email_status = true;
  }

  if (password === "") {
    password_status = false;
  } else {
    password_status = true;
  }

  if (nama === "") {
    nama_status = false;
  } else {
    nama_status = true;
  }

  if (konfirpassword !== password) {
    konfirpassword_status = false;
  } else {
    konfirpassword_status = true;
  }
  if (email_status && password_status && nama && konfirpassword) {
    simpanData();
  } else {
    hasil.style.color = "red";
    hasil.innerHTML = "Enter valid data";
  }
  simpanData();
  // hapus();
});

function simpanData() {
  // HasilLogin.push(form);
  let HasilDaftar = {
    Key: "0",
    nama: nama.value,
    mail: email.value,
    Password: password.value,
  };
  let Daftar = JSON.stringify(HasilDaftar);
  localStorage.setItem("regsiter", Daftar);
}
// function hapus() {
//   form.reset();
// }
