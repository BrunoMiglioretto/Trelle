<?php

include "conexao.php";

$idCartao = $_POST["idCartao"];

$sql = "DELETE FROM tb_cartao WHERE id_cartao =".$idCartao;
$remover = $conexao->prepare($sql);
$remover->execute();
