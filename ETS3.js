document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    let valid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("messageError").textContent = "";

    if (!name) {
      document.getElementById("nameError").textContent = "Name is required.";
      valid = false;
    }

    if (!email) {
      document.getElementById("emailError").textContent = "Email is required.";
      valid = false;
    } else if (!validateEmail(email)) {
      document.getElementById("emailError").textContent =
        "Invalid email format.";
      valid = false;
    }

    if (!phone) {
      document.getElementById("phoneError").textContent =
        "Phone number is required.";
      valid = false;
    }

    if (!message) {
      document.getElementById("messageError").textContent =
        "Message is required.";
      valid = false;
    }

    if (valid) {
      alert("Form is successfully validated!");
      document.getElementById("contactForm").reset();
    }
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
