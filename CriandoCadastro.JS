function buscarCep() {
    const inputCep = document.getElementById("input_cep");
    const valorCep = inputCep.value;
    console.log("buscando cep " + valorCep);
    fetch("https://brasilapi.com.br/api/cep/v2/" + valorCep)
      .then((resposta) => {
        return resposta.json();
      })
      .then((json) => {
        console.log("O estado é " + json.state);
        console.log("A cidade é " + json.city);
        console.log("O bairro é " + json.neighborhood);
        console.log("A rua é " + json.street);

        document.getElementById("input_street").value = json.street;
        document.getElementById("input_neighborhood").value = json.neighborhood;
        document.getElementById("input_city").value = json.city;
        document.getElementById("input_state").value = json.state;
      });
  }
  
  function configurarEventos() {
    const inputCep = document.getElementById("input_cep");
    inputCep.addEventListener("focusout", buscarCep);
  }
  
  window.addEventListener("load", configurarEventos);