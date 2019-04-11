$(document).ready(function() {
    
    carregarCartoes();

// -------------------- Menu do botão direito --------------------// 
// ------ Cartão ------ //
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

// -- Removar cartão -- //

    $("li[id='removeCartao']").click(function(){
        console.log("Remover cartão");

        $.ajax({
            url : "php/removerCartao.php",
            method : "POST",
            data : {
                idCartao : cartao
            }
        }).done(function(){
            carregarCartoes();
        });

        $(".cartaoMenu").addClass("off");
    });


// ------ Quadros -------/

$(".quadroMenu").addClass("off");
    
    $(".quadroMenu").mouseleave(function(){
        $(this).addClass("off");
    });

// -- Adicionar cartão -- //

    $("li[id='QuadroAddCartao']").click(function(){
        console.log("Add Cartão");

        alertAddCartao();
        
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
        quadro = $(this).attr("id");
        ev.preventDefault();
        $(".quadroMenu").removeClass("off");
        $(".quadroMenu").css({"left":`${ev.clientX - 10}px`});
        $(".quadroMenu").css({"top":`${ev.clientY - 10}px`});
    });

// -------------------- Alertify --------------------// 

    alertify.defaults.transition = "zoom";
    alertify.defaults.theme = "semantic";

    function alertAddCartao(){
        alertify.confirm("","", function(){
            mensagem = $("input[id='mensagem']").val();
            dataEntrega = $("input[id=dataEntrega]").val();
            responsavel = $("input[id=responsavel]").val();
            adicionarCartao(mensagem, dataEntrega, responsavel);
            alertify.success("Adicionado Cartão");
        },function(){
            alertify.error("Cancelado");
        }).setting({
            'message'   : "<div class='blocoAlert'><p class='tituloAlert'>Cartão</p><input class ='inputAlert' type='text' id='mensagem'></div><div class='blocoAlert'><p class='tituloAlert'>Data de entraga</p><input class = 'inputAlert' type='text' id='dataEntrega'></div><div class='blocoAlert'><p class='tituloAlert'>Responsavel</p><input class = 'inputAlert' type='text' id='responsavel'></div>",
            'title'     : "Novo Cartão",
            'movable'   : false,
            'closable'  : false,
            'reverseButtons' : true
        }).show();
    }

    function adicionarCartao(mensagem, dataEntrega, responsavel){
        $.ajax({
            url : "php/adicionarCartaoQuadro.php",
            method : "POST",
            data : {
                mensagem : mensagem,
                dataEntrega : dataEntrega,
                quadro : quadro,
                responsavel : responsavel
            }
        }).done(function(n){
            alert(n);
            carregarCartoes();
        });
    }



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