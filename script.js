/* script.js */

function navigateTo(page) {
    let content = document.getElementById('content');
    switch (page) {
        case 'home':
            content.innerHTML = `
                <h2>Welcome to Lombard Academy</h2>
                <p>Unlock your academic potential with personalized tutoring.</p>
                <p>Our mission is to empower students with the knowledge and skills they need to succeed.</p>
            `;
            break;
        case 'about':
            content.innerHTML = `
                <h2>About Us</h2>
                <p>Founded in 2020 during the pandemic, Lombard Academy was created to support students through challenging times.
                 Our mission is to provide accessible and high-quality tutoring to students of all backgrounds.</p>
                <p>We offer a wide range of specialized tutors who excel in various subjects,
                 from high school AP courses and SAT preparation to college-level STEM subjects and beyond.</p>
                <p>Our dedicated tutors tailor their teaching methods to suit each student’s unique learning style, ensuring they gain confidence and achieve their academic goals.</p>
            `;
            break;
        case 'services':
            content.innerHTML = `
                <h2>Our Services</h2>
                <ul>
                    <li>Mathematics Tutoring - Algebra, Geometry, Calculus, and more</li>
                    <li>Science Tutoring - Biology, Chemistry, Physics</li>
                    <li>English Tutoring - Reading, Writing, and Literature</li>
                    <li>Test Preparation - SAT, ACT, AP Exams</li>
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
document.addEventListener('DOMContentLoaded', function () {
    navigateTo('home');
});

function submitForm(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
    // Add functionality here to process the form data, such as sending it to an email or database
}
