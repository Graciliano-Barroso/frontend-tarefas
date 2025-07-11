// src/pages/TarefasPage.jsx
import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function TarefasPage() {
   const [tarefas, setTarefas] = useState([]);
   const navigate = useNavigate();

   // 🔁 Carrega as tarefas quando a página é aberta
   useEffect(() => {
      async function carregarTarefas() {
         try {
            const resposta = await api.get("/tarefas"); // token já é enviado via interceptor
            setTarefas(resposta.data);
         } catch (error) {
            alert("Erro ao buscar tarefas. Verifique seu login.");
            navigate("/login");
         }
      }

      carregarTarefas();
   }, [navigate]);

   // 🗑️ Excluir tarefa
   async function excluirTarefa(id) {
      try {
         await api.delete(`/tarefas/${id}`);
         setTarefas((tarefas) => tarefas.filter((tarefa) => tarefa.id !== id));
      } catch (error) {
         alert("Erro ao excluir tarefa.");
      }
   }

   return (
      <div>
         <h2>Minhas Tarefas</h2>
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
                     <span>Status: {tarefa.status}</span>

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
