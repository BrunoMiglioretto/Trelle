<?php

include "conexao.php";

$mensagem = $_POST["mensagem"];
$data = $_POST["dataEntrega"];
$quadro = $_POST["quadro"];
$responsavel = $_POST["responsavel"];

$sql = "INSERT INTO tb_cartao SET mensagem = '".$mensagem."', data_entrega = '".$data."', quadro = ".$quadro.", responsavel = '".$responsavel."'";
$novoCartao = $conexao->prepare($sql);
$novoCartao->execute();