<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>Trelle</title>
        <!-- CSS -->
        <link href="css/style.css" rel="stylesheet">
        <link href="css/OverlayScrollbars.min.css" rel="stylesheet">

        <!-- JavaScript -->
        <script src="js/jquery.min.js"></script>
        <script src="js/jquery.overlayScrollbars.min.js"></script>
    
    </head>
    <body>
        <div class="topo">
            <h1>Trelle</h1>
        </div>
        <div class="quadros">
            <div class="quadro">
                <h2>A Fazer</h2>
                <div class="cartoes">
                    <div class="cartao">
                        <p>Tarefa do Robson Git e GitHub</p>
                    </div>
                    <div class="cartao">
                        <p>Terefa 1 </p>
                    </div>
                    <div class="cartao">
                        <p>Terefa 2</p>
                    </div>
                    <div class="cartao">
                        <p>Terefa 3 </p>
                    </div>
                    <div class="cartao">
                        <p>Terefa 4 </p>
                    </div>
                    <div class="cartao">
                        <p>Terefa 5 </p>
                    </div>
                    <div class="cartao">
                        <p>Terefa 6 </p>
                    </div>
                    <div class="cartao">
                        <p>Terefa 7 </p>
                    </div>
                    <div class="cartao">
                        <p>Terefa 8 </p>
                    </div>
                    <div class="cartao">
                        <p>Terefa 9 </p>
                    </div>
                </div>
            </div>
            <div class="quadro">
                <h2>Fazendo</h2>
                <div class="cartoes">
                
                </div>
            </div>
            <div class="quadro">
                <h2>Feito</h2>
                <div class="cartoes">
                
                </div>
            </div>
        </div>
        <script>
            $(document).ready(function() {
                $(function() {
                    $('.cartoes').overlayScrollbars({
                        scrollbars : {
                            autoHide : "scroll"
                        }
                    });
                    $("body").overlayScrollbars({
                        className:"os-theme-light"
                    });
                })
            });
        </script>
    </body>
</html>