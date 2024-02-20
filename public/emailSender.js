document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = {
        userEmail: document.getElementById('userEmail').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Send the form data to your server endpoint
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        alert('Email sent successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error sending email.');
    });
});
