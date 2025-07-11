// src/pages/NovaTarefaPage.jsx
import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function NovaTarefaPage() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post('/tarefas', { titulo, descricao });
      alert('Tarefa criada com sucesso!');
      navigate('/tarefas');
    } catch (error) {
      alert('Erro ao criar tarefa');
    }
  }

  return (
    <div>
      <h2>Criar Nova Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

