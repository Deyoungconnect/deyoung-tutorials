<?php
require_once 'config.php';

$id = $_GET['id'] ?? 0;

if ($id) {
    $stmt = $pdo->prepare("DELETE FROM inquiries WHERE id = ?");
    $stmt->execute([$id]);
}

header("Location: view.php");
exit();
?>