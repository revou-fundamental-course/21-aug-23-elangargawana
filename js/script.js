document.addEventListener('DOMContentLoaded', () => {
    // Fill welcoming speech with the user's name
    const userName = "John"; // Replace with actual user's name
    const welcomeMessage = document.querySelector('.welcome');
    welcomeMessage.textContent = `Hi ${userName}`;

    // Form validation and submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Perform validation (you can add more complex validation)
        if (!name || !email || !phone || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Display form values (you might want to send this data to a server)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Message:', message);

        // Clear form
        contactForm.reset();
    });
});