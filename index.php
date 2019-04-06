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
            <div class="quadro" id="1">
                <h2>A Fazer</h2>
                <div class="cartoes" id="5">
                    <div class="cartao" name="1">
                        <p>Tarefa do Robson Git e GitHub</p>
                    </div>
                    <div class="cartao" name="2">
                        <p>Terefa 1 </p>
                    </div>
                    <div class="cartao" name="3">
                        <p>Terefa 2</p>
                    </div>
                    <div class="cartao" name="4">
                        <p>Terefa 3 </p>
                    </div>
                    <div class="cartao" name="5">
                        <p>Terefa 4 </p>
                    </div>
                    <div class="cartao" name="6">
                        <p>Terefa 5 </p>
                    </div>
                    <div class="cartao" name="7">
                        <p>Terefa 6 </p>
                    </div>
                    <div class="cartao" name="8">
                        <p>Terefa 7 </p>
                    </div>
                    <div class="cartao" name="9">
                        <p>Terefa 8 </p>
                    </div>
                    <div class="cartao" name="10">
                        <p>Terefa 9 </p>
                    </div>
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
        </ul>


        <script>
            $(document).ready(function() {


// -------------------- Menu do botão direito --------------------// 
                $(".menu").addClass("off");
                $(".cartao").contextmenu(function(ev){
                    
                    
                    cartao = $(this).attr("name");


                    
                    // É o menu estatico
                    $(".menu").removeClass("off");
                    ev.preventDefault();
                    $(".menu").css({"left":`${ev.clientX - 10}px`});
                    $(".menu").css({"top":`${ev.clientY - 10}px`});
                });
                
                $(".menu").mouseleave(function(){
                    $(this).addClass("off");
                });

                $("li[id='moverFazendo']").click(function(){
                    alert("Movar para Fazendo");
                    $(".menu").addClass("off");
                });

                $("li[id='moverFeito']").click(function(){
                    alert("Movar para Feito");
                    $(".menu").addClass("off");
                });

                $("li[id='addCartao']").click(function(){
                    alert("Add Cartão");
                    $(".menu").addClass("off");
                });

                $("li[id='removeCartao']").click(function(){
                    alert("Remover cartão");
                    $(".menu").addClass("off");
                });


// -------------------- Overlay Scrollbars --------------------// 
                $(function() {
                    $('.cartoes').overlayScrollbars({
                        scrollbars : {
                            autoHide : "scroll"
                        }
                    });
                    $("body").overlayScrollbars({
                        className:"os-theme-light"
                    });
                });
            });
        </script>
    </body>
</html>