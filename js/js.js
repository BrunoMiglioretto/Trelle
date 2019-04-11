$(document).ready(function() {
    
    carregarCartoes();

// -------------------- Menu do botão direito --------------------// 
    $(".cartaoMenu").addClass("off");
    
    $(".cartaoMenu").mouseleave(function(){
        $(this).addClass("off");
    });

// -- Movar para A Fazer -- //

    $("li[id='moverAFazer']").click(function(){
        console.log("Movar para a fazer");

        $.ajax({
            url : "php/moverCartao/moverAFazer.php",
            method : "POST",
            data : {
                idCartao : cartao
            }
        }).done(function(){
            carregarCartoes();
        });

        $(".cartaoMenu").addClass("off");
    });

// -- Mover para Fazendo --//

    $("li[id='moverFazendo']").click(function(){
        console.log("Movar para Fazendo");
        $.ajax({
            url : "php/moverCartao/moverFazendo.php",
            method : "POST",
            data : {
                idCartao : cartao
            }
        }).done(function(){
            carregarCartoes();
        });
        $(".cartaoMenu").addClass("off");
    });

// -- Mover para Feito -- //

    $("li[id='moverFeito']").click(function(){
        console.log("Movar para Feito");
        $.ajax({
            url : "php/moverCartao/moverFeito.php",
            method : "POST",
            data : {
                idCartao : cartao
            }
        }).done(function(){
            carregarCartoes();
        });
        $(".cartaoMenu").addClass("off");
    });

    $("li[id='addCartao']").click(function(){
        console.log("Add Cartão");
        $(".cartaoMenu").addClass("off");
    });

    $("li[id='removeCartao']").click(function(){
        console.log("Remover cartão");
        $(".cartaoMenu").addClass("off");
    });


// ------ Quadros -------/

$(".quadroMenu").addClass("off");
    
    $(".quadroMenu").mouseleave(function(){
        $(this).addClass("off");
    });

    $("li[id='QuadroAddCartao']").click(function(){
        console.log("Add Cartão");
        $(".quadroMenu").addClass("off");
    });


// -------------------- Ajax --------------------// 

    function carregarCartoes(){
        carregarQuadro1();
        carregarQuadro2();
        carregarQuadro3();
    }

// ------ Carregar quadros -------/

    function carregarQuadro1(){

        $.ajax({
            url : "php/atualizar/quadro1.php"
        }).done(function(cartoes){
            $(".quadro[id='1'] .cartoes").html(cartoes);
            addContextmenu();
        });
    }

    function carregarQuadro2(){

        $.ajax({
            url : "php/atualizar/quadro2.php"
        }).done(function(cartoes){
            $(".quadro[id='2'] .cartoes").html(cartoes);
            addContextmenu();
        });
    }

    function carregarQuadro3(){

        $.ajax({
            url : "php/atualizar/quadro3.php"
        }).done(function(cartoes){
            $(".quadro[id='3'] .cartoes").html(cartoes);
            addContextmenu();
        });
    }

// adicionar evento do botão direito nos cartões
    function addContextmenu(){
        $(".cartao").unbind();
         // Coloca esse evento nos cartoes
        $(".cartao").contextmenu(function(ev){
            
            
            cartao = $(this).attr("name");

            
            console.log(cartao);

            
            // É o menu estatico
            ev.preventDefault();
            $(".cartaoMenu").removeClass("off");
            $(".cartaoMenu").css({"left":`${ev.clientX - 10}px`});
            $(".cartaoMenu").css({"top":`${ev.clientY - 10}px`});
        });
    }

    $("h2").contextmenu(function(ev) {
        ev.preventDefault();
        $(".quadroMenu").removeClass("off");
        $(".quadroMenu").css({"left":`${ev.clientX - 10}px`});
        $(".quadroMenu").css({"top":`${ev.clientY - 10}px`});
    });

// -------------------- Alertify --------------------// 

    alertify.defaults.transition = "zoom";
    alertify.defaults.theme = "semantic";

    alertify.confirm().setting({
        'message'   : "<p>Cartão</p><input type='text'><p>Data de entraga</p><input type='text'>",
        'title'     : "Novo Cartão",
        'movable'   : false,
        'closable'  : false,
        'reverseButtons' : true
    }).show();




// -------------------- Overlay Scrollbars --------------------// 
    $(function() {
        $("body").overlayScrollbars({
            className:"os-theme-light"
        });
    });

    // adiciona o scrollbars nos quadros ----- Erro
    function addScrollbars(){
        $(".cartoes").overlayScrollbars({
            scrollbars : {
                autoHide : "scroll"
            }
        });
    }


});