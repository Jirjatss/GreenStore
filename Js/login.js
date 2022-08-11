let form = document.getElementById("form").value;
let submit = document.getElementById("submit");
let hasil = document.getElementById("hasil");
let hasilLogin = [];
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
