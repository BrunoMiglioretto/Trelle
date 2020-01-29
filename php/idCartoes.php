<?php

session_start();

$numQuadro = $_POST["numQuadro"];

include "conexao.php";

$sql = "SELECT id_cartao FROM tb_cartao WHERE quadro = $numQuadro AND id_usuario = ".$_SESSION["id_usuario"];
$cartao = $conexao->prepare($sql);
$cartao->execute();

$q = $cartao->rowCount();
$i = 0;

if($q != 0){
    echo "[";
    foreach($cartao as $c){
        if($i != ($q - 1))
            echo "{\"idCartao\" : \"".$c["id_cartao"]."\"},";
        else
            echo "{\"idCartao\" : \"".$c["id_cartao"]."\"}]";
        $i++;
    }
}


