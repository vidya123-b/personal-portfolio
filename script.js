function validateForm() {
  const form = document.forms["myForm"];
  const name = form["name"].value.trim();
  const email = form["email"].value.trim();
  if (name === "") {
    alert("Please enter your name");
    return false;
  }
  if (email === "") {
    alert("Please enter your email");
    return false;
  }
  return true; // form is valid
}

function button() {
  let button = document.getElementById("button");
  button.addEventListener("click", function (event) {
    if (validateForm()) {
      alert("Message has been send");
    }
    event.preventDefault(); 
  });
}
button();
// document.addEventListener("DOMContentLoaded", button);