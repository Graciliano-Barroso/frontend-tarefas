"use client"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const resposta = await axios.post("http://localhost:3000/auth/login", {
        email,
        senha,
      });

      const token = resposta.data.access_token;
      localStorage.setItem("token", token); // Salva o token no navegador

      setMensagem("✅ Login realizado com sucesso!");
      navigate("/tarefas"); // redireciona para a página de tarefas
    } catch (erro) {
      if (erro.response) {
        setMensagem(`❌ Erro: ${erro.response.data.message}`);
      } else {
        setMensagem("❌ Erro ao conectar com o servidor");
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Senha:</label><br />
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>Entrar</button>
      </form>

      {mensagem && <p style={{ marginTop: "10px", color: "green" }}>{mensagem}</p>}
    </div>
  );
}

export default LoginPage;
