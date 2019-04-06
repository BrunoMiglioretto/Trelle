$(document).ready(function() {
    
    carregarCartoes();

// -------------------- Menu do botão direito --------------------// 
    $(".menu").addClass("off");
    
    $(".menu").mouseleave(function(){
        $(this).addClass("off");
    });

    $("li[id='moverFazendo']").click(function(){
        console.log("Movar para Fazendo");
        $(".menu").addClass("off");
    });

    $("li[id='moverFeito']").click(function(){
        console.log("Movar para Feito");
        $(".menu").addClass("off");
    });

    $("li[id='addCartao']").click(function(){
        console.log("Add Cartão");
        $(".menu").addClass("off");
    });

    $("li[id='removeCartao']").click(function(){
        console.log("Remover cartão");
        $(".menu").addClass("off");
    });

    $("li[id='atualizar']").click(function(){
        carregarQuadro1();
        console.log("Carregado");
        $(".menu").addClass("off");
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
            url : "php/quadro1.php"
        }).done(function(cartoes){
            $(".quadro[id='1'] .cartoes").html(cartoes);
            addContextmenu();
        });
    }

    function carregarQuadro2(){

        $.ajax({
            url : "php/quadro2.php"
        }).done(function(cartoes){
            $(".quadro[id='2'] .cartoes").html(cartoes);
            addContextmenu();
        });
    }

    function carregarQuadro3(){

        $.ajax({
            url : "php/quadro3.php"
        }).done(function(cartoes){
            $(".quadro[id='3'] .cartoes").html(cartoes);
            addContextmenu();
        });
    }

// adicionar evento do botão direito nos cartões
    function addContextmenu(){
         // Coloca esse evento nos cartoes
        $(".cartao").contextmenu(function(ev){
            
            
            cartao = $(this).attr("name");

            


            
            // É o menu estatico
            $(".menu").removeClass("off");
            ev.preventDefault();
            $(".menu").css({"left":`${ev.clientX - 10}px`});
            $(".menu").css({"top":`${ev.clientY - 10}px`});
        });
    }

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