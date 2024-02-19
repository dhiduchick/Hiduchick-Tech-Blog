const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
      const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
          document.location.replace('/dashboard');
      } else {
          alert(response.statusText);
      }
  } else {
      alert('Something has gone missing please try again!');
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
      const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
          document.location.replace('/dashboard');
      } else {
          alert(response.statusText);
      }
  } else {
      alert("Something is missing..please try again");
  }
};

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

document.getElementById('chooseSignup').addEventListener('click', signUpView);
