// Criando um elemento para o título
let titulo = document.createElement("h1");

// Manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "sucos Naturais";

// Capturando o "elemento pai" dos elementos 'titulo' e 'produto'
let body = document.querySelector("body");

// Adicionando o elemento 'titulo' no DOM
body.appendChild(titulo);

// ------------------------------------------- //

// Criando um elemento para o produto
let produto = document.createElement("div");

// Manipulando o elemento
produto.innerHTML = `
  <div>
    <h2>Diversos sabores</h2>
   <img src="suco natural.png" alt="sucos">
    <p>Sucos diversos sabores.</p>
    <p id="preco- suco natural">R$ 11.90</p>
  </div>
`;

// Adicionando o elemento no dom
body.appendChild(produto)