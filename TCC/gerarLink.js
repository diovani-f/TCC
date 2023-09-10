document.addEventListener("DOMContentLoaded", function() {
    // Function to get URL parameter by name
    function getParameterByName(name) {
      var urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    }

    // Get values from URL parameters
    var nomeAlunoParam = getParameterByName("nomeAluno");
    var nomeAvaliadorParam = getParameterByName("nomeAvaliador");
    var dataParam = getParameterByName("data");
    var horaParam = getParameterByName("hora");
    var semestreParam = getParameterByName("semestre");

    // Fill form fields with URL parameter values
    document.getElementById("nomeAluno").value = nomeAlunoParam || "";
    document.getElementById("nomeAvaliador").value = nomeAvaliadorParam || "";
    document.getElementById("data").value = dataParam || "";
    document.getElementById("hora").value = horaParam || "";
    document.getElementById("semestre").value = semestreParam || "";
  });


const btn = document.querySelector("#gerarLink");

btn.addEventListener("click", function(e){
    e.preventDefault();
    const nomeAluno = encodeURIComponent(document.getElementById("nomeAluno").value);
    const nomeAvaliador = encodeURIComponent(document.getElementById("nomeAvaliador").value);
    const dataValue = encodeURIComponent(document.getElementById("data").value);
    const horaValue = encodeURIComponent(document.getElementById("hora").value);
    const semestreValue = encodeURIComponent(document.getElementById("semestre").value);

    const url = `index.html?nomeAluno=${nomeAluno}&nomeAvaliador=${nomeAvaliador}&data=${dataValue}&hora=${horaValue}&semestre=${semestreValue}`;


    window.open(url, '_blank');
});
