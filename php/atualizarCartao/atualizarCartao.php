<?php

include "../conexao.php";

$cartao = $_POST["cartao"];
$mensagem = $_POST["mensagem"];
$dataEntraga = $_POST["dataEntrega"];
$responsavel = $_POST["responsavel"];

$data = date("Y-m-d", strtotime($dataEntraga));

// echo $data."<br>";
// echo $dataEntraga;

$sql = "UPDATE tb_cartao SET mensagem = '$mensagem', data_entrega = '$data', responsavel = '$responsavel' WHERE id_cartao = $cartao";
$atualizarCartao = $conexao->prepare($sql);
$atualizarCartao->execute();
