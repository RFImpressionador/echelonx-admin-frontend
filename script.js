// Função chamada quando clica no botão "Entrar"
function entrar() {
  const username = document.getElementById("username").value.trim(); // Pega usuário
  const password = document.getElementById("password").value.trim(); // Pega senha

  if (!username || !password) {
    // Checa se preencheu tudo
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Envia os dados para o backend hospedado
  fetch("https://echelonx-backend.onrender.com/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        // Login OK, redireciona pro painel
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
