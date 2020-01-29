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

    echo "
        <script>
            alert('Bem vindo ao Trelle!');
            window.location.href = '../../quadros.php';
        </script>
    ";
}

