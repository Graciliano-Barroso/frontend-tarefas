"use client"
import { useState } from "react";
import axios from "axios";

function RegisterPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/usuarios/registrar", {
        nome,
        email,
        senha,
      });

      setMensagem("✅ Usuário registrado com sucesso!");
      setNome("");
      setEmail("");
      setSenha("");
    } catch (error) {
      if (error.response) {
        setMensagem(`❌ Erro: ${error.response.data.message}`);
      } else {
        setMensagem("❌ Erro ao conectar com o servidor");
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registro de Usuário</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label><br />
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

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

        <button type="submit" style={{ marginTop: "10px" }}>Registrar</button>
      </form>

      {mensagem && (
        <div style={{ marginTop: "10px", color: "green" }}>{mensagem}</div>
      )}
    </div>
  );
}

export default RegisterPage;

