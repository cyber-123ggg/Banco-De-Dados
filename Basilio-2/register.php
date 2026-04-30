<?php
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $senha = $_POST['senha'];

    // Validações básicas
    if (empty($email) || empty($senha) || strlen($senha) < 6) {
        die("Preencha todos os campos corretamente. Senha deve ter no mínimo 6 caracteres.");
    }

    // Hash da senha (muito importante!)
    $senha_hash = password_hash($senha, PASSWORD_DEFAULT);

    try {
        $stmt = $pdo->prepare("INSERT INTO usuarios (email, senha) VALUES (?, ?)");
        $stmt->execute([$email, $senha_hash]);

        echo "Cadastro realizado com sucesso! <a href='index.html'>Voltar e fazer login</a>";
    } catch (PDOException $e) {
        if ($e->getCode() == 23000) {
            echo "Este email já está cadastrado!";
        } else {
            echo "Erro: " . $e->getMessage();
        }
    }
}
?>