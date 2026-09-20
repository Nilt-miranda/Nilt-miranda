<h1 align="center">👋 Olá, eu sou o Nilton Miranda</h1>

<p align="center">
  Estudante de <b>Engenharia de Computação</b> e desenvolvedor full-stack —
  construindo produtos que vão do <b>banco de dados</b> ao <b>hardware</b>.
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/nilton-pgvmiranda"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
  <a href="mailto:niltonpgvm@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"></a>
  <a href="https://www.instagram.com/nilton_88"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"></a>
</p>

---

## 🚀 Sobre mim

Gosto de pegar um problema real, entender o que ele precisa e transformar isso em código limpo,
performático e que alguém consiga manter depois. Hoje construo **aplicações web completas** —
Next.js e NestJS na frente, Postgres e Prisma atrás — e também projetos na fronteira entre
**software e mundo físico**, com sensores, MQTT e automação.

- 🎓 Cursando **Engenharia de Computação**
- 🔭 Desenvolvendo sistemas de pedidos, e-commerce e apps mobile 
- 🌱 Estudando **IA**, **DevOps com Docker/Terraform** e **sistemas embarcados (ESP32/IoT)**
- 🧩 Movido por desafios técnicos e aprendizado contínuo

---

## 🏢 Experiência

### 💻 SaltCode — Desenvolvedor Júnior
`out/2025 — atual` · Tempo integral

Desenvolvimento e implementação de funcionalidades, criação de APIs para a comunicação entre
front-end e banco de dados, correção de bugs e operações em banco. Trabalho diário com Git,
Docker e boas práticas de código.

`Node.js` `Python` `API REST` `SQL` `Docker` `Git`

### 🏭 Anjos IT — Desenvolvedor ABAP · Estágio
`mai/2023 — out/2023`

Desenvolvimento e suporte em programas **ABAP**, construção de relatórios, ajustes em sistemas
**SAP** e resolução de chamados técnicos para clientes internos.

`ABAP` `SAP` `SQL`

---

## 🎓 Formação

**Bacharelado em Engenharia da Computação** — FIAP · `2023 — 2027`
Foco em desenvolvimento de software, infraestrutura e sistemas.

---

## 🛠️ Tecnologias

<p>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/React_Native-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React Native">
  <img src="https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white" alt="Expo">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white" alt="NestJS">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <br>
  <img src="https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white" alt="Java">
  <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white" alt="Spring Boot">
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white" alt="Django">
  <br>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/Terraform-844FBA?style=flat-square&logo=terraform&logoColor=white" alt="Terraform">
  <img src="https://img.shields.io/badge/ESP32-E7352C?style=flat-square&logo=espressif&logoColor=white" alt="ESP32">
  <img src="https://img.shields.io/badge/MQTT-660066?style=flat-square&logo=mqtt&logoColor=white" alt="MQTT">
</p>

---

## 💼 Projetos profissionais

### 🍽️ Sistema de Pedidos para Restaurante
PWA onde o cliente escaneia o **QR Code da mesa**, navega no cardápio e pede pelo celular —
sem app, sem garçom no meio do caminho.

- **App do cliente** em Next.js: cardápio por categoria, carrinho e acompanhamento do pedido
- **API modular em NestJS**: autenticação, mesas, produtos, cardápio, pedidos, lotes,
  usuários, upload de imagens e envio de e-mail
- **Painel administrativo** completo: dashboard, gestão de cardápio, produtos, mesas,
  pedidos, usuários e recuperação de senha
- **Agente de impressão local**: como o servidor na nuvem não alcança as impressoras do
  restaurante, escrevi um agente em Node que roda no PC do balcão, busca os lotes pendentes
  e imprime — **Elgin i7 Plus** na cozinha (TCP 9100) e **Epson TM-T20** no bar (fila Windows RAW)
- **Infraestrutura como código** na AWS: Terraform provisionando **k3s** numa EC2, RDS
  PostgreSQL, ECR, S3, SSM Parameter Store e deploy autenticado por **GitHub OIDC** —
  arquitetura desenhada para caber no free tier em vez dos ~$120/mês de um EKS + ALB + NAT

`Next.js 16` `NestJS` `TypeScript` `PostgreSQL` `Prisma` `Zustand` `Docker` `Terraform` `Kubernetes (k3s)` `AWS`

### 👕 Capitano FC — E-commerce de camisas de futebol
Loja completa no modelo **dropshipping**, do catálogo ao pós-venda.

- Catálogo por categoria, busca, página de produto com avaliações e **carrinho persistente**
- **Checkout** com busca de endereço por CEP (ViaCEP), cálculo de frete e preço
  **validado no servidor** (o cliente não define o valor que vai pagar)
- **Pagamento via Mercado Pago** (Checkout Pro) com **webhook** que atualiza o status do
  pedido automaticamente — e modo simulado para testar o fluxo inteiro sem cobrar
- **Autenticação própria** (JWT + bcrypt) e rotas protegidas por middleware
- **Painel admin**: faturamento, CRUD de produtos e gestão de pedidos com código de rastreio
- **Rastreamento público** por código + e-mail, com link direto para os Correios

`Next.js 16` `TypeScript` `Tailwind CSS v4` `Prisma` `Mercado Pago` `JWT`

---

## 🧪 Projetos pessoais e acadêmicos

### 🏭 [Challenge FESTO / FIAP](https://github.com/Nilt-miranda/challegerfesto)
**Digital Twin** de um sistema pneumático: o **ESP32** lê sensores de pressão, temperatura e fluxo
e publica via **MQTT**; um back-end **Node.js + Express** processa e grava no **MongoDB Atlas**,
e o dashboard exibe tudo em tempo real com **Chart.js**.

`ESP32` `MQTT` `Node.js` `MongoDB` `Chart.js` `Docker`

### 🐾 [Dra. Isabelle Sudario — Neurologia Pet](https://www.neurologiapet.com)
Site institucional de uma neurologista veterinária, publicado em domínio próprio.
Página única, com integração de WhatsApp e agendamento.

`HTML5` `CSS3` `JavaScript` `GitHub Pages`

### 💰 FinTrack — Controle financeiro pessoal
App de finanças para **múltiplas contas**, sem depender de Open Finance.

- Saldo em modelo de **ledger**, que se ajusta a cada transação lançada
- Importação opcional de extratos **OFX/CSV**
- API em Django REST Framework com autenticação **JWT** e dashboard com gráficos
- Sobe inteiro com um `docker compose up`, incluindo seed de dados de exemplo idempotente

`Django` `Django REST Framework` `Nuxt 3` `Vue 3` `PostgreSQL` `Docker`

### 💻 [Portfólio pessoal](https://github.com/Nilt-miranda/niltondev)
Site de portfólio em **React + Vite**, com tema customizável.

`React` `Vite`

---

## 📊 GitHub

<p align="center">
  <img height="165" src="https://github-readme-stats.vercel.app/api?username=Nilt-miranda&show_icons=true&hide_border=true&theme=default" alt="Estatísticas do GitHub de Nilton Miranda">
  <img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Nilt-miranda&layout=compact&hide_border=true&theme=default" alt="Linguagens mais usadas">
</p>

---

## 📫 Vamos conversar?

- ✉️ **Email:** [niltonpgvm@gmail.com](mailto:niltonpgvm@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/nilton-pgvmiranda](https://www.linkedin.com/in/nilton-pgvmiranda)
- 🤳 **Instagram:** [@nilton_88](https://www.instagram.com/nilton_88)

---

<p align="center">
  <i>“A melhor forma de prever o futuro é criá-lo.” — Alan Kay</i>
</p>
