<?php

include "../conexao.php";

$idCartao = $_POST["idCartao"];

$sql = "UPDATE tb_cartao SET quadro = 3 WHERE id_cartao = ".$idCartao;
$mover = $conexao->prepare($sql);
$mover->execute();
