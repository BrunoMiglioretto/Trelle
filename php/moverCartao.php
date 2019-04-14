<?php

include "conexao.php";

$idCartao = $_POST["idCartao"];
$nQuadro = $_POST["nQuadro"];

$sql = "UPDATE tb_cartao SET quadro = $nQuadro WHERE id_cartao = ".$idCartao;
$mover = $conexao->prepare($sql);
$mover->execute();
