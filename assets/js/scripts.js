const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return; // Exit the function if validation fails
    }

    // Get the form data
    const formData = new FormData(this);

    // Prepare the AJAX request
    fetch(this.action, {
        method: this.method,
        body: formData,
        mode: 'no-cors', // Use no-cors mode to bypass CORS issues
    })
        .then(() => {
            // Handle the successful response
            document.getElementById('form-status').innerHTML = `
            <p style="color: green;">Your message has been sent successfully!</p>`;

            // Clear the form fields
            this.reset();
        })
        .catch(() => {
            // Handle network errors or other issues
            document.getElementById('form-status').innerHTML = `
            <p style="color: red;">There was an error sending your message. Please try again later.</p>`;
        });
});