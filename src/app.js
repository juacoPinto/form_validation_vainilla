let theForm = document.getElementById("theForm");
let alert = document.getElementById("alert");
theForm.addEventListener("submit", e => {
  e.preventDefault();

  let errors = false;

  let form = e.target;

  let {
    card,
    cvc,
    email,
    name,
    surname,
    city,
    noSelection,
    postal,
    state,
    message
  } = form;

  let onlyText = /^[a-zA-Z0-9" "]+$/;
  let onlyNums = /^[0-9]+$/;
  let cardValid = /[0-9]{13,16}/;
  // If fields are missing, error

  if (card.value === "") {
    errors = true;
    card.classList.add("alert-danger");
  }

  if (cvc.value === "") {
    errors = true;
    cvc.classList.add("alert-danger");
  }
  if (email.value === "") {
    errors = true;
    email.classList.add("alert-danger");
  }
  if (name.value === "") {
    errors = true;
    name.classList.add("alert-danger");
  }
  if (surname.value === "") {
    errors = true;
    surname.classList.add("alert-danger");
  }
  if (city.value === "") {
    errors = true;
    city.classList.add("alert-danger");
  }
  if (state.value === "") {
    errors = true;
    state.classList.add("alert-danger");
  }
  if (postal.value === "") {
    errors = true;
    postal.classList.add("alert-danger");
  }
  if (message.value === "") {
    errors = true;
    message.classList.add("alert-danger");
  }
  // If symbols, error;
  if (!onlyText.test(name.value)) {
    errors = true;
    name.classList.add("alert-danger");
    alert.innerHTML = "Please, add only valid characters";
  }
  if (!onlyText.test(surname.value)) {
    errors = true;
    surname.classList.add("alert-danger");
    alert.innerHTML = "Please, add only valid characters";
  }
  if (!onlyText.test(city.value)) {
    errors = true;
    city.classList.add("alert-danger");
    alert.innerHTML = "Please, add only valid characters";
  }
  // If other than numbers, error
  if (!onlyNums.test(card.value)) {
    errors = true;
    card.classList.add("alert-danger");
    alert.innerHTML = "Please, add only valid characters";
  }
  if (!onlyNums.test(cvc.value)) {
    errors = true;
    cvc.classList.add("alert-danger");
    alert.innerHTML = "Please, add only valid characters";
  }
  if (!onlyNums.test(postal.value)) {
    errors = true;
    postal.classList.add("alert-danger");
    alert.innerHTML = "Please, add only valid characters";
  }

  // Final check, if all good, then gogogo;
  if (!errors) {
    form.submit();
  }
  if (errors) {
    alert.style.display = "block";
  }
});
