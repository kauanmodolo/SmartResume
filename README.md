# **Documentação do Projeto: Smart Resume **

## **Introdução**
O **Smart Resume** é uma plataforma de criação de currículos que permite criar, gerenciar e gerar currículos com inteligência artificial, oferecendo diversas funcionalidades de customização e praticidade, visando tornar a experiência de fazer o seu currículo profissional muito mais rápida e agradável.

--- 

## **Link para acessar o sistema**
[https://smart-resume-zeta.vercel.app]

## **Descrição dos Módulos e Funcionalidades**

### **1. Módulo Principal: Plataforma Smart Resume**

Responsável pela navegação principal, autenticação e gerenciamento de currículos. Garante uma experiência fluida e centraliza as principais rotas do sistema.

Telas/rotas disponíveis:

- **Login:** Tela de autenticação via Google ou GitHub.
- **Dashboard:** Área principal para visualizar, criar e editar currículos.
- **Editor de Currículo:** Interface para edição detalhada das informações do currículo.
- **Geração com I.A.:** Tela para gerar currículo automaticamente a partir de uma vaga.
- **Download:** Opção para exportar o currículo em PDF com rotas abrindo browsers de forma automatizada e utilizando HTML com Puppeteer.

---

### **2. Funcionalidades Principais**

#### **Autenticação Social**

* Permite login seguro utilizando Google e GitHub.


#### **Criação e Edição de Currículos**

* Criação de múltiplos currículos.
* Edição dinâmica de experiências, formação, habilidades e outros campos essenciais.


#### **Geração de Currículo com Inteligência Artificial**

* Geração automática de currículos personalizados a partir de uma vaga de interesse, utilizando IA.
* Tradução do currículo para outras línguas utilizando IA.


#### **Download em PDF**

* Geração de arquivos PDF profissionais prontos para envio ou impressão.


#### **Customização Visual**

* Diversos modelos de layout e opções de personalização para o currículo.

---

### **3. Integração com Banco de Dados e APIs**

* **Drizzle ORM + Neon:** Gerencia dados de usuários e currículos em banco PostgreSQL serverless.
* **OpenAI API:** Utilizada para geração e tradução automática de conteúdo via IA.
* **Auth.js:** Gerencia autenticação social e sessões de usuário.
* **Puppeteer:** Responsável pela geração do PDF do currículo.

---

### **4. Tecnologias Utilizadas**

* **Next.js:** Framework React para frontend e backend.
* **TypeScript:** Tipagem estática para maior segurança.
* **Tailwind CSS:** Estilização moderna e responsiva.
* **Node.js:** Backend para manipulação de dados e geração de PDFs.
* **Shadcn/ui:** Componentes reutilizáveis para uma UI consistente.
* **Vercel:** Deploy, hospedagem e CI/CD automáticos.
* **TanStack Query** Gerenciamento de estados assíncronos e sincronização de dados.
* **React Hook Form** Ferramenta para gerenciar formulários com facilidade.
---

## **Funcionalidades**

1. **Autenticação de Usuário:** Login social com Google e GitHub.
2. **Criação e Edição de Currículos:** Múltiplos currículos personalizáveis.
3. **Geração Automática com I.A.:** Currículo sugerido a partir de uma vaga.
4. **Tradução:** Tradução automática do currículo para outros idiomas.
5. **Download em PDF:** Exportação do currículo em formato PDF.
6. **Customização Visual:** Escolha de modelos e personalização dos campos.

--- 
# **Project Documentation: Smart Resume**

## **Introduction**

**Smart Resume** is a resume-building platform that allows users to create, manage, and generate resumes using artificial intelligence. It offers a variety of customization and convenience features, aiming to make the process of building a professional resume much faster and more enjoyable.

---

## **System Access Link**

[https://smart-resume-zeta.vercel.app](https://smart-resume-zeta.vercel.app)

---

## **Module and Feature Description**

### **1. Main Module: Smart Resume Platform**

Responsible for main navigation, authentication, and resume management. Ensures a smooth user experience and centralizes the system's main routes.

Available screens/routes:

- **Login:** Authentication screen via Google or GitHub.
- **Dashboard:** Main area to view, create, and edit resumes.
- **Resume Editor:** Interface for detailed editing of resume information.
- **AI Generation:** Screen to automatically generate a resume based on a job description.
- **Download:** Option to export the resume as a PDF, using automated browser rendering with HTML and Puppeteer.

---

### **2. Main Features**

#### **Social Authentication**

* Secure login using Google and GitHub.


#### **Resume Creation and Editing**

* Create multiple resumes.
* Dynamically edit experiences, education, skills, and other essential fields.


#### **AI-Powered Resume Generation**

* Automatically generate personalized resumes based on a given job description, using AI.
* Translate resumes into other languages using AI.


#### **PDF Download**

* Generate professional PDF files ready for sending or printing.


#### **Visual Customization**

* Multiple layout templates and customization options for resumes.

---

### **3. Database and API Integration**

* **Drizzle ORM + Neon:** Manages user and resume data in a serverless PostgreSQL database.
* **OpenAI API:** Used for AI-powered content generation and automatic translation.
* **Auth.js:** Manages social authentication and user sessions.
* **Puppeteer:** Responsible for generating the resume PDF.

---

### **4. Technologies Used**

* **Next.js:** React framework for frontend and backend.
* **TypeScript:** Static typing for greater safety.
* **Tailwind CSS:** Modern and responsive styling.
* **Node.js:** Backend for data manipulation and PDF generation.
* **Shadcn/ui:** Reusable components for a consistent UI.
* **Vercel:** Automated deployment, hosting, and CI/CD.
* **TanStack Query:** Asynchronous state management and data synchronization.
* **React Hook Form:** Tool for easy form management.

---

## **Features**

1. **User Authentication:** Social login with Google and GitHub.
2. **Resume Creation and Editing:** Multiple customizable resumes.
3. **AI-Powered Generation:** Resume suggestions based on job descriptions.
4. **Translation:** Automatic translation of resumes into other languages.
5. **PDF Download:** Export resumes in PDF format.
6. **Visual Customization:** Choice of templates and field customization.
