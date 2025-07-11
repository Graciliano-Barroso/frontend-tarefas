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

# **🗓️ Dia 2 – Criar página de Registro e fazer POST**.

Neste dia, você aprenderá:

### 🎯 Objetivos:

* Criar um **formulário de cadastro** (nome, e-mail, senha)
* Fazer uma **requisição POST** para sua API NestJS
* Exibir mensagens de **sucesso ou erro** ao usuário

---

## ✅ Etapa 1: Abrir a página RegisterPage.jsx

Abra o arquivo:

```bash
src/pages/RegisterPage.jsx
```

E substitua **tudo** pelo seguinte código:

```jsx
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
```

---

## ✅ Etapa 2: Garantir que a API NestJS está funcionando

Sua API deve estar **rodando** no `localhost:3000`.

No seu NestJS, a rota de registro de usuário deve estar assim:

```ts
// POST /usuarios/registrar
@Post('registrar')
registrar(@Body() dto: CreateUsuarioDto) {
  return this.usuarioService.registrar(dto.nome, dto.email, dto.senha);
}
```

Verifique também que o CORS está habilitado no `main.ts` da API:

```ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Permite que o frontend se comunique com a API
  await app.listen(3000);
}
```

---

## ✅ Etapa 3: Testar no navegador

1. Inicie o React:

```bash
npm start
```

2. Vá até:

```
http://localhost:3000/registro
```

3. Preencha o formulário com:

* Nome
* E-mail válido
* Senha

4. Clique em **Registrar**

5. Você verá uma mensagem ✅ ou ❌ dependendo do resultado.

---

## ✅ Etapa 4: Visualizando os dados

Se o registro for bem-sucedido, você pode ver o novo usuário salvo:

* No **PostgreSQL**:

```sql
SELECT * FROM usuario_entity;
```

---

## ✅ Resumo do Dia 2:

✔️ Criou formulário de registro no React
✔️ Enviou dados para a API NestJS com `axios`
✔️ Exibiu mensagens de sucesso ou erro
✔️ Garantiu que o CORS estava habilitado

---

# **🗓️ Dia 3 – Criar página de Login e salvar o token JWT**.

---

## 🎯 Objetivo do Dia:

* Criar um **formulário de login**.
* Enviar o e-mail e a senha para a API NestJS usando `axios`.
* Armazenar o token JWT retornado no `localStorage`.
* Redirecionar o usuário para a página de tarefas ao fazer login com sucesso.

---

## ✅ Etapa 1: Criar a página de login

Crie o arquivo:

```
src/pages/LoginPage.jsx
```

E cole o seguinte conteúdo:

```jsx
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
```

---

## ✅ Etapa 2: Adicionar rota de login no React Router

Abra o arquivo:

```
src/App.jsx
```

E atualize com a nova rota:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TarefasPage from "./pages/TarefasPage"; // (você vai criar essa depois)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tarefas" element={<TarefasPage />} /> {/* você vai criar depois */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

## ✅ Etapa 3: Testar no navegador

1. Rode a API NestJS (`npm run start:dev`)
2. Rode o frontend React (`npm start`)
3. Acesse:

```
http://localhost:3000/login
```

4. Preencha o e-mail e a senha de um usuário já registrado
5. Clique em **Entrar**
6. Verifique no DevTools → Application → LocalStorage → aparece o `token`

---

## ✅ Etapa 4: Verificando o token

Você verá algo assim no navegador (F12 > Application > LocalStorage):

```
Key: token
Value: eyJhbGciOiJIUzI1NiIsInR...
```

Esse token é o que será enviado nas requisições protegidas (como criar/listar tarefas).

---

## 🔁 Próximo passo

Crie uma nova página chamada `TarefasPage.jsx` onde você:

* Pega o token do `localStorage`
* Faz uma requisição para a API usando esse token
* Mostra as tarefas do usuário logado

---

