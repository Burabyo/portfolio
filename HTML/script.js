document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
      navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
  });

  document.querySelector("#contact-form").addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const message = document.querySelector("#message").value.trim();
      const formMessage = document.querySelector("#form-message");

      if (name === "" || email === "" || message === "") {
          formMessage.style.color = "red";
          formMessage.textContent = "Please fill in all fields.";
      } else {
          formMessage.style.color = "green";
          formMessage.textContent = "Message sent successfully!";
          this.reset();
      }
  });

  document.querySelectorAll(".view-details").forEach(button => {
      button.addEventListener("click", () => {
          alert("More details coming soon!");
      });
  });
});
