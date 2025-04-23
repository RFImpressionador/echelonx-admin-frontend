function entrar() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  fetch("https://echelonx-backend.onrender.com/api/login", {
    // Verifique o link
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        window.location.href = "https://echelonx-painel.onrender.com/admin";
      } else {
        alert("Credenciais inválidas.");
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("Erro ao conectar com o servidor.");
    });
}
