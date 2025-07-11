import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TarefasPage from "./pages/TarefasPage";
import NovaTarefaPage from "./pages/NovaTarefaPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/registro" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* Rotas protegidas */}
            <Route
               path="/tarefas"
               element={
                  <PrivateRoute>
                     <TarefasPage />
                  </PrivateRoute>
               }
            />

            <Route
               path="/nova-tarefa"
               element={
                  <PrivateRoute>
                     <NovaTarefaPage />
                  </PrivateRoute>
               }
            />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
