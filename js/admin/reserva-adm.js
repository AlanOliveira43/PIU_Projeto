
        // Dados de exemplo
        const reservas = [
            { id: 1, nome: "Carlos Silva", data: "2024-01-15", hora_inicio: "14:00", hora_final: "18:00", local: "Churrasqueira", adicionais: "Decoração", divididoCom: "Fernanda" },
            { id: 2, nome: "Ana Oliveira", data: "2024-01-20", hora_inicio: "10:00", hora_final: "18:00", local: "Salão de Festas", adicionais: "Mesas e cadeiras", divididoCom: "João" },
            { id: 3, nome: "João Pereira", data: "2024-02-05", hora_inicio: "16:30", hora_final: "19:00", local: "Piscina", adicionais: "Guarda-sol", divididoCom: "Maria" },
            { id: 4, nome: "Maria Souza", data: "2024-02-10", hora_inicio: "09:00", hora_final: "15:00", local: "Quadra Esportiva", adicionais: "Rede" , divididoCom: "Pedro" },
            { id: 5, nome: "Pedro Santos", data: "2024-02-15", hora_inicio: "15:00", hora_final: "20:00", local: "Salão de Festas", adicionais: "Decoração" , divididoCom: "Ana" }
        ];
        
        
                // Seleciona o elemento tbody onde as reservas serão exibidas
                const reservasList = document.getElementById("reservas-list");
        
                // Função para renderizar as reservas na tabela
                function renderReservas() {
                    reservasList.innerHTML = ""; // Limpa a tabela antes de renderizar
                    reservas.forEach((reserva) => {
                        const row = document.createElement("tr");
                        row.innerHTML = `
                            <td>${reserva.id}</td>
                            <td>${reserva.nome}</td>
                            <td>${reserva.data}</td>
                            <td>${reserva.hora_inicio}</td>
                            <td>${reserva.hora_final}</td>
                            <td>${reserva.local}</td>
                            <td>${reserva.adicionais}</td>
                            <td>${reserva.divididoCom}</td>
                            <td>
                                <button class="btn btn-sm btn-danger" onclick="removerReserva(${reserva.id})">Cancelar</button>
                            </td>
                        `;
                        reservasList.appendChild(row);
                    });
                }
        
                // Função para remover uma reserva
                function removerReserva(id) {
                    const index = reservas.findIndex((reserva) => reserva.id === id);
                    if (index !== -1) {
                        reservas.splice(index, 1); // Remove a reserva do array
                        renderReservas(); // Atualiza a tabela
                    }
                }
        
                // Renderiza as reservas na tabela ao carregar a página
                renderReservas();
                