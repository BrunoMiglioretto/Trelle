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
        console.log("Mover para a fazer");
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
        console.log("Mover para Fazendo");
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
        console.log("Mover para Feito");
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
            alertify.success("Cartão excluido");
        });

        $(".cartaoMenu").addClass("off");
    });

// -------------------- Mover cartões --------------------// 
// -- Movar para A Fazer -- //

function movarCartao(x) {
    let nQuadro = definirQuadro(x);
    if(nQuadro != 0){
        $.ajax({
            url : "php/moverCartao.php",
            method : "POST",
            data : {
                idCartao : cartao,
                nQuadro : nQuadro
            }
        }).done(function(n){
            carregarCartoes();
            console.log(n);
            console.log("Mudou");
        });
    }else{
        carregarCartoes();
        console.log("Recarrego");
    }
}




// ------ Quadros -------/

$(".quadroMenu").addClass("off");
    
    $(".quadroMenu").mouseleave(function(){
        $(this).addClass("off");
    });

// -- Adicionar cartão -- //

    $("li[id='QuadroAddCartao']").click(function(){

        alertAddCartao();
        
        $(".quadroMenu").addClass("off");
    });

// -- Definir quadro -- //

function definirQuadro(x) {
    if(x > 40 && x < 320)
        nQuadro = 1;
    else if(x > 360 && x < 640)
        nQuadro = 2;
    else if(x > 690 && x < 970)
        nQuadro = 3;
    else
        nQuadro = 0;

    return nQuadro;
}



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
            mover(1);
        });
    }

    function carregarQuadro2(){

        $.ajax({
            url : "php/atualizar/quadro2.php"
        }).done(function(cartoes){
            $(".quadro[id='2'] .cartoes").html(cartoes);
            addContextmenu();
            mover(2);
        });
    }

    function carregarQuadro3(){

        $.ajax({
            url : "php/atualizar/quadro3.php"
        }).done(function(cartoes){
            $(".quadro[id='3'] .cartoes").html(cartoes);
            addContextmenu();
            mover(3);
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
        addDataPicker();
        alertify.confirm("","", function(){
            mensagem = $("input[id='mensagem']").val();
            dataEntrega = $("input[id=dataEntrega]").val();
            responsavel = $("input[id=responsavel]").val();
            adicionarCartao(mensagem, dataEntrega, responsavel);
            alertify.success("Adicionado Cartão");
        },function(){
            alertify.error("Cancelado");
        }).setting({
            'message'   : "<div class='blocoAlert'><p class='tituloAlert'>Cartão</p><input class ='inputAlert' type='text' id='mensagem'></div><div class='blocoAlert'><p class='tituloAlert'>Data de entraga</p><input class = 'inputAlert' type='text' id='dataEntrega'></div><div class='blocoAlert'><p class='tituloAlert'>Responsavel</p><input class = 'inputAlert' type='text' id='responsavel'>",
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
        }).done(function(){
            carregarCartoes();
        });
    }
 
// -------------------- Data picker --------------------// 

    function addDataPicker(){
        setTimeout(function(){
            $("#dataEntrega").datepicker({
                dateFormat: "dd-mm-yy",
                dayNamesMin: [ "D", "S", "T", "Q", "Q", "S", "S" ],
                monthNamesShort: [ "Jan", "Fev", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Set", "Out", "Nov", "Dec" ],
                changeMonth: true
            });
        }, 200);
    }

// -------------------- Draggabilly --------------------// 

function mover(numQuadro){

    $.ajax({
        url : "php/idCartoes.php",
        method : "POST",
        data : {
            numQuadro : numQuadro
        }
    }).done(function(ids) {
        if(ids != ""){
            let dados = JSON.parse(ids);
            let tamanho = Object.keys(dados).length;
            for(i = 0; i < tamanho; i++){
                var draggable = $(`.cartao[name='${dados[i].idCartao}']`).draggabilly();
                draggable.on( 'dragStart', function() {
                    cartao = $(this).attr("name");
                });
                var draggie = draggable.data('draggabilly');
                draggie.on( 'dragEnd', function(event, pointer){
                    console.log(`X = ${pointer.pageX}, Y = ${pointer.pageY}, cartão = ${cartao}`);
                    movarCartao(pointer.pageX);
                });
            }
        }
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