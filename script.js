(function() {
  emailjs.init("LTrfRsDB9kfDqHUAM"); // Emailjs API key
})();

document.getElementById("email-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the reCAPTCHA response
  const recaptchaResponse = grecaptcha.getResponse();

  if (recaptchaResponse.length === 0) {
      document.getElementById("response-message").innerText = "Please complete the reCAPTCHA.";
      return; // Exit the function if reCAPTCHA is not completed
  }

  const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
  };

  emailjs.send("service_ofrpmbp", "template_y4taowh", templateParams)
      .then(function(response) {
          document.getElementById("response-message").innerText = "Email sent successfully!";
          document.getElementById("email-form").reset(); // Reset the form after successful submission
          grecaptcha.reset(); // Reset reCAPTCHA after successful submission
      }, function(error) {
          document.getElementById("response-message").innerText = "Failed to send email. Please try again.";
          console.error("Error sending email: ", error);
      });
});
