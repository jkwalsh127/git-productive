//login submission
const loginFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    const username = document.querySelector("#username-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();


  fetch('api/users/login', {
    method: 'POST',
    body: JSON.stringify({
      username: username.value,
      password: password.value
    }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(function() {
    document.location.replace('profile')
  })
  .catch(err => console.log(err))

  }
  
  document.querySelector("#login-form").addEventListener("submit", loginFormHandler);
  