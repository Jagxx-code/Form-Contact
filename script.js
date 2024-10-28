// IIFE (Immediately Invoked Function Expression) to initialize EmailJS
(function() {
    // Initializes EmailJS with the API key needed to send emails
    emailjs.init("LTrfRsDB9kfDqHUAM"); // EmailJS API key
  })();
  
  // Adds an event listener for the form submission
  document.getElementById("email-form").addEventListener("submit", function(event) {
    // Prevents the default form submission behavior (avoids page reload)
    event.preventDefault();
  
    // Retrieves the response from reCAPTCHA to check if it’s completed
    const recaptchaResponse = grecaptcha.getResponse();
  
    // If the reCAPTCHA response is empty, displays a message and stops the function
    if (recaptchaResponse.length === 0) {
        document.getElementById("response-message").innerText = "Please complete the reCAPTCHA";
        return; // Exits the function if CAPTCHA is not completed
    }
  
    // Retrieves the values from form fields and places them in `templateParams`
    const templateParams = {
        name: document.getElementById("name").value,     // Gets the name from the form field with ID "name"
        email: document.getElementById("email").value,   // Gets the email from the form field with ID "email"
        message: document.getElementById("message").value // Gets the message from the form field with ID "message"
    };
  
    // Sends the email using the EmailJS `send` function
    emailjs.send("service_ofrpmbp", "template_y4taowh", templateParams)
        .then(function(response) {  // If the email is sent successfully
            // Displays a success message
            document.getElementById("response-message").innerText = "Email sent successfully!";
            // Resets the form after a successful submission
            document.getElementById("email-form").reset(); 
            // Resets reCAPTCHA after a successful submission
            grecaptcha.reset(); 
        }, function(error) {  // If there’s an error sending the email
            // Displays an error message
            document.getElementById("response-message").innerText = "Failed to send email. Please try again.";
            // Logs the error details to the console for debugging
            console.error("Error sending email: ", error);
        });
  });
  