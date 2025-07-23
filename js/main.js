document.addEventListener("DOMContentLoaded", function () {
  // scroll buttons
  const backToTopBtn = document.getElementById("backToTopBtn");
  const orderNowBtn = document.getElementById("orderPopUp");
  const main = document.querySelector("main");

  if (main && backToTopBtn) {
    window.addEventListener("scroll", function () {
      const show = main.getBoundingClientRect().top <= 1;
      backToTopBtn.classList.toggle("show", show);
      if (orderNowBtn) {
        orderNowBtn.classList.toggle("show", show);
      }
    });

    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // form validation
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let hasError = false;

      [nameInput, emailInput, messageInput].forEach(input => {
        input.style.borderColor = "#ccc";
      });

      if (nameInput && nameInput.value.trim() === "") {
        nameInput.style.borderColor = "red";
        hasError = true;
      }

      if (emailInput && !validateEmail(emailInput.value)) {
        emailInput.style.borderColor = "red";
        hasError = true;
      }

      if (messageInput && messageInput.value.trim() === "") {
        messageInput.style.borderColor = "red";
        hasError = true;
      }

      if (hasError) return;

      alert("thanks! your message has been received.");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    });

    [nameInput, emailInput, messageInput].forEach(input => {
      input?.addEventListener("input", () => {
        input.style.borderColor = "#ccc";
      });
    });
  }

  function validateEmail(email) {
    return /@.*\./.test(email);
  }
});