/* script.js */

// Function to dynamically load page content based on the selected page
function navigateTo(page) {
    const content = document.getElementById('content');
    content.innerHTML = getPageContent(page) || '<h2>Page not found</h2>';
}

// Function to return the HTML content for each page
function getPageContent(page) {
    switch (page) {
        case 'home':
            return `
                <h2>Welcome to Lombard Academy</h2>
                <p>Unlock your academic potential with personalized tutoring.</p>
                <p>Our mission is to empower students with the knowledge and skills they need to succeed.</p>
            `;
        case 'about':
            return `
                <h2>About Us</h2>
                <p>Founded in 2020 during the pandemic, Lombard Academy was created to support students through challenging times.
                Our mission is to provide accessible and high-quality tutoring to students of all backgrounds.</p>
                <p>We offer a wide range of specialized tutors who excel in various subjects, from high school AP courses and SAT preparation 
                to college-level STEM subjects and beyond.</p>
                <p>Our dedicated tutors tailor their teaching methods to suit each student’s unique learning style, ensuring they gain confidence and achieve their academic goals.</p>
            `;
        case 'services':
            return `
                <h2>Our Services</h2>
                <ul>
                    <li>Mathematics Tutoring - Algebra, Geometry, Calculus, and more</li>
                    <li>Science Tutoring - Biology, Chemistry, Physics</li>
                    <li>English Tutoring - Reading, Writing, and Literature</li>
                    <li>Test Preparation - SAT, ACT, AP Exams</li>
                </ul>
            `;
        case 'contact':
            return `
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
        default:
            return null;
    }
}

// Event listener to load the home page content by default on page load
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
});

// Handle form submission
function submitForm(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
    // Additional form processing logic can go here
}
