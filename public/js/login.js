//login submission
const loginFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    const username = document.querySelector("#username-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
<<<<<<< HEAD
=======

>>>>>>> 8e637d4f10c4f74cdf4b869071031c57a0501c5d

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
<<<<<<< HEAD
=======

>>>>>>> 8e637d4f10c4f74cdf4b869071031c57a0501c5d
  }
  
  document.querySelector("#login-form").addEventListener("submit", loginFormHandler);
  