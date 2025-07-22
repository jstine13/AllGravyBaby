document.addEventListener("DOMContentLoaded", function () {
  // scroll buttons
  const backToTopBtn = document.getElementById("backToTopBtn");
  const orderNowBtn = document.getElementById("orderPopUp");
  const main = document.querySelector("main");

  window.addEventListener("scroll", function () {
    // show back button
    if (main.getBoundingClientRect().top <= 1) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }

    // show order button
    if (main.getBoundingClientRect().top <= 1) {
      orderNowBtn.classList.add("show");
    } else {
      orderNowBtn.classList.remove("show");
    }
  });

  // scroll to top
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // form validation
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let hasError = false;

    // reset borders
    [nameInput, emailInput, messageInput].forEach(input => {
      input.style.borderColor = "#ccc";
    });

    // check name field
    if (nameInput.value.trim() === "") {
      nameInput.style.borderColor = "red";
      hasError = true;
    }

    // check email field
    if (!validateEmail(emailInput.value)) {
      emailInput.style.borderColor = "red";
      hasError = true;
    }

    // check message field
    if (messageInput.value.trim() === "") {
      messageInput.style.borderColor = "red";
      hasError = true;
    }

    // stop or redirect
    if (hasError) {
      return;
    } else {
      alert("thanks! your message has been received.");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    }
  });

  // clear error styles
  [nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener("input", () => {
      input.style.borderColor = "#ccc";
    });
  });

  // check email format
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});