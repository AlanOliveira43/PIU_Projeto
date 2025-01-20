document.addEventListener('DOMContentLoaded', () => {
  const productGrid = document.getElementById('product-grid');
  const productInputForm = document.getElementById('product-input-form');

  // Lista inicial de produtos
  const products = [
      { name: 'Desinfetante', description: '5 Litros', quantity: 5 },
      { name: 'Detergente neutro', description: '1 Litro', quantity: 1 },
      { name: 'Sabão em pó', description: '20 Pacotes', quantity: 20 },
      { name: 'Álcool 70%', description: '1 Litro', quantity: 1 },
      { name: 'Luvas descartáveis', description: '100 Unidades', quantity: 100 },
      { name: 'Máscaras', description: '200 Unidades', quantity: 200 },
      { name: 'Papel toalha', description: '30 Pacotes', quantity: 30 },
      { name: 'Esponjas de limpeza', description: '20 Unidades', quantity: 20 },
      { name: 'Sacos de lixo', description: '50 Unidades', quantity: 50 },
      { name: 'Vassouras', description: '10 Unidades', quantity: 10 },
      { name: 'Rodinhos de pia', description: '15 Unidades', quantity: 15 },
      { name: 'Sabonetes líquidos', description: '500 ml', quantity: 1 }, 
      { name: 'Produtos multiuso', description: '1 Litro', quantity: 1 },
      { name: 'Ceras para piso', description: '1 Litro', quantity: 1 },
      { name: 'Inseticidas', description: '500 ml', quantity: 1 }, 
    ];

  /**
   * Renderiza os produtos no grid
   */
  function renderProducts() {
    productGrid.innerHTML = '';
    if (products.length === 0) {
      productGrid.innerHTML = `
        <div class="col-12">
          <p class="text-center text-muted">Nenhum produto encontrado.</p>
        </div>
      `;
      return;
    }

    products.forEach((product, index) => {
      const productCard = document.createElement('div');
      productCard.className = 'col-md-4';
      productCard.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><strong>Quantidade:</strong> ${product.quantity}</p>
            <button class="btn btn-danger btn-sm" data-index="${index}">Remover</button>
          </div>
        </div>
      `;
      productGrid.appendChild(productCard);
    });

    // Adiciona eventos aos botões de remover
    document.querySelectorAll('.btn-danger').forEach((button) => {
      button.addEventListener('click', (event) => {
        const index = parseInt(event.target.getAttribute('data-index'), 10);
        removeProduct(index);
      });
    });
  }

  /**
   * Remove um produto pelo índice
   * @param {number} index - Índice do produto no array
   */
  function removeProduct(index) {
    products.splice(index, 1);
    renderProducts();
  }

  /**
   * Evento de envio do formulário para adicionar um novo produto
   */
  productInputForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Previne o comportamento padrão do formulário
    
      const name = document.getElementById('product-name').value.trim();
      const description = document.getElementById('product-description').value.trim();
      const quantity = parseInt(document.getElementById('product-quantity').value, 10);
    
      // Log para depuração
      console.log({ name, description, quantity });
    
      // Validação com logs para entender o problema
      if (name === "") {
        console.error("Nome do produto está vazio.");
      }
      if (description === "") {
        console.error("Descrição do produto está vazia.");
      }
      if (isNaN(quantity) || quantity < 1) {
        console.error("Quantidade inválida.");
      }
    
      if (!name || !description || isNaN(quantity) || quantity < 1) {
        alert('Preencha todos os campos corretamente!');
        return;
      }
    
      // Adiciona o novo produto à lista
      products.push({ name, description, quantity });
      renderProducts(); // Atualiza a exibição dos produtos
    
      // Limpa o formulário
      productInputForm.reset();
    
      alert('Produto adicionado com sucesso!');
    });
    

  // Inicializa a renderização dos produtos
  renderProducts();
});
