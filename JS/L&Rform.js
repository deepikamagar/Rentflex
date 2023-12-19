function validateLogin(event) {
  event.preventDefault();
  // login validation logic
  // Fetching input values
  var usernameOrEmail = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;

  // Validaion for username or email
  if (!usernameOrEmail || !password) {
    alert("Please enter a valid username or email.");
    return;
  }

  // login authentication logic
  //  show an alert for successful login
  alert("Login successful! Redirecting to dashboard...");
}

function validateRegistration(event) {
  event.preventDefault();

  // Fetching input values
  var fullName = document.getElementById("fullName").value;
  var username = document.getElementById("regUsername").value;
  var email = document.getElementById("regEmail").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var district = document.getElementById("district").value;
  var city = document.getElementById("city").value;
  var address = document.getElementById("address").value;
  var password = document.getElementById("regPassword").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // Basic validation
  if (
    !fullName ||
    !username ||
    !email ||
    !phoneNumber ||
    !district ||
    !city ||
    !address ||
    !password ||
    !confirmPassword
  ) {
    alert("Please fill in all fields for registration.");
    return;
  }

  //Validate full name format
  var nameRegx = /^[a-zA-Z]+$/;
  if (!nameRegx.test(fullName)) {
    alert("Please enter a valid Name");
    return;
  }

  //Validate phone number format
  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneNumber)) {
    alert("Please enter a valid phone number");
    return;
  }

  // Validation for password
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Please enter a valid password.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please re-enter your password.");
    return;
  }

  // Registration logic goes here
  // show an alert for successful registration
  alert("Registration successful! Redirecting to login...");
}

function forgotPassword() {
  // Fetching input values
  var email = prompt("Enter your email to reset your password:");

  // Basic validation
  if (!email) {
    alert("Please enter a valid email address.");
    return;
  }

  //  forgot password logic goes here
  //  show an alert for password reset
  alert("Password reset instructions sent to " + email);
}

function toggleForms() {
  var loginForm = document.getElementById("loginForm");
  var registrationForm = document.getElementById("registrationForm");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    registrationForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    registrationForm.style.display = "block";
  }
}
