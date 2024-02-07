class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        // Criação do shadow DOM
        const shadow = this.attachShadow({mode: "open"});

        // Criação do elemento h1 com o texto do atributo 'titulo'
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = this.getAttribute('titulo');

        // Estilização do componente
        const style = document.createElement('style');
        style.textContent = `
            h1 {
                color: red;
            }
        `;

        // Adição do elemento h1 e do estilo ao shadow DOM
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define("titulo-dinamico", TituloDinamico);
