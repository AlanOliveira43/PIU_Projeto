const productGrid = document.getElementById('product-grid');
    const addProductForm = document.getElementById('add-product-form');

    const products = [
      { name: 'Desinfetante', description: '50 Litros', quantity: 10 },
      { name: 'Detergente neutro', description: '10 Litros', quantity: 5 },
    ];

    function renderProducts() {
      productGrid.innerHTML = '';
      products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-4';
        productCard.innerHTML = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text"><strong>Quantidade:</strong> ${product.quantity}</p>
              <button class="btn btn-danger btn-sm" onclick="removeProduct(${index})">Remover</button>
            </div>
          </div>
        `;
        productGrid.appendChild(productCard);
      });
    }

    function removeProduct(index) {
      products.splice(index, 1);
      renderProducts();
    }

    addProductForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('product-name').value;
      const description = document.getElementById('product-description').value;
      const quantity = parseInt(document.getElementById('product-quantity').value, 10);

      products.push({ name, description, quantity });
      renderProducts();

      // Clear form and close modal
      addProductForm.reset();
      const addProductModal = bootstrap.Modal.getInstance(document.getElementById('addProductModal'));
      addProductModal.hide();
    });