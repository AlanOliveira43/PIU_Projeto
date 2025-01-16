document.getElementById('reserva-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

// Obtém os valores do formulário
const areaComum = document.getElementById('area-comum').value;
const data = document.getElementById('data').value;
const horarioInicio = document.getElementById('horario-inicio').value;
const horarioFim = document.getElementById('horario-fim').value;

// Valida se o horário de início é anterior ao horário de término
if (horarioInicio >= horarioFim) {
  alert('O horário de início deve ser anterior ao horário de término.');
  return;
}

    const servicosAdicionais = [];
    if (document.getElementById('mesas_cadeiras').checked) servicosAdicionais.push('Mesas e cadeiras');
    if (document.getElementById('decoracao').checked) servicosAdicionais.push('Decoração');
    if (document.getElementById('catering').checked) servicosAdicionais.push('Catering');

    const dividirReserva = document.getElementById('dividir-reserva').value;

    
    // Exibe a mensagem de confirmação
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = `Reserva confirmada para ${areaComum} no dia ${data}, das ${horarioInicio} às ${horarioFim}.`;
    if (servicosAdicionais.length > 0) {
      mensagem.textContent += ` Serviços adicionais: ${servicosAdicionais.join(', ')}.`;
    }
    if (dividirReserva) {
      mensagem.textContent += ` Reserva dividida com: ${dividirReserva}.`;
    }
    mensagem.className = 'alert alert-success';

    // Adiciona a reserva à lista
    
    const reservaItem = document.createElement('li');
    reservaItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    // Detalhes da reserva
    reservaItem.innerHTML = `
      <div>
        <strong>${areaComum}</strong> - ${data} às ${horario}<br>
        Serviços: ${servicosAdicionais.join(', ') || 'Nenhum'}<br>
        Dividido com: ${dividirReserva || 'Ninguém'}
      </div>
    `;

    
    // Limpa o formulário
    document.getElementById('reserva-form').reset();
  });