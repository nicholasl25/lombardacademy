/* script.js */

function navigateTo(page) {
    let content = document.getElementById('content');
    switch(page) {
        case 'home':
            content.innerHTML = `
                <h2>Welcome to Lombard Academy</h2>
                <p>Unlock your academic potential with personalized tutoring.</p>
            `;
            break;
        case 'about':
            content.innerHTML = `
                <h2>About Us</h2>
                <p>Lombard Academy is dedicated to providing quality education and empowering students to achieve their academic goals.</p>
            `;
            break;
        case 'services':
            content.innerHTML = `
                <h2>Our Services</h2>
                <ul>
                    <li>Mathematics Tutoring</li>
                    <li>Science Tutoring</li>
                    <li>English Tutoring</li>
                    <li>Test Preparation</li>
                </ul>
            `;
            break;
        case 'contact':
            content.innerHTML = `
                <h2>Contact Us</h2>
                <form onsubmit="submitForm(event)">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                
                    <button type="submit">Send Message</button>
                </form>
            `;
            break;
        default:
            content.innerHTML = '<h2>Page not found</h2>';
    }
}

// Load home page content by default
document.addEventListener('DOMContentLoaded', function() {
    navigateTo('home');
});

function submitForm(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
    // Here you can add code to handle form submission,
    // such as sending the data to a server or email.
}