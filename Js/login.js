let form = document.getElementById("form").value;
let submit = document.getElementById("submit");
let hasil = document.getElementById("hasil");
let hasilLogin = [];
let hapusRegister = document.getElementById("register");

submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

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

  if (email_status && password_status) {
    simpanData();
    hasil.style.color = "green";
    hasil.innerHTML = "Anda Berhasil Login";
    hapusRegister.classList.add("hide");
    submit.innerHTML = `<button id="submit" type="submit" class="button"  onclick="location.href='index.html'">Lanjutkan Ke Home</button>`;
  } else {
    hasil.style.color = "red";
    hasil.innerHTML = "Enter valid data";
  }

  hapus();
});

function simpanData() {
  let HasilLogin = {
    Key: "0",
    mail: email.value,
    Password: password.value,
  };
  hasilLogin.push(HasilLogin);
  let Login = JSON.stringify(hasilLogin);
  localStorage.setItem("login", Login);
}
function hapus() {
  form.reset();
}
