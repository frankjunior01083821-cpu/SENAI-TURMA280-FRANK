<?php  
include("connection.php");

$email = $_POST['email'];
$password= $_POST['password'];
$conifrm_password = $_POST['confirm_password'];

$sql = "INSERT INTO user (email, password) VALUES ('$email','$password)";
if($conn->query($sql) === TRUE){
    echo "Usuario cadastrado com sucesso!";
}
else{
    echo "Erro: " . $sgl . "<br>" . $conn->error;
}
 $conn->close();