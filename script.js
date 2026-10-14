document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if (username === '' || password === '') {
    alert('Please fill in all fields');
    return;
  }
  // Simple client‑side validation only
  alert('Login attempt for ' + username);
});