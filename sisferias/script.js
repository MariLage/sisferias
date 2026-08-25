//integração do menu
fetch('menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu').innerHTML = data;
    });

const selectParcelas = document.getElementById('feriasRefAno');
const containerParcelas = document.getElementById("containerParcelas");

selectParcelas.addEventListener('change', function(){
    const quantidade = Number(this.value);

    // Limpa as parcelas existentes
    containerParcelas.innerHTML = "";

    // Cria as novas parcelas
    for (let i = 1; i <= quantidade; i++) {
        const parcela = document.createElement("div");

        parcela.classList.add("parcelas");

        parcela.innerHTML = `
            <div class="dataParc">
                <h4>Parcela ${i}</h4>
                <p class="dataParct">0 dias</p>
            </div>

            <div class="dataInFim">
                <div>
                    <label for="dataIn${i}">Início</label>
                    <input 
                        type="date" 
                        id="dataIn${i}" 
                        class="dataIn"
                        min="2025-01-01" 
                        max="2030-12-31"
                    >
                </div>

                <div>
                    <label for="dataFim${i}">Término</label>
                    <input 
                        type="date" 
                        id="dataFim${i}" 
                        class="dataFim"
                        min="2025-01-01" 
                        max="2030-12-31"
                    >
                </div>
            </div>
        `;

        containerParcelas.appendChild(parcela);


        // Pega os elementos dessa parcela
        const dataInicio = parcela.querySelector(".dataIn");
        const dataFim = parcela.querySelector(".dataFim");
        const dataParct = parcela.querySelector(".dataParct");

        // Calcula a quantidade de dias
        function calcularDias() {

            if (dataInicio.value && dataFim.value) {

                const inicio = new Date(dataInicio.value + "T00:00:00");
                const fim = new Date(dataFim.value + "T00:00:00");

                const diferenca = fim - inicio;

                const dias = diferenca / (1000 * 60 * 60 * 24);

                if (dias >= 0) {
                    dataParct.textContent = `${dias} dias`;
                } else {
                    dataParct.textContent = "Data inválida";
                }

            } else {
                dataParct.textContent = "0 dias";
            }
        }

        dataInicio.addEventListener("change", calcularDias);
        dataFim.addEventListener("change", calcularDias);
    }
});