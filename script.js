document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const messageDiv = document.getElementById('message');

  // Clear previous messages
  messageDiv.className = 'message';
  messageDiv.style.display = 'none';

  // Basic validation
  if (!email || !password) {
    showError('Please fill in all fields');
    return;
  }

  if (password.length < 6) {
    showError('Password must be at least 6 characters');
    return;
  }

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError('Please enter a valid email address');
    return;
  }

  // Simulate login success
  showSuccess('Login successful!');
  
  // Reset form
  setTimeout(() => {
    document.getElementById('login-form').reset();
    messageDiv.className = 'message';
    messageDiv.style.display = 'none';
  }, 2000);
});

function showError(message) {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = message;
  messageDiv.className = 'message error';
  messageDiv.style.display = 'block';
}

function showSuccess(message) {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = message;
  messageDiv.className = 'message success';
  messageDiv.style.display = 'block';
}