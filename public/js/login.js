//login submission
const loginFormHandler = async (event) => {
  event.preventDefault();
  // Collect values from the login form
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  console.log(username)
  // Send a POST request to the API endpoint
  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // If successful, redirect the browser to the dashboard page
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("failed to login");
    }
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
