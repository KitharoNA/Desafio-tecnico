# Plataforma de Comunicação

## Descrição do Projeto
Neste projeto foi realizado uma Plataforma de Comunicação que permite:
  1. Agendamento de envio de comunicação.
  2. Consulta de status de envio de comunicação.
  3. Cancelamento de envio de comunicação.
  
A plataforma suporta diferentes formatos de envio de comunicação, incluindo E-mail, SMS, PUSH, e WhatsApp.

## Funcionalidades
  - Agendamento de envio de comunicação: O usuário pode agendar um contato, especificando o destinatário, a data/hora de envio, a mensagem e o tipo de comunicação.
  - Consulta de status: O usuário pode consultar o status de uma comunicação agendada através de um ID.
  - Cancelamento de envio: O usuário pode cancelar a comunicação agendada fornecendo o ID da comunicação.

# Tecnologias Utilizadas
  - Node.js: Plataforma JavaScript para o backend.
  - Express.js: Framework web usado para criar as rotas da API.
  - MongoDB: Banco de dados usado para armazenar as comunicações.
  - Mongoose: ODM para interagir com o MongoDB.
  - HTML/CSS/JavaScript: Usados para o frontend básico.
  - Postman: Utilizado para testar as rotas da API.

## Requisitos de Instalação
### Dependências
  - Virtual Studio Code
  - Git
  - Node.js (versão 12+)
  - MongoDB (local ou em um serviço online, como MongoDB Atlas)

## Instalação
Clone o repositório:

```bash
git clone https://github.com/KitharoNA/Desafio-Tecnico.git
cd Desafio-Tecnico
```
Instale as dependências:

```bash
npm init -y
npm install express pg dotenv
```
Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto com as seguintes função:

```bash
MONGODB_URI=mongodb://localhost:27017/desafio
PORT=3000
```
Inicie o servidor:

```bash
npm start
```
