document.getElementById("generatePdfBtn").addEventListener("click", function () {
  // Create a new jsPDF instance
  const doc = new jspdf.jsPDF();

  doc.setFont('arial');
  doc.setFontSize(12);
  
  var img = 'cedula.jpg'
  var width = doc.internal.pageSize.getWidth();
  var height = doc.internal.pageSize.getHeight();
  doc.addImage(img, "JPG", 0, 0, width, height);

  const nomeAlunoValue = document.getElementById("nomeAluno").value;
  const nomeProfessorValue = document.getElementById("nomeAvaliador").value;
  var dataValue = document.getElementById("data").value;
  const horaValue = document.getElementById("hora").value;
  const semestreValue = document.getElementById("semestre").value;

  const conteudoApresentacao = document.getElementById("conteudoApresentacao").value;
  const dominio = document.getElementById("dominio").value;
  const poderSintese = document.getElementById("poderSintese").value;
  const subT3 = document.getElementById("subT3").value;

  const estrutura = document.getElementById("estrutura").value;
  const relOriQual = document.getElementById("relOriQual").value;
  const conhecimento = document.getElementById("conhecimento").value;
  const adequacao = document.getElementById("adequacao").value;
  const subT7 = document.getElementById("subT7").value;
  const total = document.getElementById("total").value;

  var dataFim = document.getElementById("dataFim").value;

  const radios = document.getElementsByName("alterar");
  const selected = Array.from(radios).find(radio => radio.checked);


  if (nomeAlunoValue === "" || nomeProfessorValue === "" || dataValue === "" ||horaValue === "" ||semestreValue === "" ||conteudoApresentacao === "" ||dominio === "" ||poderSintese === "" ||estrutura === "" ||relOriQual === "" ||conhecimento === "" ||adequacao === "" ||dataFim === "" || !selected) {
    alert("Por favor, preencha todos os campos.");
    return false;
  }
  

  y=106
  dataFim = formatarData(dataFim)
  dataValue = formatarData(dataValue)

  const conteudoPDF = `
    Aluno: ${nomeAlunoValue} 
    Professor: ${nomeProfessorValue}
    Data: ${dataValue}
    Hora: ${horaValue}
    Semestre: ${semestreValue}
    `;

  // Adicione o conteúdo ao PDF
  doc.text(conteudoPDF, 27, 60, 0);

  doc.text(conteudoApresentacao, 166, y, 0, );
  doc.text(dominio, 166, y+=7, 0, );
  doc.text(poderSintese, 166, y+=7, 0, );
  doc.text(subT3, 166, y+=7, 0, );

  doc.text(estrutura, 166, y+=16, 0, );
  doc.text(relOriQual, 166, y+=7, 0, );
  doc.text(conhecimento, 166, y+=7, 0, );
  doc.text(adequacao, 166, y+=7, 0, );
  doc.text(subT7, 166, y+=8, 0, );
  doc.text(total, 166, y+=8, 0, );

  doc.text(`O aluno deverá realizar alterações no relatório escrito? ${selected.value}.`, 32, 190, 0);

  doc.text(dataFim, 146, 237.5, 0);


  const canvas = document.getElementById("assinaturaCanvas");
  const imageData = canvas.toDataURL("image/png");
  doc.addImage(imageData, "PNG", 90, 200, 50, 20); // (image data, format, x, y, width, height)


  // Save the PDF
  doc.save("filled_form.pdf");
});


function formatarData(data) {
  return data.split('-').reverse().join('/');
}
