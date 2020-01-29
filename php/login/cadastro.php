<?php

session_start();

include "../conexao.php";

$nome = $_SESSION["nome"];

$senha = $_POST["senha"];
$confirmarSenha = $_POST["confirmarSenha"];

if ($senha != $confirmarSenha) {
    echo "
        <script>
            alert('Senha e confirmar senha não são iguais');
            window.location.href = 'confirmarSenha.html';
        </script>
    ";
} else {
    $queryAttSenha = "UPDATE tb_usuario SET senha = '$senha' WHERE nome = '$nome'";
    $AttSenha = $conexao->prepare($queryAttSenha);
    $AttSenha->execute();

    $query = "SELECT id_usuario FROM tb_usuario WHERE nome = '$nome'";
    $usuario = $conexao->prepare($query);
    $usuario->execute();

    foreach($usuario as $u) 
        $_SESSION["id_usuario"] = $u["id_usuario"];

    echo "
        <script>
            alert('Bem vindo ao Trelle!');
            window.location.href = '../../quadros.php';
        </script>
    ";
}

