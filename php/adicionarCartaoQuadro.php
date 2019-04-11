<?php

include "conexao.php";

$mensagem = $_POST["mensagem"];
$data = $_POST["dataEntrega"];
$quadro = $_POST["quadro"];

$sql = "INSERT INTO tb_cartao SET mensagem = '".$mensagem."', data_entrega = '".$data."', quadro = ".$quadro;
$novoCartao = $conexao->prepare($sql);
$novoCartao->execute();