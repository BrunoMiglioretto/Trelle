<?php

include "conexao.php";

$mensagem = $_POST["mensagem"];
$data = $_POST["dataEntrega"];
$dataF = date("Y-m-d", strtotime($data));

$quadro = $_POST["quadro"];
$responsavel = $_POST["responsavel"];

$sql = "INSERT INTO tb_cartao SET mensagem = '".$mensagem."', data_entrega = '".$dataF."', quadro = ".$quadro.", responsavel = '".$responsavel."'";
$novoCartao = $conexao->prepare($sql);
$novoCartao->execute();