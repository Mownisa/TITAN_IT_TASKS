document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;

    if (email === "") {
        alert("Please enter your email.");
    } else {
        alert(`Email submitted: ${email}`);

        // After submitting, you can redirect the user to the next sign-up or confirmation page
        // For example: window.location.href = 'signup-page.html';
    }
});
