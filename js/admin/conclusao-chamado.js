const chamadosAbertos = document.getElementById('chamados-abertos');
    const chamadoForm = document.getElementById('chamado-form');
    const descricaoInput = document.getElementById('descricao');
    const categoriaInput = document.getElementById('categoria');

    // Adiciona novo chamado
    chamadoForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const descricao = descricaoInput.value.trim();
      const categoria = categoriaInput.value;

      if (!descricao || !categoria) {
        alert('Preencha todos os campos antes de registrar o chamado.');
        return;
      }

      const listItem = document.createElement('div');
      listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
      listItem.innerHTML = `
        <div>
          <h5>${descricao}</h5>
          <p class="text-muted">Categoria: ${categoria}</p>
        </div>
        <button class="btn btn-danger btn-sm">Remover</button>
      `;

      // Botão de remover
      const removeButton = listItem.querySelector('.btn-danger');
      removeButton.addEventListener('click', () => {
        chamadosAbertos.removeChild(listItem);
      });

      chamadosAbertos.appendChild(listItem);

      // Limpar formulário
      chamadoForm.reset();
    });