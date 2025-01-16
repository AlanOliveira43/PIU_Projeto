document.getElementById('voting-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const name = document.getElementById('name').value;
    const proposal = document.getElementById('proposal').value;

    if (!name || !proposal) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Adiciona o voto à lista
    const votesList = document.getElementById('votes-list');
    const voteItem = document.createElement('li');
    voteItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    voteItem.innerHTML = `
        <div>
            <strong>${name}</strong> votou em <strong>${proposal}</strong>
        </div>
    `;

    // Botão para remover o voto
    const removeButton = document.createElement('button');
    removeButton.className = 'btn btn-danger btn-sm';
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', function() {
        votesList.removeChild(voteItem);
    });

    voteItem.appendChild(removeButton);
    votesList.appendChild(voteItem);

    // Limpa o formulário
    document.getElementById('voting-form').reset();
});