function adicionarComunicado() {
    const comunicadoText = document.getElementById('comunicado').value;
    const comunicadoDate = document.getElementById('data-comunicado').value;

    if (comunicadoText.trim() === '') {
        alert('Por favor, escreva um comunicado.');
        return;
    }

    if (comunicadoDate.trim() === '') {
        alert('Por favor, selecione uma data para o comunicado.');
        return;
    }

    const comunicadoDiv = document.createElement('div');
    comunicadoDiv.className = 'alert alert-secondary mb-3';
    comunicadoDiv.innerHTML = `<strong>${comunicadoDate}:</strong> ${comunicadoText}`;

    const comunicadosContainer = document.getElementById('comunicados');
    comunicadosContainer.prepend(comunicadoDiv);

    document.getElementById('comunicado').value = '';
    document.getElementById('data-comunicado').value = '';
}