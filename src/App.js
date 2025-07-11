import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TarefasPage from "./pages/TarefasPage";
import NovaTarefaPage from "./pages/NovaTarefaPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tarefas" element={<TarefasPage />} />
        <Route path="/nova-tarefa" element={<NovaTarefaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
