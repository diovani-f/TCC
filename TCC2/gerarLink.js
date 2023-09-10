document.addEventListener("DOMContentLoaded", function() {
    // Function to get URL parameter by name
    function getParameterByName(name) {
      var urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    }

    // Get values from URL parameters
    var tituloTrabalhoParam = getParameterByName("tituloTrabalho");
    var nomeAlunoParam = getParameterByName("nomeAluno");
    var nomeAvaliador1Param = getParameterByName("nomeAvaliador1");
    var nomeAvaliador2Param = getParameterByName("nomeAvaliador2");
    var nomeProfessorParam = getParameterByName("nomeProfessor");
    var dataParam = getParameterByName("data");
    var horaParam = getParameterByName("hora");
    var cursoParam = getParameterByName("curso");
    var salaParam = getParameterByName("sala");

    // Fill form fields with URL parameter values
    document.getElementById("tituloTrabalho").value = tituloTrabalhoParam || "";
    document.getElementById("nomeAluno").value = nomeAlunoParam || "";
    document.getElementById("nomeAvaliador1").value = nomeAvaliador1Param || "";
    document.getElementById("nomeAvaliador2").value = nomeAvaliador2Param || "";
    document.getElementById("nomeProfessor").value = nomeProfessorParam || "";
    document.getElementById("data").value = dataParam || "";
    document.getElementById("hora").value = horaParam || "";
    document.getElementById("curso").value = cursoParam || "";
    document.getElementById("sala").value = salaParam || "";
  });


const btn = document.querySelector("#gerarLink");

btn.addEventListener("click", function(e){
    e.preventDefault();
    const nomeAluno = encodeURIComponent(document.getElementById("nomeAluno").value);
    const tituloTrabalho = encodeURIComponent(document.getElementById("tituloTrabalho").value);
    const nomeAvaliador1 = encodeURIComponent(document.getElementById("nomeAvaliador1").value);
    const nomeAvaliador2 = encodeURIComponent(document.getElementById("nomeAvaliador2").value);
    const nomeProfessor = encodeURIComponent(document.getElementById("nomeProfessor").value);
    const dataValue = encodeURIComponent(document.getElementById("data").value);
    const horaValue = encodeURIComponent(document.getElementById("hora").value);
    const curso = encodeURIComponent(document.getElementById("curso").value);
    const sala = encodeURIComponent(document.getElementById("sala").value);


    const url = `index.html?tituloTrabalho=${tituloTrabalho}&nomeAluno=${nomeAluno}&nomeProfessor=${nomeProfessor}&nomeAvaliador1=${nomeAvaliador1}&nomeAvaliador2=${nomeAvaliador2}&curso=${curso}&data=${dataValue}&hora=${horaValue}&sala=${sala}`;
  
    window.open(url, '_blank');
});
