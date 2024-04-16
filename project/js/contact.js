
const form = document.getElementById('my-form');
const submitButton = document.getElementById('submit-button');


form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  const formData = new FormData(form);

  // Perform form validation
  let isValid = true;

  // Validate name field
  const nameInput = document.getElementById('name');
  if (nameInput.value.trim() === '') {
    nameInput.classList.add('error');
    isValid = false;
  } else {
    nameInput.classList.remove('error');
  }

  // Validate email field
  const emailInput = document.getElementById('email');
  if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
    emailInput.classList.add('error');
    isValid = false;
  } else {
    emailInput.classList.remove('error');
  }

  // Validate message field
  const messageInput = document.getElementById('message');
  if (messageInput.value.trim() === '') {
    messageInput.classList.add('error');
    isValid = false;
  } else {
    messageInput.classList.remove('error');
  }

  // If the form is valid, submit the form
  if (isValid) {
    // You can add your server-side code here to handle the form submission
    console.log('Form submitted successfully!');
    form.submit();
  }
});

// Helper function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}






