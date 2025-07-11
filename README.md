# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# 📘 Semana 1: Base com React.js + Comunicação com a API

# 🗓️ Dia 1 – Criando o projeto React + estrutura base
Instalar Node, npm, e criar o projeto com create-react-app.

Vamos começar o Dia 1 – Criando o projeto React + estrutura base com todos os detalhes para quem está começando do zero. Aqui você vai:

✅ Criar o projeto React
✅ Organizar a estrutura de pastas
✅ Instalar bibliotecas essenciais
✅ Criar as rotas base para a aplicação

🎯 Objetivo do Dia 1
Você terá um projeto React funcionando com as páginas de:

Login

Registro

Listar Tarefas

Criar Tarefa

✅ Etapa 1: Instalar o Node.js e npm
O que é o Node.js e npm?
Node.js permite executar JavaScript fora do navegador.

npm é o gerenciador de pacotes para instalar bibliotecas no seu projeto.

Verifique se já tem o Node instalado:
No terminal ou prompt de comando:

```bash
node -v
npm -v
```

Se aparecer a versão, está tudo certo.
Se não aparecer, baixe o Node.js aqui: https://nodejs.org

✅ Etapa 2: Criar o Projeto React
Abra o terminal e execute os comandos:

```bash
npx create-react-app frontend-tarefas
cd frontend-tarefas
```

O comando npx ``create-react-app`` cria um projeto completo React com a estrutura pronta.

✅ Etapa 3: Estrutura de Pastas
No seu projeto ``frontend-tarefas``, crie a seguinte estrutura de pastas:

```css
src/
├── components/
├── pages/
├── services/
├── App.js
├── index.js
```

Explicação:

``components/``: componentes reutilizáveis como Botões, Inputs etc.

``pages/``: páginas principais como Login, Registro, ListarTarefas etc.

``services/``: arquivos para comunicação com a API (axios).

``App.js``: onde você define as rotas.

``index.js``: ponto de entrada da aplicação.

✅ Etapa 4: Instalar Bibliotecas

Vamos instalar duas bibliotecas muito importantes:

```bash
npm install axios react-router-dom
```

O que cada uma faz?

- ``axios``: faz requisições HTTP para se comunicar com a API NestJS.

- ``react-router-dom``: permite criar rotas (páginas diferentes) no React.

✅ Etapa 5: Criar as Páginas

Na pasta ``src/pages``, crie os seguintes arquivos (você pode usar qualquer editor de texto, como VSCode):

1. ``LoginPage.jsx``

```jsx
function LoginPage() {
  return <h2>Página de Login</h2>;
}

export default LoginPage;
```

2. ``RegisterPage.jsx``

```jsx
function RegisterPage() {
  return <h2>Página de Registro</h2>;
}

export default RegisterPage;
```

3. ``TarefasPage.jsx``

```jsx
function TarefasPage() {
  return <h2>Listar Tarefas</h2>;
}

export default TarefasPage;
```

4. ``NovaTarefaPage.jsx``

```jsx
function NovaTarefaPage() {
  return <h2>Criar Nova Tarefa</h2>;
}

export default NovaTarefaPage;
```

✅ Etapa 6: Configurar as Rotas

No ``src/App.js``, substitua o conteúdo por:

```jsx
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
        <Route path="/tarefas" element={<TarefasPage />} />
        <Route path="/tarefas/nova" element={<NovaTarefaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

🧪 Testando

Para ver a aplicação rodando:

```bash
npm start
```

O navegador abrirá com a rota ``/`` (Login).
Você pode navegar manualmente para ``/registro``, ``/tarefas``, ``/tarefas/nova`` para ver as páginas.

✅ Resumo do Dia 1:
✔️ Instalou Node.js e React
✔️ Criou a estrutura de pastas
✔️ Instalou ``axios`` e ``react-router-dom``
✔️ Criou páginas base
✔️ Configurou rotas com React Router

