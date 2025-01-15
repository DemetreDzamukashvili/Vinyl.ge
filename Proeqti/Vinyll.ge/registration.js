document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.registration-form form');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', function(event) {
        const email = emailInput.value;

        if (!emailPattern.test(email)) {
            event.preventDefault(); 
            alert('Please enter a valid email address. It must contain "@" and a domain with at least two characters after it.');
        }
    });
});