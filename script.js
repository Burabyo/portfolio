// Wait until the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    
    // Select the menu toggle button and navigation links container
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Toggle the visibility of the navigation menu when the menu button is clicked
    menuToggle.addEventListener("click", () => {
        navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    });

    // Handle form submission for the contact form
    document.querySelector("#contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get user input values and remove leading/trailing spaces
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();
        const formMessage = document.querySelector("#form-message"); // Message display element

        // Check if any of the input fields are empty
        if (name === "" || email === "" || message === "") {
            formMessage.style.color = "red"; // Set error message color
            formMessage.textContent = "Please fill in all fields."; // Display error message
        } else {
            formMessage.style.color = "green"; // Set success message color
            formMessage.textContent = "Thank you for the support!"; // Display success message
            this.reset(); // Reset the form fields
        }
    });

    // Add event listeners to all "View Details" buttons to show an alert when clicked
    document.querySelectorAll(".view-details").forEach(button => {
        button.addEventListener("click", () => {
            alert("More details coming soon!"); // Show alert message
        });
    });
});

// Add hover effects to all education cards
document.querySelectorAll(".education-card").forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)"; // Slightly enlarge the card on hover
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)"; // Reset card size when not hovered
    });
});

// Add hover effects to all experience cards
document.querySelectorAll(".experience-card").forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)"; // Slightly enlarge the card on hover
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)"; // Reset card size when not hovered
    });
});

// Select slideshow elements
const slides = document.querySelector('.slides'); // Container holding all images
const images = document.querySelectorAll('.slides img'); // List of images inside the slider
const prev = document.querySelector('.prev'); // Previous button
const next = document.querySelector('.next'); // Next button

let index = 0; // Index to track the current slide

// Function to display the appropriate slide based on the index
function showSlide(n) {
    if (n >= images.length) index = 0; // Loop back to the first slide if the index exceeds the total number of slides
    if (n < 0) index = images.length - 1; // Loop to the last slide if index goes below 0
    slides.style.transform = `translateX(${-index * 100}%)`; // Move the slides container horizontally
}

// Add event listener to the next button to move to the next slide
next.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior (useful if button is inside an anchor tag)
    index++; // Increment the index
    showSlide(index); // Show the next slide
});

// Add event listener to the previous button to move to the previous slide
prev.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior
    index--; // Decrement the index
    showSlide(index); // Show the previous slide
});

// Initialize the slider by displaying the first slide
showSlide(index);



