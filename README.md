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

---

Como você já finalizou a **API de Tarefas com NestJS**, agora é o momento ideal para aprender a **consumir essa API** — ou seja, criar um **frontend** que se comunique com ela.

---

### 🧭 Objetivo do Plano

Construir um **cliente frontend** simples (web ou mobile) que consuma sua API de Tarefas, com funcionalidades como login, registro, listagem de tarefas, criação, edição e exclusão, utilizando o **token JWT** para autenticação.

Você pode implementar o frontend com:

* **React.js (web)** – Recomendado se quiser rodar no navegador.
* **React Native / Expo (mobile)** – Para criar um app nativo ou híbrido.
* **Postman / Insomnia** – Para começar testando com ferramentas manuais.

---

# 🗂️ Plano de Aulas – Consumindo API de Tarefas

---

## 📘 Semana 1: Base com React.js + Comunicação com a API

#### 🗓️ Dia 1 – Criando o projeto React + estrutura base

* Instalar Node, npm, e criar o projeto com `create-react-app`.
* Organizar as pastas: `/components`, `/services`, `/pages`.
* Instalar axios e react-router-dom.
* Criar rotas para Login, Registro, Listar tarefas e Criar tarefa.

🛠️ **Comandos úteis**:

```bash
npx create-react-app frontend-tarefas
cd frontend-tarefas
npm install axios react-router-dom
```

---

#### 🗓️ Dia 2 – Criar página de Registro e fazer POST /usuarios/registrar

* Criar formulário de registro.
* Fazer requisição `POST /usuarios/registrar` com axios.
* Exibir mensagens de sucesso ou erro.

---

#### 🗓️ Dia 3 – Criar página de Login e salvar o token JWT

* Criar formulário de login (POST /auth/login).
* Ao fazer login com sucesso, armazenar o token no localStorage.
* Redirecionar para página de tarefas.

---

#### 🗓️ Dia 4 – Criar serviço Axios com autenticação

* Criar `axiosInstance.js` que injeta o token automaticamente.

```ts
// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
```

---

#### 🗓️ Dia 5 – Listar tarefas do usuário logado

* Criar página `/tarefas`
* Fazer GET `/tarefas` com token.
* Mostrar tarefas em uma lista com título, status e botão de excluir.

---

## 📘 Semana 2: CRUD completo de tarefas + filtros

---

#### 🗓️ Dia 6 – Criar tarefa (POST /tarefas)

* Formulário para adicionar nova tarefa (título e descrição).
* Redirecionar para lista após criação.

---

#### 🗓️ Dia 7 – Excluir tarefa (DELETE /tarefas/\:id)

* Adicionar botão de excluir.
* Atualizar a lista após exclusão.

---

#### 🗓️ Dia 8 – Atualizar status (PATCH /tarefas/\:id/status)

* Adicionar botão ou select para trocar status (ABERTA, EM\_ANDAMENTO, CONCLUIDA).
* Atualizar no backend e recarregar lista.

---

#### 🗓️ Dia 9 – Filtro por status e busca

* Adicionar barra de busca e filtro por status.
* Fazer GET `/tarefas?status=ABERTA&busca=texto`

---

#### 🗓️ Dia 10 – Logout e controle de rotas protegidas

* Criar botão de logout (remove o token do localStorage).
* Proteger rotas (verifica se tem token antes de permitir acesso às páginas).

---

## 🧪 Extras (opcionais)

* 🔐 Refresh Token (se quiser aumentar a segurança).
* 🎨 Estilização com TailwindCSS, Bootstrap ou CSS puro.
* 📱 Fazer versão em **React Native** usando Expo.

---

## 🎓 Resultado Final

Ao final, você terá uma aplicação React (ou mobile) onde o usuário pode:

* Registrar-se e logar
* Ver apenas suas tarefas
* Criar, editar, excluir e filtrar tarefas
* Acessar a API com segurança usando JWT

