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
  
  function salvarEndereco() {
    const cep = document.getElementById("input_cep").value;
    const rua = document.getElementById("campo_rua").value;
    const bairro = document.getElementById("campo_bairro").value;
    const cidade = document.getElementById("campo_cidade").value;
    const estado = document.getElementById("campo_estado").value;
  
    const mensagem = document.getElementById("mensagem"); }

  function configurarEventos() {
    const inputCep = document.getElementById("input_cep");
    inputCep.addEventListener("focusout", buscarCep);
  }
  
  window.addEventListener("load", configurarEventos);