document.getElementById("generatePdfBtn").addEventListener("click", function () {
  // Create a instancia jspdf
  const doc = new jspdf.jsPDF();
  doc.setFontSize(12);
  doc.setFont('arial');
  doc.setLineHeightFactor(1.5);
  
  //pdf padrão da ufsm
  var img = 'aaa.png'
  var width = doc.internal.pageSize.getWidth();
  var height = doc.internal.pageSize.getHeight();
  doc.addImage(img, "PNG", 0, 0, width, height);


  //chamar valores
  const nomeAluno = document.getElementById("nomeAluno").value;
  const nomeProfessor = document.getElementById("nomeProfessor").value;
  const dataValue = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  const NomeAvaliador1 = document.getElementById("NomeAvaliador1").value;
  const NomeAvaliador2 = document.getElementById("NomeAvaliador2").value;
  const curso = document.getElementById("curso").value;
  const notaFinal = document.getElementById("notaFinal").value;
  const dataFim = document.getElementById("dataFim").value;
  const sala = document.getElementById("sala").value;
  const titulo = document.getElementById("tituloTrabalho").value;



  //Assinatura img
  const assinaturaProf = document.getElementById("assinaturaOr");
  const imgProf = assinaturaProf.toDataURL("image/png");

  const assinaturaAval1 = document.getElementById("assinaturaAval1");
  const imgAval1 = assinaturaAval1.toDataURL("image/png");

  const assinaturaAval2 = document.getElementById("assinaturaAval2");
  const imgAval2 = assinaturaAval2.toDataURL("image/png");

  const assinaturaAl = document.getElementById("assinaturaAl");
  const imgAl = assinaturaAl.toDataURL("image/png");
  //

  if (nomeAluno === "" || nomeProfessor === "" || dataValue === "" ||hora === "" ||NomeAvaliador1 === "" ||NomeAvaliador2 === "" ||curso === "" ||notaFinal === "" ||dataFim === "" ||sala === "" ||titulo === "" || assinaturaAl == null) {
    alert("Por favor, preencha todos os campos.");
    return false;
  }
  
  doc.addImage(imgProf, "PNG", 30, 205, 50, 20);
  doc.addImage(imgAval1, "PNG", 30, 230, 50, 20);
  doc.addImage(imgAval2, "PNG", 120, 205, 50, 20);
  doc.addImage(imgAl, "PNG", 120, 230, 50, 20);

  //config das datas
  const data = new Date(dataValue);
  const dataF = new Date(dataFim);

  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const mesExt = numeroParaMes(mes);
  const ano = data.getFullYear();

  const diaF = dataF.getDate();
  const mesF = dataF.getMonth() + 1;
  const mesExtF = numeroParaMes(mesF);
  const anoF = dataF.getFullYear();


  const Texto = `
    Aos ${dia} dias do mês de ${mesExt} de ${ano} às ${hora}, na sala ${sala}, realizou-se o Exame da Defesa do Trabalho de Conclusão de Curso intitulado: ${titulo}, de autoria de ${nomeAluno}, acadêmico (a) do Curso de Graduação em ${curso} da UFSM.
    A Banca Examinadora esteve constituída por ${nomeProfessor}, professor(a) orientador(a) do Trabalho de Conclusão de Curso, e por ${NomeAvaliador1} e  ${NomeAvaliador2}, membros avaliadores. O(a) acadêmico(a) recebeu a nota final ${notaFinal}. Foi concedido até a data de ${diaF} do mês de ${mesExtF} de ${anoF} para o(a) acadêmico(a) realizar as alterações sugeridas pela Banca Examinadora e entregar o trabalho em sua redação definitiva. E para constar foi lavrada a presente Ata, que será assinada pelos membros da Banca Examinadora e pelo(a) acadêmico(a).
  `;

  const local = `
    Santa Maria, RS ${dia} de ${mesExt} de ${ano} 
  `;



  // Função para dividir o texto em várias linhas
  function splitText(text, maxWidth) {
    const splitText = doc.splitTextToSize(text, maxWidth);
    return splitText;
  }

  const maxWidth = 177; // Largura máxima do texto
  const splitTexto = splitText(Texto, maxWidth);

  doc.text(splitTexto, 20, 90);
  doc.text(local, 115, 190);

  // Save the PDF
  doc.save("filled_form.pdf");
});

function numeroParaMes(numero) {
  switch (numero) {
    case 1:
      return "Janeiro";
    case 2:
      return "Fevereiro";
    case 3:
      return "Março";
    case 4:
      return "Abril";
    case 5:
      return "Maio";
    case 6:
      return "Junho";
    case 7:
      return "Julho";
    case 8:
      return "Agosto";
    case 9:
      return "Setembro";
    case 10:
      return "Outubro";
    case 11:
      return "Novembro";
    case 12:
      return "Dezembro";
    default:
      return "Mês inválido";
  }
}
