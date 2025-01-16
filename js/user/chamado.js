 // Selecionando elementos
 const chamadoForm = document.getElementById('chamado-form');
 const chamadosAbertos = document.getElementById('chamados-abertos');

 // Evento para adicionar chamados
 chamadoForm.addEventListener('submit', function (e) {
   e.preventDefault(); // Evita o recarregamento da página

   // Capturando valores do formulário
   const name = document.getElementById('name').value;
   const category = document.getElementById('category').value;
   const location = document.getElementById('location').value;
   const description = document.getElementById('description').value;

   // Criando novo chamado
   const chamadoItem = document.createElement('div');
   chamadoItem.classList.add('list-group-item', 'mb-2');
   chamadoItem.innerHTML = `
     <h5 class="mb-1">${name}</h5>
     <p class="mb-1"><strong>Categoria:</strong> ${category}</p>
     <p class="mb-1"><strong>Local:</strong> ${location}</p>
     <p class="mb-1"><strong>Descrição:</strong> ${description}</p>
     <button class="btn btn-danger btn-sm mt-2 delete-btn">Excluir</button>
   `;

   // Adicionando o chamado à lista
   chamadosAbertos.appendChild(chamadoItem);

   // Adicionando funcionalidade de exclusão
   const deleteBtn = chamadoItem.querySelector('.delete-btn');
   deleteBtn.addEventListener('click', function () {
     chamadosAbertos.removeChild(chamadoItem);
   });

   // Limpando os campos do formulário
   chamadoForm.reset();
 });