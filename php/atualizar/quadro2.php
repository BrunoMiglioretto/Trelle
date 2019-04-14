<?php

include "../conexao.php";

$sql = "SELECT * FROM tb_cartao WHERE quadro = 2";
$cartao = $conexao->prepare($sql);
$cartao->execute();

foreach($cartao as $carrega){
    $databd = $carrega["data_entrega"];
    $data = strtotime($databd);

    $hoje = date("Y-m-d");

    $dataH = date("Y-m-d", $data);
    $diferenca = (strtotime($dataH) - strtotime($hoje)) /86400;
    
    $dataF = date('d/m/Y',$data);
    echo "
        <div class='cartao' name='".$carrega["id_cartao"]."' aria-label='Responsavel: ".$carrega["responsavel"]."' data-microtip-position='right' role='tooltip'>
            <p>".$carrega["mensagem"]."</p>
            <p class='data'>".$dataF."<p>
            <p class='dias'>".$diferenca." Dia(s)</p>
        </div>
    ";
}
