const notificationList = document.getElementById('notification-list');
const addNotificationButton = document.getElementById('add-notification');

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
  }
];

function renderNotifications() {
  notificationList.innerHTML = '';
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
      notifications.splice(index, 1); // Remove the notification
      renderNotifications(); // Re-render the list
    });

    listItem.appendChild(content);
    listItem.appendChild(button);
    notificationList.appendChild(listItem);
  });
}

// Chama a função renderNotifications() ao carregar a página
renderNotifications();

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
