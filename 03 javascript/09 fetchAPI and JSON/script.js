const form = document.getElementById("registerUser");
const resultDiv = document.getElementById("result");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userData = {
    email: document.getElementById("email").value,
    full_name: document.getElementById("full_name").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  try {
    const response = await fetch("http://localhost:9000/api/v1/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something wrong");
    }

    const message = response.meta?.message || "no message";

    messageDiv.innerHTML = `<p style="color:green;">Success:\n${message}</p>`;

    resultDiv.innerHTML = `<pre style="color:green;">Success:\n${JSON.stringify(
      result,
      null,
      2
    )}</pre>`;
  } catch (err) {
    resultDiv.innerHTML = `<pre style="color:red;">Error:\n${err.message}</pre>`;
  }
});