## ✅ Resumo do Dia 3:

✔️ Criou página de login com formulário
✔️ Fez `POST /auth/login` com e-mail/senha
✔️ Armazenou o token no `localStorage`
✔️ Redirecionou para a rota `/tarefas` com `useNavigate`

---

# **🗓️ Dia 4 – Criar serviço Axios com autenticação**

Hoje você vai aprender a **centralizar todas as requisições HTTP usando o `axios`**, de forma que o **token JWT seja automaticamente enviado** sempre que o usuário estiver logado.

---

## 🎯 Objetivo do Dia:

* Criar um **arquivo único** para configurar o `axios`.
* Fazer com que esse `axios` envie **automaticamente o token JWT** em todas as requisições.
* Evitar ter que ficar copiando `headers` manualmente toda vez.

---

## ✅ Etapa 1: Criar pasta `services` e o arquivo `api.js`

📁 Crie a pasta:

```
src/services/
```

📄 Dentro dela, crie o arquivo:

```
src/services/api.js
```

✏️ E adicione este conteúdo:

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // sua API NestJS
});

// Intercepta todas as requisições antes de serem enviadas
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // pega o token salvo
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // adiciona nos headers
  }
  return config;
});

export default api;
```

---

## 🧠 O que esse código faz?

* `axios.create(...)`: cria uma versão personalizada do axios com a URL base da sua API.
* `.interceptors.request.use(...)`: adiciona um *interceptor* que roda antes de **cada requisição**.
* Ele pega o `token` do `localStorage` e adiciona automaticamente no header `Authorization`.

---

## ✅ Etapa 2: Usar o `api` no lugar do `axios`

Agora que temos o `api` configurado, **substituímos o uso direto do `axios` por ele**.

### Exemplo no `LoginPage.jsx`

Antes (usando axios diretamente):

```javascript
const resposta = await axios.post("http://localhost:3000/auth/login", {
  email,
  senha,
});
```

Depois (ainda pode usar axios aqui **somente pro login**, pois ainda não tem o token):

✅ Pode manter esse trecho como está para o login, **mas para todas as outras requisições protegidas**, como listar ou criar tarefas, você **deve usar** o `api`.

---

## ✅ Etapa 3: Testar o funcionamento

Para testar se o interceptor está funcionando:

1. Acesse `/login` e faça login.
2. Abra o DevTools > Network.
3. Faça uma requisição (ex: acessar `/tarefas`).
4. Verifique se nos headers da requisição está aparecendo:

```http
Authorization: Bearer SEU_TOKEN_JWT
```

---

## ✅ Etapa 4: Usar o `api` nas páginas que acessam rotas protegidas

Agora, sempre que você for criar, editar, deletar ou listar tarefas, use o `api` que criamos:

```javascript
import api from '../services/api';

// Exemplo: pegar todas as tarefas
const resposta = await api.get('/tarefas');

// Exemplo: criar uma nova tarefa
await api.post('/tarefas', {
  titulo: "Nova Tarefa",
  descricao: "Estudar React",
});
```

---

## 🛠️ Organização da pasta até agora

```
src/
├── services/
│   └── api.js ✅
├── pages/
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   └── TarefasPage.jsx (você vai criar no próximo dia)
├── App.jsx
```

---

## ✅ Resumo do Dia 4

✔️ Criou um serviço `api.js` com `axios.create()`
✔️ Configurou o envio automático do token JWT com `interceptors`
✔️ Aprendeu a usar esse `api` nas rotas protegidas da API

---

## 🔜 Próximo passo:

### 🗓️ Dia 5 – Criar página de listagem de tarefas

Você vai:

* Criar a página `TarefasPage.jsx`
* Usar `api.get('/tarefas')` para buscar as tarefas do usuário logado
* Exibir as tarefas com título e status

---

🎓 **Deseja que eu crie a aula do Dia 5 agora com todos os detalhes?**
