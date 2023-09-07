document.getElementById("generatePdfBtn").addEventListener("click", function () {
    // Create a new jsPDF instance
    const doc = new jspdf.jsPDF();

    const nomeAlunoValue = document.getElementById("nomeAluno").value;
    const nomeProfessorValue = document.getElementById("nomeProfessor").value;
    const dataValue = document.getElementById("data").value;
    const horaValue = document.getElementById("hora").value;
    const semestreValue = document.getElementById("semestre").value;
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    const conteudoApresentacao = document.getElementById("conteudoApresentacao").value;
    const dominio = document.getElementById("dominio").value;
    const poderSintese = document.getElementById("poderSintese").value;

    const estrutura = document.getElementById("estrutura").value;
    const relOriQual = document.getElementById("relOriQual").value;
    const conhecimento = document.getElementById("conhecimento").value;
    const adequacao = document.getElementById("adequacao").value;

    const dataFim = document.getElementById("dataFim").value;

    const radios = document.getElementsByName("alterar");
    const selected = Array.from(radios).find(radio => radio.checked);


    if (nomeAlunoValue === "" || nomeProfessorValue === "" || dataValue === "" ||horaValue === "" ||semestreValue === "" ||conteudoApresentacao === "" ||dominio === "" ||poderSintese === "" ||estrutura === "" ||relOriQual === "" ||conhecimento === "" ||adequacao === "" ||dataFim === "" || !selected) {
      alert("Por favor, preencha todos os campos.");
      return false;
    }




    doc.setFontSize(12);

  

    // Set the font size and position to start adding content
    // const fontSize = 12;
    // let positionY = 20;

    // // // Add content to the PDF
    // // doc.setFontSize(fontSize);
    // // doc.text(20, positionY, "Aluno:");
    // // doc.text(70, positionY, nomeAlunoValue);
    // // positionY += 20;
    // // doc.text(20, positionY, "Professor:");
    // // doc.text(70, positionY, nomeProfessorValue);

    const conteudoPDF = `
      Aluno: ${nomeAlunoValue} 
      Professor: ${nomeProfessorValue}
      Data: ${dataValue}
      Hora: ${horaValue}
      `;

    const notas = `
      Conteúdo da Apresentação: ${conteudoApresentacao}
      Domínio dos Recursos Didáticos: ${dominio}
      Utilização do Tempo e Poder de Síntese: ${poderSintese}
      `;

      const notas1 = `
      Estrutura do Trabalho: ${estrutura}
      Relevância, Originalidade e Qualidade do Conteúdo do Texto: ${relOriQual}
      Grau de Conhecimento Demonstrado no Trabalho Escrito: ${conhecimento}
      Adequação da Bibliografia Apresentada: ${adequacao}
      `;

      const adicionais = `
      O aluno deverá realizar alterações no Relatório Escrito? ${selected.value}
      Data Final para entregar a cópia definitiva 
      do Trabalho de Graduação: ${dataFim}
      `;

    // Adicione o conteúdo ao PDF
    doc.text(conteudoPDF, 10, 30, 0, );
    doc.text(notas, 10, 60, 0);
    doc.text(notas1, 10, 90, 0);
    doc.text(adicionais, 10, 120, 0);
    

    doc.text('CRITÉRIOS DE AVALIAÇÃO DO TRABALHO DE GRADUAÇÃO DO ' + semestreValue+ ' DE ' +anoAtual, 18, 18, 0)


    const canvas = document.getElementById("assinaturaCanvas");
    const imageData = canvas.toDataURL("image/png");
    doc.addImage(imageData, "PNG", 20, 140, 150, 50); // (image data, format, x, y, width, height)


    // Save the PDF
    doc.save("filled_form.pdf");
  });