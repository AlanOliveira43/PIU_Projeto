const notificationList = document.getElementById('notification-list');
const addNotificationButton = document.getElementById('add-notification');

// Lista inicial de notificações
const notifications = [
  {
    title: 'Aviso: Manutenção programada na Torre Sul.',
    date: '27/11/2023',
    buttonText: 'Confirmar recebimento',
    buttonClass: 'btn-outline-success'
  },
  {
    title: 'Evento: Reunião de condôminos no Salão de Festas.',
    date: '29/11/2023',
    buttonText: 'Confirmar presença',
    buttonClass: 'btn-outline-primary'
  },
  {
    title: 'Aviso: Pintura na garagem. Não estacionar veículos.',
    date: '30/11/2023',
    buttonText: 'Entendido',
    buttonClass: 'btn-outline-warning'
  },
  {
    title: 'Entrega: Encomenda pendente para retirada.',
    date: '20/01/2025',
    buttonText: 'Retirada Confirmada',
    buttonClass: 'btn-outline-info'
  }
];

// Função para renderizar notificações na lista
function renderNotifications() {
  notificationList.innerHTML = ''; // Limpa a lista atual
  notifications.forEach((notification, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    const content = document.createElement('div');
    content.innerHTML = `
      <strong>${notification.title}</strong>
      <small class="text-muted d-block">Data: ${notification.date}</small>
    `;

    const button = document.createElement('button');
    button.className = `btn ${notification.buttonClass} btn-sm`;
    button.textContent = notification.buttonText;
    button.addEventListener('click', () => {
      notifications.splice(index, 1); // Remove a notificação
      renderNotifications(); // Re-renderiza a lista
    });

    listItem.appendChild(content);
    listItem.appendChild(button);
    notificationList.appendChild(listItem);
  });
}

// Chama a função para renderizar notificações ao carregar a página
renderNotifications();

// Evento para adicionar uma nova notificação
addNotificationButton.addEventListener('click', () => {
  const newNotification = {
    title: 'Novo aviso adicionado.',
    date: new Date().toLocaleDateString('pt-BR'),
    buttonText: 'Entendido',
    buttonClass: 'btn-outline-info'
  };
  notifications.push(newNotification);
  renderNotifications();
});
