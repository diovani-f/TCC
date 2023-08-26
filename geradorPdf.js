document.getElementById("generatePdfBtn").addEventListener("click", function () {
    const field1Value = document.getElementById("field1").value;
    const field2Value = document.getElementById("field2").value;

    // Create a new jsPDF instance
    const doc = new jspdf.jsPDF();

    // Set the font size and position to start adding content
    const fontSize = 12;
    let positionY = 20;

    // Add content to the PDF
    doc.setFontSize(fontSize);
    doc.text(20, positionY, "Field 1:");
    doc.text(70, positionY, field1Value);
    positionY += 20;
    doc.text(20, positionY, "Field 2:");
    doc.text(70, positionY, field2Value);


    const canvas = document.getElementById("assinaturaCanvas");
    const imageData = canvas.toDataURL("image/png");
    doc.addImage(imageData, "PNG", 20, 100, 150, 50); // (image data, format, x, y, width, height)

    // Save the PDF
    doc.save("filled_form.pdf");
  });