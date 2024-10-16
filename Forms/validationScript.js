"use strict";

    // JavaScript code for form validation

    // Retrieve the input field element
    const form = document.getElementById('myForm');
    const inputField = document.getElementById('inputField');
    const errorMessage = document.createElement('p');
    
    // Add the errorMessage variable to the form
    form.appendChild(errorMessage);

    // Style formatting for error message
    errorMessage.style.color = '#9370DB';
    errorMessage.style.fontWeight = 'bold';
    errorMessage.style.textAlign = 'center';
    errorMessage.style.fontFamily = 'Tahoma, sans-serif';
    
    // Regular expression pattern for alphanumeric input
      const alphanumericRegex = /^[a-zA-Z0-9]+$/;

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {

        // Prevent form submission
        event.preventDefault();

        // Retrieve the input field value
        const inputValue = inputField.value;

        // Check if the input value matches the pattern
        if (!alphanumericRegex.test(inputValue)) {
            // Invalid input: display error message
            errorMessage.textContent = 'Error: Input value must be alphanumeric.';
        } else {
        // Valid input: display confirmation and submit the form
            errorMessage.textContent = '';
            alert('Form submitted successfully!');
        }
        });

    // JavaScript code for form validation
