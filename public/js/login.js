//function to log in users
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  } else {
    alert("Something is missing..please try again");
  }
};

//function to sign up users
const signupFormHandler = async (event) => {
  event.preventDefault();

  //collect values from sign up form
  const name = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  //post request to create a new user
  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    //if response is successful, redirect to dashboard page
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  } else {
    alert("Something is missing..please try again");
  }
};

//Show sign up form, hide login form
const signUpView = (event) => {
  event.preventDefault();
  const signUpDiv = document.getElementById('signup-div').classList.remove('hide');
  const loginDiv = document.getElementById('login-div').classList.add('hide');
}

document
  .getElementById('loginBtn')
  .addEventListener('click', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

  document.getElementById('chooseSignup').addEventListener('click', signUpView)
