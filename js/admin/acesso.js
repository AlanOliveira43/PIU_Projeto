document.getElementById('notification-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    const dateInput = document.getElementById('data').value;
    const enderecoInput = document.getElementById('endereco').value;
    const confirmationMessage = document.getElementById('confirmation-message');
    const confirmedDate = document.getElementById('confirmed-date');
    const confirmedEndereco = document.getElementById('confirmed-endereco');
  
    if (dateInput && enderecoInput) {
      confirmedDate.textContent = `Data Confirmada: ${dateInput}`; // Atualiza a data confirmada
      confirmedEndereco.textContent = `Endereço Confirmado: ${enderecoInput}`; // Atualiza o endereço confirmado
      confirmationMessage.classList.remove('d-none'); // Exibe a mensagem de confirmação
      document.getElementById('data').value = ''; // Limpa o campo de data
      document.getElementById('endereco').value = ''; // Limpa o campo de endereço
    } else {
      alert('Por favor, preencha todos os campos antes de confirmar.');
    }
  });