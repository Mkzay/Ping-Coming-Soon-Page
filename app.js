// JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const mail = document.querySelector('#mail');
    const form = document.querySelector('#form');
    const errorElement = document.querySelector('#error');
    const submit = document.querySelector('#submit');
  
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent the form from submitting by default
  
      let messages = [];
  
      // Check for empty or null email value
      if (mail.value.trim() === '') {
        messages.push('Email is required');
      } else {
        // Check for valid email format
        if (!emailRegex.test(mail.value)) {
          messages.push('Please provide a valid email address');
        }
      }
  
      // Display error messages or submit the form
      if (messages.length > 0) {
        errorElement.textContent = messages.join(', ');
        errorElement.style.display = 'block';
      } else {
        // If there are no errors, you can proceed with form submission here.
        // For this example, we'll just show an alert indicating success.
        alert('Form submitted successfully!');
        // Uncomment the line below to submit the form programmatically.
        // form.submit();
      }
    });
  
    // Clear error messages when the user interacts with the email field
    mail.addEventListener('input', () => {
      errorElement.style.display = 'none';
      errorElement.textContent = '';
    });
  });
  