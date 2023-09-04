var canvas = document.getElementById("assinaturaCanvas");
        var ctx = canvas.getContext("2d");
        var assinaturaImagem = document.getElementById("assinaturaImagem");

        var desenhando = false;
        var xAnterior = 0;
        var yAnterior = 0;

        // Evento de mouse pressionado
        canvas.addEventListener("mousedown", function (e) {
            desenhando = true;
            xAnterior = e.clientX - canvas.getBoundingClientRect().left;
            yAnterior = e.clientY - canvas.getBoundingClientRect().top;
        });

        // Evento de mouse movido
        canvas.addEventListener("mousemove", function (e) {
            if (!desenhando) return;
            var x = e.clientX - canvas.getBoundingClientRect().left;
            var y = e.clientY - canvas.getBoundingClientRect().top;

            ctx.beginPath();
            ctx.moveTo(xAnterior, yAnterior);
            ctx.lineTo(x, y);
            ctx.strokeStyle = "#000";
            ctx.lineWidth = 2;
            ctx.stroke();

            xAnterior = x;
            yAnterior = y;
        });

        // Evento de mouse liberado
        canvas.addEventListener("mouseup", function () {
            desenhando = false;
        });

        // Limpar a assinatura
        function limparAssinatura() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            assinaturaImagem.src = "";
        }