const loginForm = document.querySelector("#login-form");
const userName = document.querySelector("#username");
const password = document.querySelector("#password");

console.log();

loginForm.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    const data = {
      userName: userName.value,
      password: password.value,
    };

    fetch("http://localhost:8800", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((response) => {
      console.log(response);
    });
  } catch (error) {
    console.log(error);
  }
});
