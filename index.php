<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>Trelle</title>
        <!-- CSS -->
        <link href="css/style.css" rel="stylesheet">
        <link href="css/OverlayScrollbars.min.css" rel="stylesheet">
        <link href="css/alertify.min.css" rel="stylesheet">
        <link href="css/semantic.min.css" rel="stylesheet">

        <!-- JavaScript -->
        <script src="js/jquery.min.js"></script>
        <script src="js/jquery.overlayScrollbars.min.js"></script>
        <script src="js/js.js"></script>
        <script src="js/alertify.min.js"></script>
    
    </head>
    <body>
        <div class="topo">
            <h1>Trelle</h1>
        </div>
        <div class="quadros">
            <div class="quadro" id="1">
                <h2>A Fazer</h2>
                <div class="cartoes" id="5">
                    
                </div>
            </div>
            <div class="quadro" id="2">
                <h2>Fazendo</h2>
                <div class="cartoes">

                </div>
            </div>
            <div class="quadro" id="3">
                <h2>Feito</h2>
                <div class="cartoes">
                
                </div>
            </div>
        </div>

<!-- Menu do botão direito -->

        <ul class="menu">
            <li id="moverFazendo">Mover para Fazendo</li>
            <li id="moverFeito">Mover para Feito</li>
            <li id="addCartao">Adicionar cartão</li>
            <li id="removeCartao">Remover cartão</li>
            <li id="atualizar">Atualizar</li>
        </ul>

    </body>
</html>