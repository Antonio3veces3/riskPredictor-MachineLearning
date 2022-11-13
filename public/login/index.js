const btnSingIn = document.getElementById("btnSingIn");
const userInput = document.getElementById("userInput");
const passwordInput = document.getElementById("passwordInput");

btnSingIn.addEventListener("click", async () => {
    const username = userInput.value;
    const password= passwordInput.value;
    const data= {
        username,
        password
    }
  fetch("http://localhost:8080/auth/login", {
    method: "POST",
    mode: "cors",
    headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (!res.status) {
        return alert(res.msg);
      }

      console.log(res);
      localStorage.setItem('admin', res.username);
      window.location = 'http://localhost:8080/admin';
    })
    .catch(console.error);
});
