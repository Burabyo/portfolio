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
          formMessage.textContent = "Thank you for the support!";
          this.reset();
      }
  });

  document.querySelectorAll(".view-details").forEach(button => {
      button.addEventListener("click", () => {
          alert("More details coming soon!");
      });
  });
});
document.querySelectorAll(".education-card").forEach(card => {
  card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
  });
});
document.querySelectorAll(".experience-card").forEach(card => {
  card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
  });
});
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide(n) {
    if (n >= images.length) index = 0;
    if (n < 0) index = images.length - 1;
    slides.style.transform = `translateX(${-index * 100}%)`;
}

next.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default anchor tag behavior
    index++;
    showSlide(index);
});

prev.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default anchor tag behavior
    index--;
    showSlide(index);
});

showSlide(index);


