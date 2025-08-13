document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector('form[action="/login"]');
  if (loginForm) {
    loginForm.addEventListener("submit", function () {
      setTimeout(() => loginForm.reset(), 10);
    });
  }
  const registerForm = document.querySelector('form[action="/register"]');
  if (registerForm) {
    registerForm.addEventListener("submit", function () {
      setTimeout(() => registerForm.reset(), 10);
    });
  }
});