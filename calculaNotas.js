function verificarValor(input) {
    // Obtenha o valor do campo de entrada
    var valor = parseFloat(input.value);

    // Verifique se o valor é maior que 1
    if (valor > 1) {
        // Zere o campo de entrada
        input.value = '';

        // Mostre um alerta na tela
        alert('O valor inserido é maior que 1. O campo foi zerado.');
    }
}
function verificarValor2(input) {
    // Obtenha o valor do campo de entrada
    var valor = parseFloat(input.value);

    // Verifique se o valor é maior que 1
    if (valor > 2) {
        // Zere o campo de entrada
        input.value = '';

        // Mostre um alerta na tela
        alert('O valor inserido é maior que 2. O campo foi zerado.');
    }
}
function verificarValor3(input) {
    // Obtenha o valor do campo de entrada
    var valor = parseFloat(input.value);

    // Verifique se o valor é maior que 1
    if (valor > 3) {
        // Zere o campo de entrada
        input.value = '';

        // Mostre um alerta na tela
        alert('O valor inserido é maior que 3. O campo foi zerado.');
    }
}

$(document).ready(function() {
    formatarNotas();
  });
  
  function formatarNotas() {
    $(".nota-input").maskMoney({
      thousands: '',
      decimal: '.',
      precision: 2, // Duas casas decimais
      allowZero: true, // Permitir 0.00
      allowNegative: false // Não permitir números negativos
    });
}

function calcularSubTotal3() {
    var notaConteudo = parseFloat(document.getElementById("conteudoApresentacao").value);
    var notaDominio = parseFloat(document.getElementById("dominio").value);
    var notaPoderSintese = parseFloat(document.getElementById("poderSintese").value);
  
    if (!isNaN(notaConteudo) && !isNaN(notaDominio) && !isNaN(notaPoderSintese)) {
      
        var subTotal3 = notaConteudo + notaDominio + notaPoderSintese;

        document.getElementById("subT3").value = subTotal3.toFixed(2);
    } else {
      document.getElementById("subT3").value = "";
    }
    calcularTotal();
  }
  
  function calcularSubTotal7() {

    var notaEstrutura = parseFloat(document.getElementById("estrutura").value);
    var notaRelOriQual = parseFloat(document.getElementById("relOriQual").value);
    var notaConhecimento = parseFloat(document.getElementById("conhecimento").value);
    var notaAdequacao = parseFloat(document.getElementById("adequacao").value);
  
    if (!isNaN(notaEstrutura) && !isNaN(notaRelOriQual) && !isNaN(notaConhecimento) && !isNaN(notaAdequacao)) {

        var subTotal7 = notaEstrutura + notaRelOriQual + notaConhecimento + notaAdequacao;

        document.getElementById("subT7").value = subTotal7.toFixed(2);
    } else {
      document.getElementById("subT7").value = "";
    }
  
    calcularTotal();
  }
  
  function calcularTotal() {
    var subTotal3 = parseFloat(document.getElementById("subT3").value);
    var subTotal7 = parseFloat(document.getElementById("subT7").value);
  
    if (!isNaN(subTotal3) && !isNaN(subTotal7)) {
      var total = subTotal3 + subTotal7;
      document.getElementById("total").value = total.toFixed(2);
    } else {
      document.getElementById("total").value = "";
    }
  }
  
  document.getElementById("conteudoApresentacao").addEventListener("input", calcularSubTotal3);
  document.getElementById("dominio").addEventListener("input", calcularSubTotal3);
  document.getElementById("poderSintese").addEventListener("input", calcularSubTotal3);
  
  document.getElementById("adequacao").addEventListener("input", calcularSubTotal7);
  document.getElementById("conhecimento").addEventListener("input", calcularSubTotal7);
  document.getElementById("relOriQual").addEventListener("input", calcularSubTotal7);
  document.getElementById("estrutura").addEventListener("input", calcularSubTotal7);
  