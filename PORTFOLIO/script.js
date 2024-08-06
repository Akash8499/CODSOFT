// script.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle form submission (e.g., send data to server)
        alert('Form submitted!');
    });
});
