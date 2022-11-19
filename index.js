function ageGame() {
  let ageInput = document.getElementById("age").value;
  let response = document.getElementById("response");
  response.innerHTML = "";

  if (ageInput == null || ageInput == "") {
    response.innerHTML = "Al menos haz un intento";
  } else if (ageInput > 100) {
    response.innerHTML = "En serio? 👀";
  } else if (ageInput > 25) {
    response.innerHTML = "No tengo tantos años";
  } else if (ageInput == 25) {
    response.innerHTML = "Diste con el clavo!";
  } else if (ageInput < 25) {
    response.innerHTML = "Ya quisiera ser tan joven";
  }
}
