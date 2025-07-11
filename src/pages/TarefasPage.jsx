// src/pages/TarefasPage.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function TarefasPage() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function carregarTarefas() {
      try {
        const resposta = await api.get('/tarefa');
        setTarefas(resposta.data);
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    }

    carregarTarefas();
  }, []);

  return (
    <div>
      <h2>Minhas Tarefas</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.titulo} - {tarefa.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

