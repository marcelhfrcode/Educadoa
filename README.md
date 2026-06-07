# EducaDoa

Uma plataforma web desenvolvida para aproximar pessoas de causas sociais por meio de uma experiência de doação mais transparente, acessível e humanizada.

O projeto foi criado com o objetivo de reduzir a distância entre doadores e instituições, oferecendo uma interface intuitiva, visualmente acolhedora e focada em transmitir confiança durante toda a jornada do usuário.

---

## 🛠 Painel Administrativo

Além da área pública destinada aos usuários e doadores, a plataforma possui uma área administrativa em desenvolvimento voltada para a gestão interna do sistema.

O painel permite:

- Visualização de métricas da plataforma
- Gerenciamento de ONGs cadastradas
- Controle de categorias
- Administração de conteúdos em destaque
- Centralização de ações administrativas

> Para acessar utilize a rota: https://educadoa.vercel.app/admin

---

## 📖 Sobre o projeto

Muitas pessoas desejam contribuir com causas sociais, mas encontram dificuldades relacionadas à confiança, transparência e clareza das informações disponíveis nas plataformas de doação.

O EducaDoa foi idealizado para enfrentar esse desafio, proporcionando uma experiência simples e acessível, onde usuários podem conhecer organizações, entender seu impacto e acompanhar informações relevantes antes de realizar uma contribuição.

Além da experiência voltada ao público, o projeto também conta com uma área administrativa para gerenciamento de ONGs e categorias, permitindo a evolução da plataforma para um ambiente mais completo e escalável.

---

## ✨ Funcionalidades

### Área Pública

- Landing page responsiva
- Apresentação de ONGs e causas sociais
- Sistema de categorias
- Cards dinâmicos de organizações
- Página de doação
- Dashboard visual de metas e impacto
- Sistema de avaliações
- Navegação entre páginas utilizando React Router
- Interface otimizada para dispositivos móveis
- Microinterações e animações para melhorar a experiência do usuário

### Painel Administrativo

- Dashboard administrativo
- Indicadores de ONGs cadastradas
- Indicadores de ONGs em destaque
- Indicadores de categorias
- Área de gerenciamento integrada ao dashboard
- Cadastro de ONGs
- Gerenciamento de ONGs
- Gerenciamento de categorias
- Interface administrativa responsiva
- Componentização dos módulos de gestão

---

## 🛠 Tecnologias utilizadas

### Frontend

- React
- JavaScript (ES6+)
- Tailwind CSS
- React Router DOM

### Ferramentas

- Vite
- Git
- GitHub
- Figma

---

## 🎨 Design e UX

Todo o projeto foi planejado inicialmente no Figma, com foco em:

- acessibilidade
- usabilidade
- confiança
- clareza visual
- experiência mobile-first

### Tipografia

- DM Sans — textos e leitura
- Potta One — identidade visual e títulos

### Direção visual

- Cores suaves e acolhedoras
- Elementos arredondados
- Contrastes pensados para legibilidade
- Animações discretas
- Layout responsivo

### Conceitos explorados

- Design centrado no usuário
- Construção de confiança digital
- Transparência em processos de doação
- Experiência emocional aplicada à interface

---

## 🏗 Arquitetura do Projeto

A aplicação foi organizada utilizando uma estrutura baseada em componentes reutilizáveis e separação de responsabilidades, facilitando manutenção, escalabilidade e futuras integrações com backend.

```bash
src/
│
├── assets/
│   └── Logos e imagens da aplicação
│
├── components/
│   ├── button.jsx
│   ├── DonateCard.jsx
│   ├── header.jsx
│   ├── headerAdm.jsx
│   ├── headerOngs.jsx
│   └── footer.jsx
│
├── data/
│   ├── feedback.js
│   └── ongs.js
│
├── pages/
│   ├── home/
│   ├── donate/
│   └── admin/
│       └── Dashboard/
│
├── App.jsx
├── main.jsx
└── index.css
```

### Organização adotada

- **assets**: arquivos estáticos, imagens e recursos visuais.
- **components**: componentes reutilizáveis utilizados em diferentes partes da aplicação.
- **data**: dados simulados utilizados durante o desenvolvimento.
- **pages**: páginas da aplicação separadas por domínio de negócio.
- **admin**: área administrativa para gerenciamento interno da plataforma.
- **Dashboard**: módulos administrativos responsáveis por cadastro e gerenciamento de entidades da plataforma.

### Princípios utilizados

- Componentização
- Reutilização de código
- Separação de responsabilidades
- Estrutura modular
- Responsividade
- Escalabilidade para integração futura com API e banco de dados

```

```

### Princípios adotados

- Componentização
- Reutilização de código
- Separação de responsabilidades
- Organização por domínio
- Estrutura preparada para integração com backend

---

## 📱 Responsividade

O projeto foi desenvolvido seguindo uma abordagem responsiva, garantindo boa experiência em:

- Smartphones
- Tablets
- Notebooks
- Monitores desktop

---

## 🚀 Aprendizados

Durante o desenvolvimento deste projeto foram aprofundados conhecimentos em:

- React
- Componentização
- Hooks (`useState`)
- Renderização dinâmica com `.map()`
- Gerenciamento de estados
- React Router
- Responsividade
- Tailwind CSS
- Estruturação de dashboards
- UX/UI Design
- Prototipação no Figma
- Organização de projetos Front-End
- Boas práticas de desenvolvimento

---

## 🔮 Próximas implementações

- Integração com API
- Backend em Node.js
- Banco de dados
- Sistema de autenticação
- Upload de imagens
- CRUD completo de ONGs
- Sistema de doações integrado
- Relatórios administrativos
- Painel de métricas avançadas
- Controle de usuários e permissões

---

## 📷 Preview

### Página Inicial

![Home](./public/Images/ReadmeImgs/ImgReadme.png)

### Dashboard e funcionalidades

![Dashboard](./public/Images/ReadmeImgs/ImgReadme1.png)

![Funcionalidades](./public/Images/ReadmeImgs/ImgReadme2.png)

### Responsividade

![Responsivo](./public/Images/ReadmeImgs/ImgReadme3.png)

---

## 🌐 Deploy

Acesse o projeto:

https://educadoa.vercel.app

---

## 👨‍💻 Autor

Desenvolvido por Marcel Henrique.

Este projeto faz parte do meu processo de aprendizado e evolução como desenvolvedor Full-Stack, explorando boas práticas de desenvolvimento, arquitetura de aplicações React, experiência do usuário e construção de produtos digitais com impacto social.
