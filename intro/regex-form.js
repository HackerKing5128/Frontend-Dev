const form = document.getElementById('myform');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/;
  
  if (!emailRegex.test(emailValue)) {
    alert('Please enter a valid email address');
    return;
  }
  
  alert('Form submitted successfully!');
});