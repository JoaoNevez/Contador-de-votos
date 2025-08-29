📊 Contador de Votos

Um projeto simples em React + TypeScript + TailwindCSS que permite aos usuários votar em diferentes opções (A, B e C) e visualizar os resultados em tempo real com barras de progresso.

🚀 Tecnologias utilizadas

React

TypeScript

Vite

TailwindCSS

📂 Estrutura do projeto
contador-votos-react/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── src/
    ├── App.tsx
    ├── index.css
    └── main.tsx

Instale as dependências:

npm install


Rode o servidor de desenvolvimento:

npm run dev


Abra no navegador o endereço exibido no terminal (normalmente http://localhost:5173).

🕹️ Como funciona

Clique em "Votar A", "Votar B" ou "Votar C" para registrar seu voto.

O sistema mostra a quantidade de votos e a porcentagem de cada opção.

As barras de progresso aumentam conforme os votos.

O total de votos aparece no rodapé.
