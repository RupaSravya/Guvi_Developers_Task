let currentUser = null;

function register() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Implement backend logic to store user data, e.g., using AJAX or fetch API

  // For simplicity, just set the current user for this example
  currentUser = {
    username,
    age: null,
    dob: null,
    contact: null,
  };

  showProfile();
}

function login() {
  const loginUsername = document.getElementById('loginUsername').value;
  const loginPassword = document.getElementById('loginPassword').value;

  // Implement backend logic to authenticate user, e.g., using AJAX or fetch API

  // For simplicity, just set the current user for this example
  currentUser = {
    username: loginUsername,
    age: 25,
    dob: '1998-01-01',
    contact: '123-456-7890',
  };

  showProfile();
}

function showProfile() {
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('profile').style.display = 'block';

  document.getElementById('profileUsername').innerText = `Username: ${currentUser.username}`;
  document.getElementById('profileAge').innerText = `Age: ${currentUser.age || 'Not available'}`;
  document.getElementById('profileDOB').innerText = `Date of Birth: ${currentUser.dob || 'Not available'}`;
  document.getElementById('profileContact').innerText = `Contact: ${currentUser.contact || 'Not available'}`;
}

function logout() {
  currentUser = null;
  document.getElementById('signupForm').style.display = 'block';
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('profile').style.display = 'none';
}
