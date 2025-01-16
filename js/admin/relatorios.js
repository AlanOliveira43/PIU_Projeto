
function simularOrcamento() {
    const valor = parseFloat(document.getElementById('valor').value);
    if (!isNaN(valor)) {
        const impacto = valor * 1.1; // 10% de impacto financeiro
        document.getElementById('impacto').value = 'R$ ' + impacto.toFixed(2);
    } else {
        alert('Por favor, insira um valor válido.');
    }
};