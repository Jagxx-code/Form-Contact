(function() {
    emailjs.init("l8r2nVkM56oqdKfwv"); // Replace with your EmailJS User ID
})();

document.getElementById("email-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_euszhev", "template_4znqio6", templateParams)
        .then(function(response) {
            document.getElementById("response-message").innerText = "Email sent successfully!";
            document.getElementById("email-form").reset(); // Reset the form after successful submission
        }, function(error) {
            document.getElementById("response-message").innerText = "Failed to send email. Please try again.";
            console.error("Error sending email: ", error);
        });
});
