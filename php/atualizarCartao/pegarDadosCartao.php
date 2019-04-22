<?php

include "../conexao.php";

$cartao = $_POST["cartao"];

$sql = "SELECT * FROM tb_cartao WHERE id_cartao = $cartao";
$cartao = $conexao->prepare($sql);
$cartao->execute();

foreach($cartao as $c) {}

echo "
    {\"id_cartao\" : \"".$c["id_cartao"]."\", 
    \"mensagem\" : \"".$c["mensagem"]."\",
    \"data_entrega\" : \"".$c["data_entrega"]."\",
    \"quadro\" : \"".$c["quadro"]."\",
    \"responsavel\" : \"".$c["responsavel"]."\"
}";

