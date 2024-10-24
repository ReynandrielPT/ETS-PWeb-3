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
      document.getElementById("nameError").textContent = "Nama diperlukan.";
      valid = false;
    }

    if (!email) {
      document.getElementById("emailError").textContent = "Email diperlukan.";
      valid = false;
    } else if (!validateEmail(email)) {
      document.getElementById("emailError").textContent =
        "Email tidak valid.";
      valid = false;
    }

    if (!phone) {
      document.getElementById("phoneError").textContent =
        "Nomor Telepon diperlukan.";
      valid = false;
    }

    if (!message) {
      document.getElementById("messageError").textContent =
        "Pesan diperlukan.";
      valid = false;
    }

    if (valid) {
      alert("Form sukses!");
      document.getElementById("contactForm").reset();
    }
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
