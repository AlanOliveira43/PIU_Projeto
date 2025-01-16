document.getElementById('manutencao-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtém os valores dos campos
    const area = document.getElementById('area').value;
    const dataManutencao = document.getElementById('data-manutencao').value;
    const localManutencao = document.getElementById('local-manutencao').value;
  
    // Valida se todos os campos foram preenchidos
    if (!area || !dataManutencao || !localManutencao) {
      alert('Por favor, preencha todos os campos antes de adicionar!');
      return;
    }
  
    // Cria um novo item para a lista de cronograma
    const listaCronograma = document.getElementById('lista-cronograma');
    const manutencaoItem = document.createElement('li');
    manutencaoItem.className = 'list-group-item';
    manutencaoItem.textContent = `Área: ${area}, Data: ${dataManutencao}, Local: ${localManutencao}`;
  
    listaCronograma.appendChild(manutencaoItem);
  
    // Limpa os campos do formulário após adicionar
    document.getElementById('area').value = '';
    document.getElementById('data-manutencao').value = '';
    document.getElementById('local-manutencao').value = '';
  });