// src/pages/TarefasPage.jsx
import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";

export default function TarefasPage() {
   const [tarefas, setTarefas] = useState([]);
   const [status, setStatus] = useState(""); // novo: filtro por status
   const [busca, setBusca] = useState(""); // novo: busca por texto
   const navigate = useNavigate();

   // 🔁 Carrega as tarefas quando a página é aberta
   useEffect(() => {
      async function carregarTarefas() {
         try {
            const resposta = await api.get("/tarefas", {
               params: {
                  status: status || undefined,
                  busca: busca || undefined,
               },
            }); // token já é enviado via interceptor
            setTarefas(resposta.data);
         } catch (error) {
            alert("Erro ao buscar tarefas. Verifique seu login.");
            navigate("/login");
         }
      }

      carregarTarefas();
   }, [navigate, status, busca]);

   // 🗑️ Excluir tarefa
   async function excluirTarefa(id) {
      const confirmar = window.confirm("Deseja realmente excluir esta tarefa?");
      if (!confirmar) return;

      try {
         await api.delete(`/tarefas/${id}`);
         setTarefas((tarefas) => tarefas.filter((tarefa) => tarefa.id !== id));
      } catch (error) {
         alert("Erro ao excluir tarefa.");
      }
   }

   async function atualizarStatus(id, novoStatus) {
      try {
         await api.patch(`/tarefas/${id}/status`, {
            status: novoStatus,
         });

         // Atualiza a lista de tarefas localmente
         setTarefas((tarefas) =>
            tarefas.map((t) => (t.id === id ? { ...t, status: novoStatus } : t))
         );
      } catch (error) {
         alert("Erro ao atualizar status da tarefa");
      }
   }

   return (
      <div>
         <button
            onClick={() => {
               localStorage.removeItem("token"); // Remove o token
               window.location.href = "/login"; // Redireciona para o login
            }}
            style={{
               position: "absolute",
               right: "20px",
               top: "20px",
               padding: "6px 12px",
               backgroundColor: "#333",
               color: "#fff",
               border: "none",
               borderRadius: "4px",
               cursor: "pointer",
            }}
         >
            Logout
         </button>
         <h2>Minhas Tarefas</h2>
         {/* 🔎 Campo de busca */}
         <input
            type="text"
            placeholder="Buscar por título ou descrição"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            style={{ marginRight: "10px" }}
         />
         {/* 🔘 Filtro por status */}
         <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Todos</option>
            <option value="ABERTA">Aberta</option>
            <option value="EM_ANDAMENTO">Em andamento</option>
            <option value="FINALIZADA">Concluída</option>
         </select>
         <Link to="/nova-tarefa">
            <button style={{ marginTop: "20px" }}>Nova Tarefa</button>
         </Link>
         {tarefas.length === 0 && <p>Nenhuma tarefa encontrada.</p>}
         <ul>
            {tarefas.map((tarefa) => (
               <li
                  key={tarefa.id}
                  style={{ marginBottom: "16px", listStyle: "none" }}
               >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                     <strong>{tarefa.titulo}</strong>
                     <span>Descrição: {tarefa.descricao}</span>
                     <label>
                        Status:
                        <select
                           value={tarefa.status}
                           onChange={(e) =>
                              atualizarStatus(tarefa.id, e.target.value)
                           }
                        >
                           <option value="ABERTA">Aberta</option>
                           <option value="EM_ANDAMENTO">Em andamento</option>
                           <option value="FINALIZADA">Concluída</option>
                        </select>
                     </label>

                     {/* 🔴 Botão de excluir */}
                     <button
                        onClick={() => excluirTarefa(tarefa.id)}
                        style={{
                           marginTop: "8px",
                           padding: "6px 12px",
                           backgroundColor: "#e74c3c",
                           color: "#fff",
                           border: "none",
                           borderRadius: "4px",
                           width: "100px",
                           cursor: "pointer",
                        }}
                     >
                        Excluir
                     </button>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
}
