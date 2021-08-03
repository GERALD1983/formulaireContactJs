const pseudoName = document.getElementById("pseudoName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPass");

const confirmPassDanger = document.getElementById("confirmPassDanger");
const confirmPassWarn = document.getElementById("confirmPassWarn");
const confirmPassSucces = document.getElementById("confirmPassSucces");

const valuePseudo = (check) => {
  check;
};
let valueEmail = "";
let valuePass = "";
let valueConfirm = "";

pseudo.addEventListener("input", (e) => {
  if (e.target.value.length < 3 || e.target.value.length > 17) {
    pseudoName.innerHTML = "Pseudo doit contenir entre 3 et 17 caractères";
    // valuePseudo = "";
  } else if (e.target.value.match(/^[a-zA-Z]{3,17}[0-9]{0,3}$/)) {
    pseudoName.innerHTML = "";
    valuePseudo(e.target.value);
  } else {
    pseudoName.innerHTML = "Pseudo ne doit pas contenir de caractère spécial";
    // valuePseudo = "";
  }
});

mail.addEventListener("input", (e) => {
  if (e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    email.innerHTML = "";
  } else {
    email.innerHTML = "Email incorrect ex : marty@hotmail.fr";
  }
});

pass.addEventListener("input", (e) => {
  if (
    e.target.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
  ) {
    password.innerHTML = "";
    confirmPassDanger.classList.add("display-none");
    confirmPassWarn.classList.remove("display-none");
    confirmPassSucces.classList.add("display-none");
  }
  if (
    e.target.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)
  ) {
    password.innerHTML = "";
    confirmPassDanger.classList.add("display-none");
    confirmPassWarn.classList.add("display-none");
    confirmPassSucces.classList.remove("display-none");
  }
  if (
    !e.target.value.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    ) &&
    !e.target.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
  ) {
    confirmPassDanger.classList.remove("display-none");
    confirmPassWarn.classList.add("display-none");
    confirmPassSucces.classList.add("display-none");
    password.innerHTML =
      "Faible 1 minuscule 1 majuscule et 1 chiffre min 8 Lts.";
  }
  if (e.target.value.length == 0) {
    console.log("rien");
    confirmPassDanger.classList.add("display-none");
    confirmPassWarn.classList.add("display-none");
    confirmPassSucces.classList.add("display-none");
    password.innerHTML = "";
  }
});

console.log(valuePseudo);
