# 🪙 Nikel - Gerenciador de Finanças Pessoais

> **Status do Projeto:** 🚧 Pronto

O **Nikel** é uma aplicação web *Front-end* desenvolvida para auxiliar no controle financeiro pessoal. O projeto simula um ambiente bancário (Fintech) onde o usuário pode criar uma conta, realizar login e gerenciar suas entradas e saídas financeiras de forma simples e intuitiva.

Este projeto foi desenvolvido como parte de estudos em Engenharia de Software, focando na manipulação do DOM e persistência de dados no navegador. Requisito do programa Veste Tech um programa da Veste S.A em parceria com a Growdev, criado para impulsionar novas carreiras na tecnologia.

---

## 📱 Funcionalidades

- **Autenticação de Usuário:**
  - Sistema de Login com validação de e-mail e senha.
  - Opção de "Permanecer logado" utilizando `sessionStorage`.
- **Cadastro de Contas:**
  - Criação de novas contas com armazenamento local.
- **Dashboard (Home):**
  - Visualização rápida de saldo (simulado).
  - Listagem dinâmica das últimas transações de **Entrada** (Cash-in).
  - Listagem dinâmica das últimas transações de **Saída** (Cash-out).
- **Gestão de Transações:**
  - Modal para adicionar novos lançamentos.
  - Opção de escolher tipo de transação (Entrada ou Saída).
  - Histórico salvo automaticamente.
- **Persistência de Dados:**
  - Uso de `localStorage` para salvar usuários e transações sem necessidade de um Banco de Dados externo.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web padrão, sem frameworks pesados, para fixar os conceitos fundamentais de programação web.

* **HTML5**: Estrutura semântica da página.
* **CSS3**: Estilização customizada.
* **Bootstrap 5**: Framework utilizado para o sistema de grid, componentes (Modais, Forms, Cards) e responsividade.
* **Bootstrap Icons**: Ícones vetoriais para interface.
* **JavaScript (ES6+)**: Lógica da aplicação, manipulação do DOM e controle de fluxo.
* **Git & GitHub**: Versionamento de código.

---

## 📂 Estrutura do Projeto

O projeto é dividido nas seguintes páginas principais:

1.  **`index.html`**: Tela de Login e Cadastro.
2.  **`home.html`**: Tela principal com o resumo das finanças.
3.  **`transactions.html`**: Tela dedicada ao histórico completo (em construção).

A lógica JavaScript é separada para facilitar a manutenção:
- `index.js`: Controla a lógica de login e criação de conta.
- `home.js`: Controla a lógica do dashboard, adição de lançamentos e leitura do LocalStorage.

---

## 🚀 Como rodar o projeto

Como é um projeto estático, você não precisa instalar dependências complexas.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/AgathaKarenne32/Nikel.git](https://github.com/AgathaKarenne32/Nikel.git)
    ```

2.  **Acesse a pasta:**
    ```bash
    cd Nikel/public
    ```
    *(Nota: Verifique se os arquivos html estão na raiz ou dentro da pasta public)*

3.  **Abra o projeto:**
    - Basta clicar duas vezes no arquivo `index.html` para abrir no seu navegador.
    - Ou, se estiver usando o VS Code, use a extensão **Live Server**.

---

## 🧠 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados conceitos importantes:
- Manipulação de Arrays e Objetos em JavaScript (`filter`, `unshift`, `forEach`).
- Uso de JSON para converter dados (`JSON.stringify` e `JSON.parse`).
- Diferença entre `localStorage` (dados persistentes) e `sessionStorage` (dados de sessão).
- Manipulação de eventos de formulário (`submit`, `preventDefault`).
- Integração de interface responsiva com Bootstrap.

---

## 👩‍💻 Autora

Desenvolvido por **Agatha Karenne** 🎓 Graduanda em Engenharia de Software - Universidade Católica de Brasília

---