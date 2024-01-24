<h1 align="center" style="text-align: center;">
  <img alt="Logo do Food Explorer" src="./src/assets/icon-foodExplorer.svg" style="vertical-align: text-top; margin-right: 10px; width:2.5rem;">
  Food Explorer
</h1>
<p align="center"> 
API desenvolvivida para compor o backend do desafio final do curso Explorer - Desenvolvimento FullStack da Rocketseat. 
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-frontend">Frontend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-estrutura">Estrutura</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-ferramentas">Ferramentas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-autora">Autora</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contato">Contato</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## 📁 Projeto

Projeto realizado como parte do desafio final do curso Explorer da [@Rockeseat](https://www.rocketseat.com.br/). <br>
A proposta é o desenvolvimento de uma aplicação de ponta a ponta com front-end e back-end simulando um restaurante fictício e seu cardápio digital. <br>
Esse projeto será revisado pelos instrutores da instituição afim de avaliar os conhecimentos adquiridos bem como suas utilizações no desenvolvimento dessa aplicação. Servindo assim como um trabalho de conclusão necessário para a avaliação e certificação do curso de Desenvolvedor FullStack.
Este é o back-end da aplicação que lida com a lógica e o armazenamento dos dados desse restaurante fictício.

## 🎨 Frontend

Essa api será consumida pelo frontend da aplicação que está disponível no seguinte repositório: [Repositório Frontend](https://github.com/ThalytaRangel/foodexplorer)

#### 🚀 Deploy Frontend

Para acessar a interface do usuário, basta acesssar [aqui](https://.netlify.app).
Você pode utilizar os perfis de usuários mencionados na sessão Perfis do README do repositório Frontend ou criar seu próprio login de acesso.

## Estrutura

O projeto conta com as seguintes tabelas:

- Usuários
- Pratos
- Ingredientes dos pratos
- Favoritos

  <img src="https://i.ibb.co/wQQg4xQ/Captura-de-tela-2023-12-01-174531.png" alt="Imagem do Banco de Dados">

## 🛠️ Funcionalidades

- Login
- Cadastro de usuários
- Mostrar cards com os pratos cadastrados
- Pesquisa dos pratos por nome e ingredientes
- Página com detalhes do prato
- Adicionar pratos aos favoritos
- Página com pratos favoritados pelo usuário
- Página de cadastro de novos pratos para usuários administradores
- Possibilidade de editar informações do prato pelo administrador
- Excluir prato nas rotas de administrador
- Logout

## 🦾 Tecnologias

- Node.js
- Knex.js
- CORS
- SQLite
- SQLite3
- Dotenv
- Express.js
- express-async-errors
- JSON Web Token
- Multer
- PM2

## 🛠️ Instalação

Para acessar a hospedagem do backend basta conferir o link a seguir: https://.onrender.com. <br>

⚠️ É importante ressaltar que o backend está hospedado em um serviço gratuito e portanto, pode ocorrer lentidão ao realizar o acesso.

<strong>🚧 Pré-requisitos </strong> <br>

- `Node.js`
- `npm`

Para executar a aplicação localmente basta seguir os seguintes passos:

1. 📥 Clone o projeto:

```bash
git clone https://github.com/ThalytaRangel/foodexplorer-api.git
```

2. 📂 Acesse a pasta do projeto:

```bash
$ cd foodexplorer-api
```

3. 📦 Instale as dependências:

```
$ npm install
```

4. Execute as migrações:

```
$ npm run migrate
```

5. Inicie o servidor:

```
$ npm start
```

6. Crie um arquivo .env de acordo com o arquivo .env.example
   - Preencha os campos AUTH_SECRET e PORT com suas respectivas informações.
   - Para criar o campo AUTH_SECRET, você pode utilizar o MD5 Hash Generator.
   - Preencha o campo PORT com o número da porta desejada para executar o servidor da aplicação.

## 🔨 Ferramentas

- `Insomnia` - Utilizado no inicio do projeto para simular as requisições do frontend.
- `Beekeeper` - Utilizado para acessar as informações do banco de dados antes da hospedagem na nuvem e conexão com o frontend.

## 📝 Licença

Este projeto está sob a licença MIT.

---

## 👩‍💻 Autora

  <a href="https://github.com/ThalytaRangel" >
    <img alt="GitHub" src="https://img.shields.io/badge/Thalyta Rangel-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" style="vertical-align: text-top; margin-right: 10px;"/> 
  </a>

## ☎️ Contato

<div style="display: flex;">
  <a href="https://www.linkedin.com/in/thalytarangel/" target="_blank">
  <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" style="margin-right: 2vw" target="_blank"></a>
  <a href="mailto:thalyta_ornelas@hotmail.com">
  <img  alt="Outlook" src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" style="margin-right: 2vw" target="_blank"/>
  </a> 
  <a href="https://discord.com/users/thalytarangel" target="_blank">
  <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" style="margin-right: 2vw" target="_blank"></a>
</div>
