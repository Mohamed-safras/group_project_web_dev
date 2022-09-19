const registerForm = document.querySelector("#register-form");
const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const nic = document.querySelector("#nic");
const address = document.querySelector("#address");
const dob = document.querySelector("#DOB");
const pNumber = document.querySelector("#pNumber");

registerForm.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    const data = {
      username: userName.value,
      password: password.value,
      email: email.value,
      nic: nic.value,
      address: address.value,
      dob: dob.value,
      p_number: pNumber.value,
    };

    const response = await fetch("http://localhost:8800/register", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const content = await response.json();

    console.log(content);
    return content;
  } catch (error) {
    console.log(error);
  }
});
