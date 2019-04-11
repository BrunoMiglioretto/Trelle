<?php

include "../conexao.php";

$idCartao = $_POST["idCartao"];

$sql = "UPDATE tb_cartao SET quadro = 1 WHERE id_cartao = ".$idCartao;
$mover = $conexao->prepare($sql);
$mover->execute();
