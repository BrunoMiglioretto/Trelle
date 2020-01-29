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


if($quantidade > 0) { // Caso tenha um usuário com o nome cadastrado
    $_SESSION["id"] = $id_usuario;

    // Query para verificar se o nome e senha condizem
    $querySenha = "SELECT count(id_usuario) as quantidade FROM tb_usuario WHERE nome = '$nome' AND senha = '$senha'";
    $senha = $conexao->prepare($querySenha);
    $senha->execute();

    foreach($senha as $s) 
        $quantidadeSenha = $s["quantidade"];

    if($quantidadeSenha > 0) { 
        echo "
            <script>
                window.location.href = '../../quadros.php';
            </script>
        ";
    } else {
        echo "
            <script>
                alert('Usuário já cadastrado / Senha incorreta');
                window.location.href = '../../index.html';
            </script>
        ";
    }

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
