<?php

include "../conexao.php";

$sql = "SELECT * FROM tb_cartao WHERE quadro = 1";
$cartao = $conexao->prepare($sql);
$cartao->execute();

foreach($cartao as $carrega){
    $databd = $carrega["data_entrega"];
    $data = strtotime($databd);

    $dataF = date('d/m/Y',$data);

    echo "
        <div class='cartao' name='".$carrega["id_cartao"]."' aria-label='Responsavel: ".$carrega["responsavel"]."' data-microtip-position='bottom' role='tooltip'>
            <p>".$carrega["mensagem"]."</p>
            <p class='data'>".$dataF."<p>
            <p class='dias'>4 Dias</p>
        </div>
    ";
}
