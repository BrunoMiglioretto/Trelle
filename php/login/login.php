<?php

session_start();

include "../conexao.php";

$nome = $_POST["nome"];
$senha = $_POST["senha"];


$query = "SELECT count(id_usuario) as quantidade, id_usuario FROM tb_usuario WHERE nome = '$nome'";
$usuario = $conexao->prepare($query);
$usuario->execute();

foreach($usuario as $q) {
    $quantidade = $q["quantidade"];
    if($quantidade > 0)
        $id_usuario = $q["id_usuario"];
}


if($quantidade > 0) {
    $_SESSION["id"] = $id_usuario;
    echo "
        <script>
            window.location.href = '../../quadros.php';
        </script>
    ";
} else {
    $queryCadastrar = "INSERT INTO tb_usuario SET nome = '$nome', senha = '2c58v25B25'";
    $cadastro = $conexao->prepare($queryCadastrar);
    $cadastro->execute();

    $_SESSION["nome"] = $nome;

    echo "
        <script>
            window.location.href = 'confirmarSenha.html';
        </script>
    ";
}
