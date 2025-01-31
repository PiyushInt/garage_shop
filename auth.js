document.querySelector(".continue-btn").onclick = async function () {
  const email = document.querySelector(".email-input").value;
  const password = "testPassword"; // Example input (you'll want password inputs too)

  try {
    const response = await fetch("http://localhost:5000/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    alert(data.message);
  } catch (error) {
    alert("Error connecting to the server.");
  }
};