---

Se quiser, posso te ajudar a começar com o **Dia 1**: criação do projeto React com estrutura base e rotas. Quer seguir por esse caminho?


---

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

Perfeito! Vamos criar **o Dia 5 da sua aula**, com **todos os detalhes** para você que está começando agora.

---

# 🗓️ Dia 5 – Listar tarefas do usuário logado

## 🎯 Objetivo:

* Criar uma página chamada `/tarefas`
* Fazer uma requisição **GET /tarefas** com o token salvo no login
* Mostrar as tarefas do usuário logado (título, status)
* Adicionar um botão para excluir cada tarefa

---

## ✅ 1. Crie o arquivo da página

📁 Crie um novo arquivo:

```bash
src/pages/TarefasPage.jsx
```

---

## ✅ 2. Escreva o código da página

```jsx
// src/pages/TarefasPage.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function TarefasPage() {
  const [tarefas, setTarefas] = useState([]);
  const navigate = useNavigate();

  // 🔁 Carrega as tarefas quando a página é aberta
  useEffect(() => {
    async function carregarTarefas() {
      try {
        const resposta = await api.get('/tarefas'); // token já é enviado via interceptor
        setTarefas(resposta.data);
      } catch (error) {
        alert('Erro ao buscar tarefas. Verifique seu login.');
        navigate('/login');
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
      alert('Erro ao excluir tarefa.');
    }
  }

  return (
    <div>
      <h2>Minhas Tarefas</h2>
      {tarefas.length === 0 && <p>Nenhuma tarefa encontrada.</p>}
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <strong>{tarefa.titulo}</strong> - {tarefa.status}
            <button onClick={() => excluirTarefa(tarefa.id)} style={{ marginLeft: '10px' }}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## ✅ 3. Adicione a rota no `App.js`

Se ainda não tiver, abra o arquivo:

```jsx
// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TarefasPage from './pages/TarefasPage';
import NovaTarefaPage from './pages/NovaTarefaPage'; // se tiver
import LoginPage from './pages/LoginPage'; // se tiver
import RegistroPage from './pages/RegistroPage'; // se tiver

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registrar" element={<RegistroPage />} />
        <Route path="/tarefas" element={<TarefasPage />} />
        <Route path="/nova-tarefa" element={<NovaTarefaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

## ✅ 4. Verifique o token com `api.js`

⚠️ **Esse passo é essencial!** Certifique-se de que `services/api.js` está configurado assim:

```js
// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

---

## ✅ 5. Teste no navegador

1. Acesse `/login`, entre com seu usuário.
2. Você será redirecionado para `/tarefas`.
3. Se tudo estiver correto, verá suas tarefas listadas.
4. Teste o botão **Excluir**, ele deve remover a tarefa da API e da tela.

---

## 🧠 O que você aprendeu hoje?

✔️ Como listar tarefas do usuário autenticado
✔️ Como proteger a requisição com o token
✔️ Como excluir uma tarefa pelo botão
✔️ Como manipular estado com `useState` e `useEffect`

---

## 💡 Próximo passo sugerido:

**🗓️ Dia 6 – Criar formulário de nova tarefa (POST /tarefas)**
Quer que eu crie o conteúdo detalhado do Dia 6 agora?

---

# 📘 Semana 2: CRUD completo de tarefas + filtros

Ótimo! Vamos dar continuidade ao projeto criando a funcionalidade de **cadastrar novas tarefas** usando o **formulário** e a **requisição POST /tarefas** da sua API.

---

# 🗓️ Dia 6 – Criar Tarefa (`POST /tarefas`)

### 🎯 Objetivo:

* Criar um formulário com `título` e `descrição`.
* Enviar os dados para a API.
* Redirecionar o usuário para a lista de tarefas após o cadastro.

---

## 📁 Estrutura esperada:

Você deve ter algo como:

```
/src
  /pages
    - Login.js
    - Registro.js
    - Tarefas.js
    ✅ NovaTarefa.js  ← criamos aqui
```

---

## ✅ Passo 1 – Criar arquivo `NovaTarefa.jsx`

Crie a página em `/src/pages/NovaTarefa.jsx`:

```jsx
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
```

---

## ✅ Passo 2 – Adicionar essa rota no `App.js`

No arquivo `src/App.js`:

```jsx
import NovaTarefa from './pages/NovaTarefa';

// ...
<Route path="/nova-tarefa" element={<NovaTarefa />} />
```

---

## ✅ Passo 3 – Adicionar botão de “Nova Tarefa” na listagem

No final do arquivo `Tarefas.js`, adicione:

```jsx
import { Link } from 'react-router-dom';

<Link to="/nova-tarefa">
  <button style={{ marginTop: '20px' }}>Nova Tarefa</button>
</Link>
```

---

## ✅ Teste

1. Faça login normalmente.
2. Vá até `/nova-tarefa` (ou clique no botão "Nova Tarefa").
3. Preencha o formulário e clique em **Criar**.
4. Você será redirecionado para `/tarefas` e a nova tarefa deve aparecer lá.

---

## 🧠 O que você aprendeu hoje:

* Como criar um formulário em React.
* Como usar o `useNavigate()` para redirecionar.
* Como fazer uma requisição `POST` com **axios** para a API.
* Como proteger rotas usando `Bearer Token` com o `axiosInstance`.

---

Claro! Vamos construir o **Dia 7** da sua jornada com **React.js + API NestJS**, focando em **excluir tarefas**.

---

# 🗓️ **Dia 7 – Excluir tarefa (DELETE /tarefas/\:id)**

## 🎯 **Objetivo da aula**

* Adicionar um botão "Excluir" ao lado de cada tarefa.
* Quando clicado, a tarefa será removida do banco de dados via requisição DELETE.
* A lista será atualizada automaticamente após a exclusão.

---

## 📁 1. Arquivo que vamos editar:

* `src/pages/TarefasPage.jsx` (ou `Tarefas.jsx`, conforme sua organização)
* Esse é o componente que lista as tarefas.

---

## ✅ 2. Antes de começar

Verifique se a listagem já está funcionando e se você já tem o `token` armazenado no `localStorage` e o `axios` configurado em `services/api.js`.

---

## 🧠 3. O que é DELETE /tarefas/\:id?

Na API do NestJS, temos essa rota configurada para deletar tarefas:

```bash
DELETE http://localhost:3000/tarefas/:id
```

Precisamos mandar uma requisição DELETE passando o `id` da tarefa no final da URL.

---

## ✍️ 4. Editando `TarefasPage.jsx`

Vamos adicionar a função `excluirTarefa` dentro do componente:

```jsx
// src/pages/TarefasPage.jsx
import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";

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
      const confirmar = window.confirm("Deseja realmente excluir esta tarefa?");
      if (!confirmar) return;

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
                     <span>Status: {tarefa.status}</span>

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
```

---

## 💡 Explicação:

* `excluirTarefa(id)`: chama a API DELETE com o id da tarefa.
* `window.confirm(...)`: pergunta ao usuário se ele realmente quer excluir.
* `carregarTarefas()`: recarrega a lista após excluir.

---

## 🧪 5. Teste no Navegador

1. Vá para a página `/tarefas`.
2. Clique no botão "Excluir" ao lado de alguma tarefa.
3. Veja se ela **some da lista**.
4. Atualize a página. A tarefa **não deve voltar** (foi excluída do banco de dados).

---

## 📝 Desafio Extra (opcional para treino):

Adicione um **ícone de lixeira** no botão de excluir usando um emoji ou biblioteca como `react-icons`:

```bash
npm install react-icons
```

E no botão:

```jsx
import { FaTrash } from 'react-icons/fa';

<button onClick={() => excluirTarefa(tarefa.id)}>
  <FaTrash /> Excluir
</button>
```

---

## ✅ Resumo da Aula:

* Aprendeu a usar o método `DELETE` da API com `axios`.
* Conectou o botão de excluir à função `excluirTarefa`.
* Atualizou a lista após exclusão com `setTarefas`.

---

## 👉 Próximo passo:

**Dia 8 – Atualizar status da tarefa (PATCH /tarefas/\:id/status)**

> Deseja que eu já prepare a aula do Dia 8 agora?

---

# **🗓️ Dia 8 – Atualizar status (PATCH /tarefas/\:id/status)**

---

## 🎯 **Objetivo da Aula**

Aprender a:

* Mostrar um botão ou um campo `select` com os status possíveis.
* Enviar uma requisição `PATCH` para atualizar o status da tarefa no backend.
* Atualizar a lista após a mudança.

---

## 📘 **Pré-requisitos**

* A API `/tarefas/:id/status` já está pronta no backend (com autenticação JWT).
* Você já está exibindo a lista de tarefas no `TarefasPage.jsx`.

---

## ✅ 1. Adicionar um `<select>` com os status em cada tarefa

Vamos abrir seu arquivo `TarefasPage.jsx` e **modificar o `map` que exibe cada tarefa**.

### 🔁 Antes:

```jsx
<span>Status: {tarefa.status}</span>
```

### ✅ Depois:

Substitua esse trecho por:

```jsx
<label>
  Status:
  <select
    value={tarefa.status}
    onChange={(e) => atualizarStatus(tarefa.id, e.target.value)}
  >
    <option value="ABERTA">Aberta</option>
    <option value="EM_ANDAMENTO">Em andamento</option>
    <option value="CONCLUIDA">Concluída</option>
  </select>
</label>
```

---

## ✅ 2. Criar a função `atualizarStatus`

**Logo abaixo da função `excluirTarefa`, crie:**

```jsx
async function atualizarStatus(id, novoStatus) {
  try {
    await api.patch(`/tarefas/${id}/status`, {
      status: novoStatus,
    });

    // Atualiza a lista de tarefas localmente
    setTarefas((tarefas) =>
      tarefas.map((t) =>
        t.id === id ? { ...t, status: novoStatus } : t
      )
    );
  } catch (error) {
    alert('Erro ao atualizar status da tarefa');
  }
}
```

---

## ✅ 3. Código completo atualizado do `TarefasPage.jsx`

```jsx
// src/pages/TarefasPage.jsx
import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";

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
         <h2>Minhas Tarefas</h2>

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
```

---

## ✅ Testar

1. Faça login normalmente.
2. Vá para `/tarefas`.
3. Altere o status de alguma tarefa.
4. Atualize a página e verifique se continua com o novo status.

---

## 🧠 Dica de aprendizado

* `PATCH` é usado para **atualizar parcialmente** uma informação (neste caso, só o `status`).
* O `select` atualiza o status da tarefa **imediatamente**, sem precisar novo botão.

---

# **🗓️ Dia 9 – Filtro por status e busca**

---

## 🎯 Objetivo da aula

Criar uma barra de **busca** e um **filtro por status** na página de tarefas para filtrar os resultados de acordo com o que o usuário digitar.

---

## 📚 O que você vai aprender

* Usar **query params** com Axios (`/tarefas?status=ABERTA&busca=react`)
* Criar inputs controlados em React
* Atualizar a lista de tarefas com base nos filtros

---

## 🛠️ Pré-requisitos

* Sua API já aceita `/tarefas?status=...&busca=...`
* O token JWT já está sendo enviado via interceptor
* Sua página de tarefas já lista as tarefas corretamente (`TarefasPage.jsx`)

---

## 🧱 Passo a passo da implementação

### 1. ✏️ Atualize a página `TarefasPage.jsx`

Vamos adicionar **dois filtros**:

* Um campo de texto para buscar por título ou descrição.
* Um `select` para filtrar por status.

### 🧩 Código completo atualizado

```jsx
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
```

---

## 🧪 Testando no navegador

1. Vá para `/tarefas`
2. Digite uma palavra no campo de busca (ex: `estudar`)
3. Ou escolha um status (ex: `CONCLUIDA`)
4. Veja os resultados atualizarem automaticamente

---

## 🧼 Dicas para o futuro

* Você pode colocar um botão "Limpar Filtros" que reseta `status` e `busca`.
* Pode aplicar **debounce** na busca para não disparar a cada tecla (isso é opcional).

---

## ✅ Conclusão

Agora você sabe:

* Filtrar usando **query params**
* Atualizar dados de forma dinâmica com React + Axios
* Usar `useEffect` com dependências para reagir a mudanças de estado

---

# 🗓️ **Dia 10 – Logout e controle de rotas protegidas**

---

## 🎯 **Objetivo da aula**

1. Criar um botão de **Logout** que apaga o token do navegador.
2. **Proteger páginas** que só podem ser acessadas com o usuário logado.

---

## 🧱 **Antes de começar**

Você já tem:

* O token JWT salvo no `localStorage` após o login.
* Um roteador (`react-router-dom`) com páginas como `/login`, `/tarefas`, `/nova-tarefa`, etc.

---

## 📌 **1. Criando o botão de Logout**

O botão pode ser adicionado no topo da sua página de tarefas (`TarefasPage.jsx`), ou em um componente de layout que esteja sempre visível.

### ✅ Exemplo de código:

```jsx
// No topo do componente TarefasPage ou outro lugar visível
<button
  onClick={() => {
    localStorage.removeItem('token'); // Remove o token
    window.location.href = '/login'; // Redireciona para o login
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
    cursor: "pointer"
  }}
>
  Logout
</button>
```

---

## 📌 **2. Criando proteção de rotas**

Agora vamos proteger as rotas para que **apenas usuários logados** acessem páginas como:

* `/tarefas`
* `/nova-tarefa`
* `/editar-tarefa/:id`

Para isso, vamos criar um **componente de rota protegida**.

---

### ✅ Crie um novo arquivo:

```bash
src/components/PrivateRoute.jsx
```

### 🧩 Código do `PrivateRoute.jsx`:

```jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
```

---

## 📌 **3. Usando o `PrivateRoute` nas rotas**

Agora abra o seu arquivo de rotas, provavelmente `App.js` ou `Routes.jsx`, e use o componente `PrivateRoute` nas rotas que precisam de proteção.

### 🧩 Exemplo de como fica o App.js:

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegistroPage from './pages/RegistroPage';
import TarefasPage from './pages/TarefasPage';
import NovaTarefaPage from './pages/NovaTarefaPage';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegistroPage />} />

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
    </Router>
  );
}
```

---

## ✅ **Resultado Esperado**

* Se o usuário **estiver logado**, ele acessa as rotas normalmente.
* Se **não estiver logado**, ele é **redirecionado para `/login`**.
* O botão de Logout **remove o token e volta para o login**.

---

## 🧪 Teste agora!

1. Acesse `/tarefas` com login → ✅ acesso permitido
2. Clique no botão Logout → ❌ acesso negado, volta para login
3. Tente acessar `/tarefas` diretamente sem login → ❌ bloqueado

---

## 🧼 Dica de ouro

Você também pode proteger chamadas com Axios já que está usando o `api.js` com interceptor — e já fizemos isso no Dia 4.

---

## 🧠 O que você aprendeu

* Como **remover o token** e fazer logout
* Como **impedir acesso a páginas protegidas**
* Como usar **React Router com navegação condicional**

---

🎓 **Próxima aula – Dia 11: Editar tarefa (PATCH /tarefas/\:id)**
Quer que eu prepare o Dia 11 com a página de edição e formulário de atualização?


